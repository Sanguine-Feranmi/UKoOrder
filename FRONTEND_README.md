# FoodApp - Frontend Documentation

## 🎯 Project Overview
A complete food delivery web application built with React, TypeScript, and Tailwind CSS. Features include restaurant browsing, menu ordering, cart management, and checkout.

## 📦 Tech Stack
- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite (Rolldown)
- **Icons**: Lucide React
- **State Management**: React Context API

## 🚀 Features Implemented

### ✅ Core Features
- 🏪 **Restaurant Listing** - Browse 8 UK restaurants with search & filter
- 🍕 **Dynamic Menus** - 150 unique items per restaurant
- 🛒 **Shopping Cart** - Add/remove items, quantity management
- 💳 **Checkout System** - 2-step checkout (Delivery + Payment)
- ⭐ **Rating System** - Star ratings for restaurants
- ⏱️ **Delivery Time** - Live delivery estimates
- 🔍 **Search & Filter** - By name, location, and cuisine type

### 📱 Pages
1. **Home** - Hero, deals, categories, popular restaurants
2. **Restaurants** - Full restaurant listing with filters
3. **Restaurant Menu** - 150 items with category filters
4. **Checkout** - Complete order flow
5. **About** - Company information
6. **Contact** - Contact form
7. **404** - Not found page

### 🎨 UI/UX Features
- Fully responsive (mobile, tablet, desktop)
- Smooth page transitions
- Loading states
- Scroll to top button
- Hover effects and animations
- Accessible (ARIA labels, keyboard navigation)
- SEO optimized

## 📂 Project Structure

```
src/
├── comps/
│   ├── home/              # Home page components
│   │   ├── hero/
│   │   ├── cats/          # Categories
│   │   ├── popRest/       # Popular restaurants
│   │   ├── promo/         # Promo cards
│   │   └── stat/          # Statistics
│   ├── restaurant/        # Restaurant components
│   │   ├── RestaurantList.jsx
│   │   ├── RestaurantMenu.jsx
│   │   └── Cart.jsx
│   ├── pages/             # Page components
│   │   ├── Restaurants.jsx
│   │   ├── Checkout.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── shared/            # Reusable components
│   │   ├── navbar/
│   │   ├── footer/
│   │   ├── Button.jsx
│   │   ├── Rating.jsx
│   │   ├── Loading.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── banner.jsx
│   └── resturant/         # Restaurant data components
├── context/
│   └── CartContext.jsx    # Global cart state
├── data/
│   └── ukRestaurants.js   # Restaurant & menu data
├── App.tsx                # Main app component
└── index.css              # Global styles

```

## 🔌 Backend Integration Guide

### API Endpoints Needed

#### 1. **Restaurants**
```
GET /api/restaurants
- Returns list of all restaurants
- Query params: ?cuisine=Pizza&search=london

Response:
{
  "restaurants": [
    {
      "id": "string",
      "name": "string",
      "cuisine": "string",
      "rating": number,
      "deliveryTime": "string",
      "image": "string",
      "location": "string",
      "menuCategories": ["string"]
    }
  ]
}
```

#### 2. **Restaurant Menu**
```
GET /api/restaurants/:id/menu
- Returns menu items for specific restaurant
- Query params: ?category=Burgers

Response:
{
  "menu": [
    {
      "id": number,
      "name": "string",
      "category": "string",
      "price": number,
      "image": "string"
    }
  ]
}
```

#### 3. **Orders**
```
POST /api/orders
- Creates new order

Request Body:
{
  "customer": {
    "name": "string",
    "email": "string",
    "phone": "string",
    "address": "string",
    "city": "string",
    "postcode": "string"
  },
  "items": [
    {
      "id": number,
      "name": "string",
      "price": number,
      "quantity": number,
      "restaurantName": "string"
    }
  ],
  "payment": {
    "cardNumber": "string",
    "cardName": "string",
    "expiryDate": "string",
    "cvv": "string"
  },
  "total": number
}

Response:
{
  "orderId": "string",
  "status": "pending|confirmed|delivered",
  "estimatedDelivery": "string"
}
```

#### 4. **Contact Form**
```
POST /api/contact
- Submits contact form

Request Body:
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

### Environment Variables
Create `.env` file:
```
VITE_API_BASE_URL=http://localhost:3000/api
VITE_UNSPLASH_ACCESS_KEY=your_key_here
```

### Data Models

#### Restaurant Model
```typescript
interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  image: string;
  location: string;
  menuCategories: string[];
  menu: MenuItem[];
}
```

#### MenuItem Model
```typescript
interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}
```

#### Order Model
```typescript
interface Order {
  id: string;
  customerId: string;
  items: CartItem[];
  total: number;
  deliveryAddress: Address;
  paymentMethod: string;
  status: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'delivered';
  createdAt: Date;
  estimatedDelivery: Date;
}
```

## 🔧 Integration Steps

### 1. Install Dependencies
```bash
npm install axios
```

### 2. Create API Service
```javascript
// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const restaurantAPI = {
  getAll: (params) => API.get('/restaurants', { params }),
  getById: (id) => API.get(`/restaurants/${id}`),
  getMenu: (id, params) => API.get(`/restaurants/${id}/menu`, { params })
};

export const orderAPI = {
  create: (data) => API.post('/orders', data),
  getById: (id) => API.get(`/orders/${id}`)
};

export const contactAPI = {
  submit: (data) => API.post('/contact', data)
};
```

### 3. Update Components
Replace static data imports with API calls:

```javascript
// Before
import { ukRestaurants } from '../../data/ukRestaurants';

// After
import { restaurantAPI } from '../../services/api';

useEffect(() => {
  const fetchRestaurants = async () => {
    const { data } = await restaurantAPI.getAll();
    setRestaurants(data.restaurants);
  };
  fetchRestaurants();
}, []);
```

## 🎨 Styling Guide

### Color Palette
```css
--primary: #FC8A06    /* Orange */
--secondary: #028643  /* Green */
--danger: #F59E0B     /* Amber */
--hbg: #03081F        /* Dark Blue */
```

### Reusable Components
- `<Button />` - Variants: primary, secondary, danger, outline
- `<Rating />` - Star rating display
- `<Loading />` - Loading spinner
- `<ScrollToTop />` - Scroll to top button

## 📱 Responsive Breakpoints
```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

## 🚀 Deployment Checklist

- [ ] Set up environment variables
- [ ] Configure API endpoints
- [ ] Test all API integrations
- [ ] Optimize images (use CDN)
- [ ] Enable CORS on backend
- [ ] Set up error tracking (Sentry)
- [ ] Configure analytics (Google Analytics)
- [ ] Test payment integration
- [ ] Set up SSL certificate
- [ ] Configure caching strategy

## 🔐 Security Considerations

1. **Payment**: Never store card details on frontend
2. **API Keys**: Use environment variables
3. **CORS**: Configure properly on backend
4. **Input Validation**: Validate all form inputs
5. **XSS Protection**: Sanitize user inputs
6. **HTTPS**: Always use HTTPS in production

## 📊 Performance Optimizations

- ✅ Lazy loading images
- ✅ Code splitting
- ✅ Optimized bundle size
- ✅ Preconnect to external domains
- ✅ Smooth animations (CSS transforms)
- ✅ Debounced search
- ✅ Memoized components

## 🐛 Known Issues & TODOs

- [ ] Add user authentication
- [ ] Implement order tracking
- [ ] Add favorites/wishlist
- [ ] Real-time order updates (WebSocket)
- [ ] Push notifications
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Progressive Web App (PWA)

## 📞 Support

For backend integration questions, contact the frontend team or refer to this documentation.

## 📄 License

MIT License - Feel free to use for your projects!
