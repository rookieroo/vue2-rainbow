var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`rainbow/packages/${key}`] = `rainbow/lib/${key}`;
});

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));

utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`rainbow/src/utils/${file}`] = `rainbow/lib/utils/${file}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  'rainbow': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules/;
