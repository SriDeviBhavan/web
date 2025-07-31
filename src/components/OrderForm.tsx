import React, { useState } from 'react';
import { restaurantConfig } from '../config/restaurant';

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface OrderItem {
  item: MenuItem;
  quantity: number;
}

const menuItems: MenuItem[] = [
  // Breakfast Items
  { id: '1', name: 'Idli Vada', category: 'Breakfast', price: 80, image: './images/idli vada.jpg' },
  { id: '2', name: 'Masala Dosa', category: 'Breakfast', price: 80, image: './images/masala dosa.jpg' },
  { id: '3', name: 'Plain Dosa', category: 'Breakfast', price: 70, image: './images/plain dosa.jpg' },
  { id: '4', name: 'Khara Bath', category: 'Breakfast', price: 50, image: './images/khara bath.jpg' },
  { id: '5', name: 'Kesari Bath', category: 'Breakfast', price: 50, image: './images/kesari bath.jpg' },
  { id: '6', name: 'Pongal', category: 'Breakfast', price: 80, image: './images/pongal.jpg' },
  { id: '7', name: 'Ghee Rice', category: 'Breakfast', price: 80, image: './images/Ghee rice.jpg' },
  { id: '8', name: 'Chow Chow Bath', category: 'Breakfast', price: 100, image: './images/chow chow bath.jpg' },
  { id: '9', name: 'Butter Masala Dosa', category: 'Breakfast', price: 90, image: './images/butter masala dosa.jpg' },
  { id: '10', name: 'Cheese Masala Dosa', category: 'Breakfast', price: 110, image: './images/cheese masala dosa .jpg' },
  { id: '11', name: 'Khali Dosa', category: 'Breakfast', price: 100, image: './images/khali dosa .jpg' },
  { id: '12', name: 'Neer Dosa', category: 'Breakfast', price: 100, image: './images/neer dosa.jpg' },
  { id: '13', name: 'Ghee Onion Dosa', category: 'Breakfast', price: 70, image: './images/ghe onion dossa.jpg' },
  { id: '14', name: 'Ghee Pudi Thatte', category: 'Breakfast', price: 50, image: './images/ghee pudi thatte .jpg' },
  { id: '15', name: 'Ghee Thate Idli', category: 'Breakfast', price: 50, image: './images/ghee thate idli.jpg' },
  { id: '16', name: 'Button Idli', category: 'Breakfast', price: 70, image: './images/button idli .jpg' },
  { id: '17', name: 'Curd Vada', category: 'Breakfast', price: 60, image: './images/curd vada.jpg' },
  { id: '18', name: 'Mangalore Bajji', category: 'Breakfast', price: 60, image: './images/mangalore bajji.jpg' },
  { id: '19', name: 'Aloo Paratha', category: 'Breakfast', price: 110, image: './images/aloo paratha.jpg' },
  
  // Main Course
  { id: '20', name: 'Paneer Butter Masala', category: 'Main Course', price: 200, image: './images/paneer butter masala.jpg' },
  { id: '21', name: 'Crispy Paneer', category: 'Main Course', price: 200, image: './images/crispy paneer.jpg' },
  { id: '22', name: 'Paneer Rice', category: 'Main Course', price: 140, image: './images/paneer rice .jpg' },
  { id: '23', name: 'Fried Rice', category: 'Main Course', price: 120, image: './images/fried rice.jpg' },
  { id: '24', name: 'Noodles', category: 'Main Course', price: 110, image: './images/noodles.jpg' },
  { id: '25', name: 'Dal Khichdi', category: 'Main Course', price: 200, image: './images/Dal khichdi.jpg' },
  { id: '26', name: 'Paneer Masala Dosa', category: 'Main Course', price: 120, image: './images/paneer masala dosa .jpg' },
  { id: '27', name: 'Paneer Crispy', category: 'Main Course', price: 150, image: './images/paneer crispy.jpg' },
  { id: '28', name: 'Chow Chow', category: 'Main Course', price: 85, image: './images/chow chow.jpg' },
  { id: '29', name: 'Onion', category: 'Main Course', price: 30, image: './images/onion.jpg' },
  
  // Beverages
  { id: '30', name: 'Coffee', category: 'Beverages', price: 25, image: './images/coffee.jpg' },
  { id: '31', name: 'Mango Juice', category: 'Beverages', price: 110, image: './images/mango.png' },
  { id: '32', name: 'Grape Juice', category: 'Beverages', price: 110, image: './images/grape juice.jpg' },
  { id: '33', name: 'Lime Juice', category: 'Beverages', price: 110, image: './images/lime juice.jpg' },
  { id: '34', name: 'Mint Lime Juice', category: 'Beverages', price: 110, image: './images/mint lime juice.jpg' },
  { id: '35', name: 'Chocolate Milkshake', category: 'Beverages', price: 150, image: './images/chocolate milkshake .jpg' },
  { id: '36', name: 'Oreo Milkshake', category: 'Beverages', price: 150, image: './images/oreo milkshake.jpg' },
  { id: '37', name: 'Dry Fruit Milkshake', category: 'Beverages', price: 150, image: './images/dry fruit milkshake .jpg' },
  { id: '38', name: 'Papaya Juice', category: 'Beverages', price: 110, image: './images/papaya juice.jpg' },
  { id: '39', name: 'Pineapple Juice', category: 'Beverages', price: 110, image: './images/pineapple juice.jpg' },
  { id: '40', name: 'Moosambi Juice', category: 'Beverages', price: 110, image: './images/moosambi.jpg' },
  { id: '41', name: 'Nannari Juice', category: 'Beverages', price: 110, image: './images/nannari.jpg' },
  { id: '42', name: 'Blackcurrant Juice', category: 'Beverages', price: 110, image: './images/blackcurrant.png' },
  { id: '43', name: 'Green Pista Juice', category: 'Beverages', price: 110, image: './images/green pista.png' },
  
  // Desserts
  { id: '44', name: 'Carrot Halwa', category: 'Desserts', price: 80, image: './images/carrot halwa.jpg' },
  { id: '45', name: 'Kesari Falooda', category: 'Desserts', price: 90, image: './images/kesari falooda.png' },
  { id: '46', name: 'Butterscotch Ice Cream', category: 'Desserts', price: 70, image: './images/butterscotch.png' },
  { id: '47', name: 'Holige Meal', category: 'Desserts', price: 220, image: './images/holige meal.jpg' },
];

const OrderForm: React.FC = () => {
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    address: '',
    deliveryTime: '',
    specialInstructions: ''
  });

  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const categories = ['All', ...Array.from(new Set(menuItems.map(item => item.category)))];

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const addToOrder = (item: MenuItem) => {
    setOrderItems(prev => {
      const existing = prev.find(orderItem => orderItem.item.id === item.id);
      if (existing) {
        return prev.map(orderItem =>
          orderItem.item.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const removeFromOrder = (itemId: string) => {
    setOrderItems(prev => prev.filter(orderItem => orderItem.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromOrder(itemId);
      return;
    }
    setOrderItems(prev =>
      prev.map(orderItem =>
        orderItem.item.id === itemId
          ? { ...orderItem, quantity }
          : orderItem
      )
    );
  };

  const getSubtotal = () => {
    return orderItems.reduce((total, orderItem) => 
      total + (orderItem.item.price * orderItem.quantity), 0
    );
  };

  const getDeliveryCharge = () => {
    const subtotal = getSubtotal();
    return subtotal >= restaurantConfig.deliveryInfo.freeDeliveryAbove ? 0 : restaurantConfig.deliveryInfo.deliveryCharge;
  };

  const getTotalAmount = () => {
    return getSubtotal() + getDeliveryCharge();
  };

  const generateWhatsAppMessage = () => {
    const items = orderItems.map(orderItem => 
      `${orderItem.item.name} x${orderItem.quantity} - ₹${orderItem.item.price * orderItem.quantity}`
    ).join('\n');

    const subtotal = getSubtotal();
    const deliveryCharge = getDeliveryCharge();
    const total = getTotalAmount();

    const message = `🍽️ *New Order - ${restaurantConfig.name}*

👤 *Customer Details:*
Name: ${customerDetails.name}
Phone: ${customerDetails.phone}
Address: ${customerDetails.address}
Delivery Time: ${customerDetails.deliveryTime}
${customerDetails.specialInstructions ? `Special Instructions: ${customerDetails.specialInstructions}` : ''}

📋 *Order Items:*
${items}

💰 *Order Summary:*
Subtotal: ₹${subtotal}
Delivery Charge: ${deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
*Total Amount: ₹${total}*

🕐 *Order Time:* ${new Date().toLocaleString('en-IN')}`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${restaurantConfig.whatsappNumber}?text=${encodedMessage}`;
  };

  const handleSubmit = () => {
    if (!customerDetails.name || !customerDetails.phone || orderItems.length === 0) {
      alert('Please fill in all required fields and add at least one item to your order.');
      return;
    }
    
    const totalAmount = getTotalAmount();
    if (totalAmount < restaurantConfig.deliveryInfo.minimumOrder) {
      alert(`Minimum order amount is ₹${restaurantConfig.deliveryInfo.minimumOrder}. Please add more items to your order.`);
      return;
    }
    
    setShowOrderSummary(true);
  };

  const sendWhatsAppOrder = () => {
    window.open(generateWhatsAppMessage(), '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-white-50 to-sdb-gold-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-filter-brown-800 mb-4 tracking-wide">🍽️ Online Ordering</h1>
          <p className="text-xl md:text-2xl text-filter-brown-600 font-light">Order your favorite dishes from {restaurantConfig.name}</p>
        </div>

        {/* Delivery Information Banner */}
        <div className="bg-gradient-to-r from-sdb-gold-100 to-leaf-green-100 border border-sdb-gold-200 rounded-2xl p-6 mb-8 shadow-soft">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm md:text-base">
            <div className="flex items-center space-x-3">
              <span className="text-leaf-green-600 text-xl">🚚</span>
              <span className="font-semibold text-filter-brown-700">Delivery in {restaurantConfig.deliveryInfo.deliveryTime}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-leaf-green-600 text-xl">💰</span>
              <span className="font-semibold text-filter-brown-700">Min. order ₹{restaurantConfig.deliveryInfo.minimumOrder}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-leaf-green-600 text-xl">🎉</span>
              <span className="font-semibold text-filter-brown-700">Free delivery above ₹{restaurantConfig.deliveryInfo.freeDeliveryAbove}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-leaf-green-600 text-xl">📱</span>
              <span className="font-semibold text-filter-brown-700">Order via WhatsApp</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customer Details Form */}
          <div className="lg:col-span-1">
            <div className="bg-cream-white-50 rounded-2xl shadow-soft p-6 md:p-8 sticky top-4 border border-sdb-gold-200">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-filter-brown-800 mb-6 tracking-wide">👤 Customer Details</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-filter-brown-700 mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={customerDetails.name}
                    onChange={(e) => setCustomerDetails(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-filter-brown-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sdb-gold-400 focus:border-sdb-gold-400 transition-all duration-200 bg-white"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-filter-brown-700 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={customerDetails.phone}
                    onChange={(e) => setCustomerDetails(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 border border-filter-brown-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sdb-gold-400 focus:border-sdb-gold-400 transition-all duration-200 bg-white"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-filter-brown-700 mb-3">
                    Delivery Address *
                  </label>
                  <textarea
                    value={customerDetails.address}
                    onChange={(e) => setCustomerDetails(prev => ({ ...prev, address: e.target.value }))}
                    className="w-full px-4 py-3 border border-filter-brown-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sdb-gold-400 focus:border-sdb-gold-400 transition-all duration-200 bg-white"
                    rows={3}
                    placeholder="Your delivery address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-filter-brown-700 mb-3">
                    Preferred Delivery Time
                  </label>
                  <input
                    type="text"
                    value={customerDetails.deliveryTime}
                    onChange={(e) => setCustomerDetails(prev => ({ ...prev, deliveryTime: e.target.value }))}
                    className="w-full px-4 py-3 border border-filter-brown-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sdb-gold-400 focus:border-sdb-gold-400 transition-all duration-200 bg-white"
                    placeholder="e.g., 7:30 PM or ASAP"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-filter-brown-700 mb-3">
                    Special Instructions
                  </label>
                  <textarea
                    value={customerDetails.specialInstructions}
                    onChange={(e) => setCustomerDetails(prev => ({ ...prev, specialInstructions: e.target.value }))}
                    className="w-full px-4 py-3 border border-filter-brown-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sdb-gold-400 focus:border-sdb-gold-400 transition-all duration-200 bg-white"
                    rows={2}
                    placeholder="Any special requests or instructions"
                  />
                </div>
              </div>

              {/* Order Summary */}
              {orderItems.length > 0 && (
                <div className="mt-8 pt-8 border-t border-sdb-gold-200">
                  <h3 className="text-xl font-display font-bold text-filter-brown-800 mb-6 tracking-wide">📋 Your Order</h3>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {orderItems.map((orderItem) => (
                      <div key={orderItem.item.id} className="flex items-center justify-between bg-sdb-gold-50 p-4 rounded-xl border border-sdb-gold-200">
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-filter-brown-800">{orderItem.item.name}</p>
                          <p className="text-xs text-filter-brown-600">₹{orderItem.item.price} each</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(orderItem.item.id, orderItem.quantity - 1)}
                            className="w-8 h-8 bg-leaf-green-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-leaf-green-600 transition-colors shadow-soft"
                          >
                            -
                          </button>
                          <span className="w-10 text-center text-sm font-semibold text-filter-brown-800">{orderItem.quantity}</span>
                          <button
                            onClick={() => updateQuantity(orderItem.item.id, orderItem.quantity + 1)}
                            className="w-8 h-8 bg-leaf-green-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-leaf-green-600 transition-colors shadow-soft"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-sdb-gold-200">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="font-semibold text-filter-brown-700">Subtotal:</span>
                        <span className="font-bold text-filter-brown-800">₹{getSubtotal()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-filter-brown-700">Delivery Charge:</span>
                        <span className={`font-bold ${getDeliveryCharge() === 0 ? 'text-leaf-green-600' : 'text-filter-brown-800'}`}>
                          {getDeliveryCharge() === 0 ? 'FREE' : `₹${getDeliveryCharge()}`}
                        </span>
                      </div>
                      {getSubtotal() < restaurantConfig.deliveryInfo.freeDeliveryAbove && (
                        <div className="text-xs text-leaf-green-600 font-semibold bg-leaf-green-50 p-2 rounded-lg">
                          Order ₹{restaurantConfig.deliveryInfo.freeDeliveryAbove - getSubtotal()} more for free delivery!
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-sdb-gold-200 mt-4">
                      <span className="font-bold text-lg text-filter-brown-800">Total:</span>
                      <span className="font-bold text-2xl text-sdb-gold-600">₹{getTotalAmount()}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full mt-6 bg-sdb-gold-400 hover:bg-sdb-gold-500 text-filter-brown-800 py-4 px-6 rounded-xl font-semibold transition-all duration-200 shadow-medium hover:shadow-strong transform hover:-translate-y-1"
                  >
                    📱 Send Order via WhatsApp
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Menu Items */}
          <div className="lg:col-span-2">
            <div className="bg-cream-white-50 rounded-2xl shadow-soft p-6 md:p-8 border border-sdb-gold-200">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-filter-brown-800 mb-6 tracking-wide">🍽️ Menu</h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-sdb-gold-400 text-filter-brown-800 shadow-medium'
                        : 'bg-white text-filter-brown-700 hover:bg-sdb-gold-50 hover:shadow-soft border border-sdb-gold-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Menu Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map((item) => (
                  <div key={item.id} className="border border-sdb-gold-200 rounded-2xl p-6 hover:shadow-medium transition-all duration-200 bg-gradient-to-br from-white to-sdb-gold-50/30">
                    <div className="flex items-start space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-xl bg-gray-100 shadow-soft"
                        onError={(e) => {
                          console.log('Image failed to load:', item.image);
                          e.currentTarget.src = './logo.png';
                        }}
                        onLoad={(e) => {
                          console.log('Image loaded successfully:', item.image);
                          e.currentTarget.classList.remove('bg-gray-100');
                        }}
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-filter-brown-800 text-lg mb-1">{item.name}</h3>
                        <p className="text-sm text-filter-brown-600 mb-3 font-medium">{item.category}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sdb-gold-600 text-xl">₹{item.price}</span>
                          <button
                            onClick={() => addToOrder(item)}
                            className="bg-leaf-green-500 hover:bg-leaf-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 shadow-soft hover:shadow-medium transform hover:-translate-y-1"
                          >
                            Add to Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Modal */}
        {showOrderSummary && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-cream-white-50 rounded-2xl max-w-md w-full p-8 shadow-strong border border-sdb-gold-200">
              <h3 className="text-2xl font-display font-bold text-filter-brown-800 mb-6 tracking-wide">📋 Order Summary</h3>
              <div className="space-y-3 mb-6 max-h-40 overflow-y-auto">
                {orderItems.map((orderItem) => (
                  <div key={orderItem.item.id} className="flex justify-between bg-sdb-gold-50 p-3 rounded-xl border border-sdb-gold-200">
                    <span className="font-semibold text-filter-brown-800">{orderItem.item.name} x{orderItem.quantity}</span>
                    <span className="font-bold text-sdb-gold-600">₹{orderItem.item.price * orderItem.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-sdb-gold-200 pt-4 mb-6">
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-filter-brown-800">Total:</span>
                  <span className="text-sdb-gold-600">₹{getTotalAmount()}</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowOrderSummary(false)}
                  className="flex-1 bg-filter-brown-200 hover:bg-filter-brown-300 text-filter-brown-800 py-3 px-4 rounded-xl font-semibold transition-all duration-200"
                >
                  Edit Order
                </button>
                <button
                  onClick={sendWhatsAppOrder}
                  className="flex-1 bg-leaf-green-500 hover:bg-leaf-green-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 shadow-medium hover:shadow-strong"
                >
                  📱 Send to WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderForm; 