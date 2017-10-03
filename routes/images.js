const express = require('express');
const router = express.Router();
var request = require('request');
var fs = require('fs');
const Vision = require('@google-cloud/vision');

const vision = Vision({
  keyFilename: './keyfile.json'
});

function extractText(imgFilePath) {
  return new Promise((resolve, reject) => {
    var imageSrcObj = {
      source: { filename: "./imgs/28.jpg" }
    }
    vision.textDetection(imageSrcObj).then((results) => {
      const detections = results[0].textAnnotations;
      console.log('Text:');
      detections.forEach((text) => console.log(text));
      resolve(detections);
    }).catch((err) => {
      console.error('ERROR:', err);
      reject(err);
    });
  });
}

router.post('/upload', (req, res, next) => {
  // Need to use Vision API to extract the text from image.
  var filePath = './imgs/28.jpg';
  extractText(filePath).then((detections) => {
    var detectionsObj = {
      "detections": detections
    }
    res.send(detectionsObj);
  });
});

module.exports = router;
