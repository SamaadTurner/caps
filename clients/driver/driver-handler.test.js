const handlePickUp = require('./handler.js');

beforeEach(() => {
  console.log = jest.fn();
});

describe('Testing the handlePickUp handler', () => { 
  test('Should console log', () => {
    handlePickUp({
      store: '1-206-flowers',
      orderId: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA',
    });
    expect(console.log).toHaveBeenCalled();
  });
});