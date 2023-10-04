const eventEmitter = require('../eventPool.js');
const handlePickUp = require('./handler.js');

eventEmitter.on('pickup', handlePickUp);