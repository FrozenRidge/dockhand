var vows = require('vows')
  , assert = require('assert')


vows.describe("Dockhand").addBatch({
  basic : {
    topic: function(){
      return require('./index');
    }

    , "Imports without error": function(docker){
      assert.isNotNull(docker)
    }
  }
}).run()
