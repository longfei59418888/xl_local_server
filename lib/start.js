const chalk = require('chalk')
const {exec} = require('child_process')
const express =  require('express')
const path = require('path')


module.exports = (argv)=>{
  const port = argv.p
  let webPath = argv.path
  webPath = path.resolve(process.cwd(),webPath)
  var app = new express()
  app.use(express.static(webPath))
  app.get('/',function (req,res) {
    res.sendFile(path.resolve(webPath,'index.html'))
  })
  app.get('/:name',function (req,res) {
    res.sendFile(path.resolve(webPath,req.params.name))
  })
  app.get('/:name/*',function (req,res) {
    res.sendFile(path.resolve(webPath,req.params.name))
  })
  app.listen(port, '127.0.0.1', function(err) {
    if (err) {
      console.log(err)
      return;
    }
    console.log('Listening at 127.0.0.1:'+port);
  });
}
