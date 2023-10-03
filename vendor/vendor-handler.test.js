'use strict';

const triggerOrderPickUp = require('../vendor/handler.js');
const handleDelivered = require('../vendor/handler.js');

beforeEach(() => {
  console.log = jest.fn();
});

describe('Testing the triggerOrderPickup handler', () => {
  test('Should trigger an order pickup', () => {
    triggerOrderPickUp('1-206-flowers');
    expect(console.log).toHaveBeenCalled();
  });
});

describe('Testing the handleDelivered handler', () => {
  test('Should handle a delivered event', () => {
    handleDelivered({
      store: '1-206-flowers',
      orderId: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA',
    });
    expect(console.log).toHaveBeenCalled();
  });
});