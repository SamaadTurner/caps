'use strict';

const eventEmitter = require('./eventPool.js');
require('./driver/handler.js');
require('./driver/handler.js');
const triggerOrderPickUp = require('./vendor/handler.js');

const handleGlobalPackageEvents = (eventName, payload) => {
   
  const event = {
    event: eventName,
    time: new Date(),
    payload: payload,
  };
  console.log('EVENT:', event);
};

// this is adding events for each state of the package
eventEmitter.prependListener('pickup',  (payload) => handleGlobalPackageEvents('pickup', payload));
eventEmitter.prependListener('in-transit',  (payload) => handleGlobalPackageEvents('in-transit', payload));
eventEmitter.prependListener('delivered',  (payload) => handleGlobalPackageEvents('delivered', payload));


// for testing specificall

triggerOrderPickUp('1-206-flowers');


module.exports = handleGlobalPackageEvents;