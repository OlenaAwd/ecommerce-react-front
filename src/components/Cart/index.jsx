import { MdDeleteOutline } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../features/cartReducer';
import { loadStripe } from '@stripe/stripe-js';
import { getData } from '../../utils/API';

const Cart = () => {
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    products.forEach(item => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };
  const stripePromise = loadStripe(
    'pk_test_51KSKABBakpKTkoEDu0iS7RB2lAEfe8I2Eicd3LTd4zUX4umJnwViWP8bE5MoBnEWgqacvtZz9105IzYOB0PwBHOE004ZUCrkC7'
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await getData.post('/orders', {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart">
      <h1 className="mb-[30px] text-gray-400 font-normal text-[24px]">Products in your cart</h1>
      {products.map(item => (
        <div key={item.id} className="flex items-center gap-[20px] mb-[30px]">
          <img
            src={process.env.REACT_APP_UPLOAD_URL + item.img}
            alt=""
            className="w-[80px] h-[100px] object-cover"
          />
          <div>
            <h1 className="text-[#808080] font-semibold text-[18px]">{item.title}</h1>
            <p className="mb-[10px] text-[14px] text-[#808080]">{item.desc?.substring(0, 100)}</p>
            <div className="text-[#2879fe]">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <IconContext.Provider value={{ className: 'iconDelete' }}>
            <MdDeleteOutline onClick={() => dispatch(removeItem(item.id))} />
          </IconContext.Provider>
        </div>
      ))}
      <div className="flex justify-between font-semibold text-[18px] mb-[20px]">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button className="cartBtn" onClick={handlePayment}>
        PROCEED TO CHECKOUT
      </button>
      <span
        className="text-red-700 text-[12px] cursor:pointer"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
