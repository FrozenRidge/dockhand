// Node interface to Docker
// http://docker.io

var docker = require('docker.js')

var dockhand = module.exports = function(image, opts){

  // Defaults
  opts = opts || {}
  opts.host = opts.host || "http://localhost:4243"

  var dock = docker(opts)


  return {

    DockerProcess : {
      spawn : function(){}
    }

  }
}
