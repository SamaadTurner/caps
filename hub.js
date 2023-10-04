'use strict';

const eventEmitter = require('./eventPool.js');


const handleGlobalPackageEvents = (eventName, payload) => {
  const event = {
    event: eventName,
    time: new Date(),
    payload: payload,
  };
  console.log('EVENT:', event);
};


// this is adding events for each state of the package
eventEmitter.on('pickup',  (payload) => handleGlobalPackageEvents('pickup', payload));
eventEmitter.on('in-transit',  (payload) => handleGlobalPackageEvents('in-transit', payload));
eventEmitter.on('delivered',  (payload) => handleGlobalPackageEvents('delivered', payload));


require('./driver');
require('./vendor');



module.exports = handleGlobalPackageEvents;