const express = require('express');
const router = express.Router();
var request = require('request');
var fs = require('fs');
const Vision = require('@google-cloud/vision');
const Translate = require('@google-cloud/translate');

const vision = Vision({
  keyFilename: './keyfile.json'
});

const translate = Translate({
  keyFilename: './keyfile.json'
});

function strip64Header(encodedb64) {
  return encodedb64.split(';base64,').pop();
}

function extractText(encodedImgStr) {
  return new Promise((resolve, reject) => {
    var base64Img = strip64Header(encodedImgStr);

    fs.writeFile('image.png', base64Img, { encoding: 'base64' }, (err) => {
      console.log("File created");
    });

    var imageSrcObj = {
      source: { filename: './image.png' }
    }

    vision.textDetection(imageSrcObj).then((results) => {
      const detections = results[0].textAnnotations;
      console.log('Text:');
      // detections.forEach((text) => console.log(text));
      resolve(detections);
    }).catch((err) => {
      console.error('ERROR:', err);
      reject(err);
    });
  });
}

function translateText(rawTextObj){
  console.log("This is the rawTextObj", rawTextObj);
  return new Promise((resolve, reject) => {
    const target = 'en';
    translate.translate(rawTextObj[0].description, target).then((results) => {
      let translations = results[0];
      // translations = Array.isArray(translations) ? translations : [translations];
      let resObj = {
        "rawText": rawTextObj[0].description,
        "transText": translations
      }
      resolve(resObj);
    }).catch((err) => {
      console.log("ERROR", err);
      reject(err);
    });
  });
}

router.post('/upload', (req, res, next) => {
  // Need to use Vision API to extract the text from image.
  var encodedImgStr = req.body.imgSrc;
  // extractText(filePath).then((detections) => {
  //   var detectionsObj = {
  //     "detections": detections
  //   }
  //   res.send(detectionsObj);
  // });
  extractText(encodedImgStr).then(translateText).then((resObj) => {
    res.send(resObj);
  });

});

module.exports = router;
