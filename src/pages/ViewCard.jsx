import React, { useState } from 'react';

const CartPage = () => {
  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Deck 1',
      price: 50,
      quantity: 2,
      image: '',
    },
    {
      id: 2,
      name: 'Deck 2',
      price: 75,
      quantity: 1,
      image: '',
    },
  ]);

  // Tính tổng giá trị giỏ hàng
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
    <div className="container mx-auto p-6 mt-[100px]">
    <h1 className='text-2xl mb-5'>Shopping cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 mb-4 shadow-md rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1 mx-4">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <div className="text-lg font-bold">
                ${item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${getTotalPrice()}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$5.00</p>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>${getTotalPrice() + 5}</p>
          </div>
          <button className="w-full bg-[#FFE8AC] text-lg font-bold py-2 px-4 rounded mt-6 hover:bg-blue-600">
             Checkout Now
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CartPage;
