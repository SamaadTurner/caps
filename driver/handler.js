'use strict';

const eventEmitter = require('../eventPool.js'); 

const handlePickUp = (payload) => {

  eventEmitter.on('pickup', (payload) => {
    console.log('DRIVER: picked up ', payload.orderId);
  
    eventEmitter.emit('in-transit', payload);
    console.log('DRIVER: delivered ', payload.orderId);
    eventEmitter.emit('delivered', payload);
  });

};

module.exports = handlePickUp;


