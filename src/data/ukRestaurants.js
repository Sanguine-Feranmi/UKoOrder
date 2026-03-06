const menuTemplates = {
  "Fast Food": {
    Burgers: ["Classic Burger", "Cheeseburger", "Double Burger", "Bacon Burger", "Veggie Burger", "Chicken Burger", "Fish Burger", "BBQ Burger", "Mushroom Burger", "Spicy Burger"],
    Sides: ["Fries", "Onion Rings", "Mozzarella Sticks", "Chicken Wings", "Nuggets", "Hash Browns", "Coleslaw", "Corn on Cob", "Potato Wedges", "Cheese Bites"],
    Drinks: ["Coca-Cola", "Pepsi", "Sprite", "Fanta", "7UP", "Dr Pepper", "Lemonade", "Iced Tea", "Orange Juice", "Apple Juice"],
    Desserts: ["Ice Cream", "Apple Pie", "Brownie", "Cookies", "Donut", "Milkshake", "Sundae", "Cheesecake", "Muffin", "Waffle"]
  },
  Pizza: {
    Pizza: ["Margherita", "Pepperoni", "Hawaiian", "BBQ Chicken", "Veggie Supreme", "Meat Feast", "Four Cheese", "Seafood", "Mexican", "Buffalo Chicken"],
    Sides: ["Garlic Bread", "Chicken Wings", "Potato Wedges", "Mozzarella Sticks", "Coleslaw", "Onion Rings", "Breadsticks", "Nachos", "Jalapeño Poppers", "Caesar Salad"],
    Drinks: ["Pepsi", "Coca-Cola", "Sprite", "Fanta", "Water", "Juice", "Iced Tea", "Lemonade", "Energy Drink", "Milkshake"],
    Desserts: ["Chocolate Brownie", "Ice Cream", "Cheesecake", "Tiramisu", "Cookie Dough", "Apple Pie", "Cinnamon Sticks", "Donut", "Waffle", "Sundae"]
  },
  Portuguese: {
    Chicken: ["Peri-Peri Chicken", "Grilled Chicken", "Chicken Thighs", "Chicken Wings", "Chicken Breast", "Spicy Chicken", "Lemon Chicken", "Garlic Chicken", "BBQ Chicken", "Butterfly Chicken"],
    Burgers: ["Chicken Burger", "Beef Burger", "Veggie Burger", "Peri Burger", "Double Burger", "Cheese Burger", "Bacon Burger", "Spicy Burger", "Grilled Burger", "Classic Burger"],
    Sides: ["Peri Chips", "Rice", "Coleslaw", "Corn", "Salad", "Garlic Bread", "Onion Rings", "Wedges", "Beans", "Mash"],
    Drinks: ["Lemonade", "Iced Tea", "Coca-Cola", "Sprite", "Water", "Juice", "Smoothie", "Coffee", "Milkshake", "Energy Drink"],
    Desserts: ["Chocolate Cake", "Ice Cream", "Brownie", "Cheesecake", "Pudding", "Tart", "Mousse", "Sundae", "Cookie", "Waffle"]
  },
  Sandwiches: {
    Subs: ["Italian BMT", "Chicken Teriyaki", "Meatball", "Tuna", "Turkey", "Ham", "Veggie", "Steak", "BLT", "Club"],
    Salads: ["Caesar Salad", "Greek Salad", "Garden Salad", "Chicken Salad", "Tuna Salad", "Pasta Salad", "Cobb Salad", "Nicoise Salad", "Caprese Salad", "Asian Salad"],
    Sides: ["Crisps", "Cookies", "Soup", "Fruit", "Yogurt", "Nuts", "Pretzels", "Popcorn", "Crackers", "Cheese"],
    Drinks: ["Orange Juice", "Apple Juice", "Water", "Coffee", "Tea", "Smoothie", "Milkshake", "Soda", "Lemonade", "Iced Coffee"],
    Desserts: ["Cookies", "Brownie", "Muffin", "Donut", "Cake", "Pie", "Tart", "Pudding", "Ice Cream", "Cheesecake"]
  },
  Bakery: {
    Pastries: ["Sausage Roll", "Steak Bake", "Cheese Bake", "Chicken Bake", "Vegan Roll", "Cornish Pasty", "Pork Pie", "Quiche", "Croissant", "Danish"],
    Sandwiches: ["Ham Sandwich", "Cheese Sandwich", "Chicken Sandwich", "Tuna Sandwich", "Egg Sandwich", "BLT", "Club Sandwich", "Turkey Sandwich", "Veggie Sandwich", "Salad Sandwich"],
    Drinks: ["Coffee", "Tea", "Hot Chocolate", "Latte", "Cappuccino", "Espresso", "Mocha", "Juice", "Water", "Smoothie"],
    Desserts: ["Doughnut", "Muffin", "Brownie", "Cookie", "Cake", "Tart", "Scone", "Eclair", "Cupcake", "Flapjack"]
  }
};

// Image mapping for categories using Unsplash
const categoryImages = {
  Burgers: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
  Chicken: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400",
  Pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
  Sides: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400",
  Drinks: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=400",
  Desserts: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400",
  Subs: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
  Salads: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
  Pastries: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
  Sandwiches: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400"
};

function generateMenu(cuisine, restaurantId) {
  const template = menuTemplates[cuisine] || menuTemplates["Fast Food"];
  const menu = [];
  let id = restaurantId * 1000;

  Object.entries(template).forEach(([category, items]) => {
    items.forEach((item, idx) => {
      for (let i = 0; i < 15; i++) {
        const variant = i === 0 ? "" : ` ${["Small", "Medium", "Large", "Extra Large", "Family", "Combo", "Meal Deal", "Special", "Deluxe", "Premium", "Value", "Regular", "Super", "Mega", "Ultimate"][i - 1] || `Option ${i}`}`;
        menu.push({
          id: id++,
          name: `${item}${variant}`,
          category,
          price: parseFloat((2 + Math.random() * 18).toFixed(2)),
          image: categoryImages[category] || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"
        });
      }
    });
  });

  return menu.slice(0, 150);
}

export const ukRestaurants = [
  {
    id: "mcdonalds-london-1",
    name: "McDonald's London Bridge",
    cuisine: "Fast Food",
    rating: 4.2,
    deliveryTime: "15-25",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
    location: "London Bridge, SE1 9SG",
    menuCategories: ["Burgers", "Sides", "Drinks", "Desserts"],
    menu: generateMenu("Fast Food", 1)
  },
  {
    id: "pizza-hut-manchester",
    name: "Pizza Hut Manchester",
    cuisine: "Pizza",
    rating: 4.5,
    deliveryTime: "25-35",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
    location: "Manchester, M1 2HF",
    menuCategories: ["Pizza", "Sides", "Drinks", "Desserts"],
    menu: generateMenu("Pizza", 2)
  },
  {
    id: "kfc-birmingham",
    name: "KFC Birmingham",
    cuisine: "Fast Food",
    rating: 4.3,
    deliveryTime: "20-30",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800",
    location: "Birmingham, B2 4QA",
    menuCategories: ["Chicken", "Burgers", "Sides", "Drinks", "Desserts"],
    menu: generateMenu("Fast Food", 3)
  },
  {
    id: "nandos-liverpool",
    name: "Nando's Liverpool",
    cuisine: "Portuguese",
    rating: 4.6,
    deliveryTime: "30-40",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800",
    location: "Liverpool, L1 8JQ",
    menuCategories: ["Chicken", "Burgers", "Sides", "Drinks", "Desserts"],
    menu: generateMenu("Portuguese", 4)
  },
  {
    id: "burger-king-leeds",
    name: "Burger King Leeds",
    cuisine: "Fast Food",
    rating: 4.1,
    deliveryTime: "20-30",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800",
    location: "Leeds, LS1 5AT",
    menuCategories: ["Burgers", "Sides", "Drinks", "Desserts"],
    menu: generateMenu("Fast Food", 5)
  },
  {
    id: "subway-edinburgh",
    name: "Subway Edinburgh",
    cuisine: "Sandwiches",
    rating: 4.4,
    deliveryTime: "15-25",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    location: "Edinburgh, EH1 1SR",
    menuCategories: ["Subs", "Salads", "Sides", "Drinks", "Desserts"],
    menu: generateMenu("Sandwiches", 6)
  },
  {
    id: "dominos-glasgow",
    name: "Domino's Glasgow",
    cuisine: "Pizza",
    rating: 4.7,
    deliveryTime: "25-35",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    location: "Glasgow, G1 2FF",
    menuCategories: ["Pizza", "Sides", "Drinks", "Desserts"],
    menu: generateMenu("Pizza", 7)
  },
  {
    id: "greggs-newcastle",
    name: "Greggs Newcastle",
    cuisine: "Bakery",
    rating: 4.5,
    deliveryTime: "10-20",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
    location: "Newcastle, NE1 5DL",
    menuCategories: ["Pastries", "Sandwiches", "Drinks", "Desserts"],
    menu: generateMenu("Bakery", 8)
  },
];

export const cuisineTypes = [
  "All",
  "Fast Food",
  "Pizza",
  "Portuguese",
  "Sandwiches",
  "Bakery",
  "Indian",
  "Chinese",
  "Italian",
];
