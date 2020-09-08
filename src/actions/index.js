const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

export const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: 'First redux reducer',
  };
};

export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
    info: 'Second redux reducer',
  };
};
