*Note: This is rdd - readme driven development. Some of this is speculative :)*

# Dockhand

Node.JS interface to Docker.

[docker.js](https://github.com/FrozenRidge/docker.js) provides a low level interface
to [Docker](http://docs.docker.io/en/latest/api/docker_remote_api.html) and this
module extends that by providing nodelike constructs on top of that, so that you
can transparently use docker instead of `child_process`, stream in and out of docker,
manage containers, etc.


## Dockhand

Dockhand is a function that takes a docker image address as an argument:

```javascript
var dockhand = require('dockhand')('your/docker-image')
```

and provides a high level interface to the docker API. Dockhand simply wraps
[docker.js]() and if you need to access the basic api, you can 'drop down'
to docker.js by doing:

```javascript
var dockerjs = dockhand.api;
```




## DockerProcess : Docker `ChildProcess` Shim

*[Status: Vaporware]*

If you want to transparently run a process in a docker container, instead of a child
process, you can use the Dockhand ChildProcess shim:

```javascript

var ChildProcess = require('dockhand')('your/docker-image').DockerProcess
  , ls = ChildProcess.spawn('ls', ['-lh', '/usr'])

ls.stdout.on('data', function(data) {
  console.log("stdout:", data) // Although ls is run within docker, this console is in the current context
})

```


### Fork
*[Status: Vaporware level red]*

```javascript

I don't even know what this will do

```
