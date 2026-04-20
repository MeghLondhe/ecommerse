// const mockCartItems = [
//   { id: 1, name: "Leanne Graham", username: "Bret", email: "sincere@april.biz", company: "Romaguera-Crona", qty: 1 },
//   { id: 2, name: "Ervin Howell", username: "Antonette", email: "shanna@melissa.tv", company: "Deckow-Crist", qty: 2 },
//   { id: 3, name: "Clementine Bauch", username: "Samantha", email: "nathan@yesenia.net", company: "Romaguera-Jacobson", qty: 1 },
// ];

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/Cart/cartSlice";

const Cart = () => {
  const mockCartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const removeItem = (user) => {
    dispatch(removeFromCart(user));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
        <span className="bg-indigo-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
          {/* {total} */}
        </span>
      </div>

      {mockCartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <p className="text-lg font-medium">Your cart is empty</p>
          <p className="text-sm mt-1">Add some users to get started</p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 flex flex-col gap-4">
            {mockCartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-5"
              >
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white text-lg font-bold shrink-0">
                  {item.name.charAt(0)}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-400">@{item.username}</p>
                  <p className="text-xs text-gray-400 truncate">{item.email}</p>
                </div>

                {/* Company */}
                <p className="hidden sm:block text-sm text-gray-500 shrink-0">
                  {item.company.name}
                </p>

                {/* Qty controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button className="w-7 h-7 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 text-lg leading-none">
                    −
                  </button>
                  <span className="w-5 text-center text-sm font-medium">
                    {item.qty}
                  </span>
                  <button className="w-7 h-7 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 text-lg leading-none">
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item)}
                  className="p-2 rounded-full text-gray-300 hover:text-red-400 hover:bg-red-50 transition-colors shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Order Summary
              </h2>

              <div className="flex flex-col gap-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Items</span>
                  {/* <span>{total}</span> */}
                </div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-500">Free</span>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div className="flex justify-between font-semibold text-gray-800">
                <span>Total</span>
                <span>$0.00</span>
              </div>

              <button className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold rounded-xl transition-colors">
                Checkout
              </button>

              <button className="w-full py-3 border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
