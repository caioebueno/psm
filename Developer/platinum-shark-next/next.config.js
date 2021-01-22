const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');

module.exports = withPlugins([
  [withImages],
  [withVideos],
]);

