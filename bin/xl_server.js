#!/usr/bin/env node

var path = require('path');
var argv = require('yargs').argv
var program = require('commander')
var shell = require('shelljs')
var start = require('../lib/start.js')
// 如果存在本地的命令，执行本地的
try {
    var localWebpack = require.resolve(path.join(process.cwd(), "node_modules", "xl_server", "bin", "xl_server.js"));
    if (__filename !== localWebpack) {
        return require(localWebpack);
    }
} catch (e) {
}


let package = JSON.parse(shell.cat(path.join(__dirname, '../package.json')))


program
    .version(package.version)
    .usage('[path] [options]')
    .option('-p', '端口号')
    .action((path) => {
      start({
        p:argv.p,
        path
      })
    })

program.parse(process.argv)
