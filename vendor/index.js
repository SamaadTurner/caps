const eventEmitter = require('../eventPool.js');
const { handleDelivered, createOrder } = require('../vendor/handler.js');

eventEmitter.on('delivered', handleDelivered);
eventEmitter.emit('pickup', createOrder('1-206-flowers'));