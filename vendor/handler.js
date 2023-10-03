'use strict';

const eventEmitter = require('../eventPool.js');

const triggerOrderPickUp = (storeName) => {
  const order = {
    store: storeName,
    orderId: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
    customer: 'Jamal Braun',
    address: 'Schmittfort, LA',
  };
  eventEmitter.emit('pickup', order);
};

// handles delivered event
const handleDelivered = (payload) => {
  console.log('Thank you for your order ' , payload.customer);
};
eventEmitter.on('delivered', handleDelivered);

module.exports = triggerOrderPickUp;
module.exports = handleDelivered;