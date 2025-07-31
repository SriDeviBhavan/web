# 🍽️ Online Ordering System - Sri Devi Bhavan

## Overview
This enhancement adds a comprehensive online ordering system to the Sri Devi Bhavan website that generates WhatsApp messages with customer details and order information.

## Features

### 📋 Order Form
- **Customer Details**: Name, phone, address, delivery time, special instructions
- **Menu Selection**: Browse items by category (Breakfast, Main Course, Beverages, Desserts)
- **Quantity Management**: Add/remove items with quantity controls
- **Real-time Pricing**: Live calculation of subtotal, delivery charges, and total

### 🚚 Delivery System
- **Minimum Order**: ₹100 minimum order requirement
- **Delivery Charges**: ₹30 delivery charge (waived for orders above ₹300)
- **Free Delivery**: Orders above ₹300 qualify for free delivery
- **Delivery Time**: 30-45 minutes estimated delivery time

### 📱 WhatsApp Integration
- **Automated Messages**: Generates formatted WhatsApp messages with:
  - Customer details
  - Complete order items with quantities and prices
  - Order summary (subtotal, delivery charge, total)
  - Timestamp
- **Direct Link**: Opens WhatsApp with pre-filled message

## Configuration

### Restaurant Settings
Edit `src/config/restaurant.ts` to update:
- WhatsApp number
- Phone number
- Address
- Delivery charges and minimums
- Opening hours
- Social media links

### Menu Items
Update the `menuItems` array in `src/components/OrderForm.tsx` to:
- Add new menu items
- Modify prices
- Change categories
- Update images

## Usage

### For Customers
1. Click "🍽️ Order Online" button in the header
2. Fill in customer details (name, phone, address required)
3. Browse menu by category and add items to cart
4. Adjust quantities as needed
5. Review order summary with delivery charges
6. Click "Send Order via WhatsApp" to place order

### For Restaurant
1. Receive WhatsApp message with complete order details
2. Process order and contact customer if needed
3. Prepare and deliver order

## Technical Implementation

### Components
- `OrderForm.tsx`: Main ordering interface
- `Header.tsx`: Updated with navigation to order form
- `App.tsx`: Added routing between home and order pages

### State Management
- Customer details form state
- Order items with quantities
- Category filtering
- Order summary modal

### WhatsApp Integration
- URL encoding for special characters
- Formatted message with emojis and markdown
- Direct WhatsApp Web/App opening

## Customization

### Adding New Menu Items
```typescript
{
  id: '25',
  name: 'New Dish Name',
  category: 'Category Name',
  price: 150,
  image: '/images/new-dish.jpg'
}
```

### Modifying Delivery Settings
```typescript
deliveryInfo: {
  minimumOrder: 150,        // Change minimum order
  deliveryCharge: 40,       // Change delivery charge
  freeDeliveryAbove: 400,   // Change free delivery threshold
  deliveryTime: '45-60 minutes', // Update delivery time
}
```

### Updating WhatsApp Number
```typescript
whatsappNumber: '919876543210', // Replace with actual number
```

## Browser Compatibility
- Modern browsers with ES6+ support
- Mobile-responsive design
- WhatsApp Web/App integration

## Future Enhancements
- Payment integration
- Order tracking
- Customer accounts
- Order history
- Reviews and ratings
- Loyalty program 