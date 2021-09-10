'use strict';

const app = require('express')();
const images = require('./src/images.json');
const resizeOptimizeImages = require('resize-optimize-images');
// 
// const objToArray = (data) => {
//   const array = [];
//   for (let entry in data) {
//     // console.log(data[entry]);
//     array.push(data[entry].url)
//   }
//   console.log(array);
// }
//
// const resizeImages = async (images) => {
//   const options = {
// 		images: images,
// 		width: 450,
// 		quality: 90
// 	};
//   const result = await resizeOptimizeImages(options);
//   return result;
// }

app.get('/images', ({ query }, res) => {
  const i = (query.limit) ? images.slice(0, parseInt(query.limit)) : images;
  // console.log(objToArray(i));
  return res.status(200).json(i);
});

app.get(/^\/(car-images|avatars)\//, (req, res) => {
  // If no extension, just serve the jpg file
  res.status(200).sendFile(`public/${req.url}.jpg`, { root: __dirname });
});

app.listen(5000, () => {
  process.stdout.write('Server is available on http://localhost:5000/\n');
});
