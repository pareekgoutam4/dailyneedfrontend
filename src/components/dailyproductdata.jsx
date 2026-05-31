import card1 from "../dailyneedpicture/product-1-1 - Copy.b6014f69e378206a53e3.jpg";
import card2 from "../dailyneedpicture/download.jpg";
import card3 from "../dailyneedpicture/download (1).jpg";
import card4 from "../dailyneedpicture/download (2).jpg";
import card5 from "../dailyneedpicture/download (3).jpg";
import card6 from "../dailyneedpicture/download (4).jpg";
import card7 from "../dailyneedpicture/download (5).jpg";
import card8 from "../dailyneedpicture/download (6).jpg";

const products = [
  {
    id: 1,
    name: "Bandy blandy",
    url: "bandy-blandy",
    category: "snack",
    brand: "Nest Food",
    price: 80,
    oldPrice: 50,
    rating: 4.0,
    stock: 10,
    image: card1,
    description: "Delicious Bandy blandy snack made from quality ingredients.",
    ingredients: ["Wheat", "Sugar", "Milk Powder", "Salt"],
    nutrition: { calories: 250, protein: "5g", fat: "10g", carbs: "30g" },
    reviews: [
      { user: "Ravi", comment: "Tasty!", rating: 5 },
      { user: "Pooja", comment: "Could be crispier.", rating: 4 },
      { user: "Amit", comment: "Kids loved it.", rating: 5 }
    ],
    images: [card1, card2, card3],
    metadata: {
      title: "Bandy blandy",
      descripttion: "Delicious snack made from quality ingredients",
      Keywords: "snack, bandy blandy, food"
    }
  },
  {
    id: 2,
    name: "French fries",
    url: "french-fries",
    category: "snack",
    brand: "Nest Food",
    price: 70,
    oldPrice: 150,
    rating: 4.0,
    stock: 15,
    image: card2,
    description: "Crispy and golden French fries perfect for snacks.",
    ingredients: ["Potatoes", "Salt", "Oil"],
    nutrition: { calories: 300, protein: "3g", fat: "15g", carbs: "40g" },
    reviews: [
      { user: "Anita", comment: "Too salty.", rating: 3 },
      { user: "Rahul", comment: "Loved it!", rating: 5 }
    ],
    images: [card2, card3, card4],
    metadata: {
      title: "French fries",
      descripttion: "Crispy and golden fries",
      Keywords: "fries, potato, snack"
    }
  },
  {
    id: 3,
    name: "Sweet potato & Nut cracker",
    url: "sweet-potato-nut-cracker",
    category: "snack",
    brand: "Nest Food",
    price: 90,
    oldPrice: 50,
    rating: 4.0,
    stock: 8,
    image: card3,
    description: "Healthy snack with sweet potato and nuts.",
    ingredients: ["Sweet Potato", "Almonds", "Cashews", "Honey"],
    nutrition: { calories: 280, protein: "6g", fat: "12g", carbs: "35g" },
    reviews: [
      { user: "Sonia", comment: "Very healthy!", rating: 5 },
      { user: "Vikram", comment: "Tasty but pricey.", rating: 4 }
    ],
    images: [card3, card1, card4],
    metadata: {
      title: "Sweet potato & Nut cracker",
      descripttion: "Healthy snack with nuts",
      Keywords: "healthy snack, nuts, sweet potato"
    }
  },
  {
    id: 4,
    name: "Peanuts cracker",
    url: "peanuts-cracker",
    category: "snack",
    brand: "Nest Food",
    price: 80,
    oldPrice: 80,
    rating: 4.0,
    stock: 12,
    image: card4,
    description: "Crunchy peanut crackers for snack time.",
    ingredients: ["Peanuts", "Flour", "Salt", "Spices"],
    nutrition: { calories: 260, protein: "7g", fat: "14g", carbs: "28g" },
    reviews: [
      { user: "Ramesh", comment: "Perfect with tea.", rating: 5 },
      { user: "Deepa", comment: "A bit oily.", rating: 4 }
    ],
    images: [card4, card5, card6],
    metadata: {
      title: "Peanuts cracker",
      descripttion: "Crunchy peanut snack",
      Keywords: "peanuts, cracker, snack"
    }
  },
  {
    id: 5,
    name: "Organic chips",
    url: "organic-chips",
    category: "snack",
    brand: "Nest Food",
    price: 60,
    oldPrice: 100,
    rating: 4.2,
    stock: 20,
    image: card5,
    description: "Crunchy organic chips made from natural ingredients.",
    ingredients: ["Organic Potato", "Sea Salt", "Sunflower Oil"],
    nutrition: { calories: 200, protein: "2g", fat: "8g", carbs: "28g" },
    reviews: [
      { user: "Maya", comment: "Loved the taste.", rating: 5 },
      { user: "Kiran", comment: "Too small pack.", rating: 4 }
    ],
    images: [card5, card6, card7],
    metadata: {
      title: "Organic chips",
      descripttion: "Natural crispy chips",
      Keywords: "organic, chips, snack"
    }
  },
  {
    id: 6,
    name: "Spicy corn sticks",
    url: "spicy-corn-sticks",
    category: "snack",
    brand: "Nest Food",
    price: 75,
    oldPrice: 120,
    rating: 4.3,
    stock: 9,
    image: card6,
    description: "Spicy corn sticks for your snack cravings.",
    ingredients: ["Corn", "Chili Powder", "Salt", "Oil"],
    nutrition: { calories: 220, protein: "3g", fat: "9g", carbs: "32g" },
    reviews: [
      { user: "Rohit", comment: "Too spicy!", rating: 3 },
      { user: "Neha", comment: "Loved the crunch.", rating: 5 }
    ],
    images: [card6, card7, card8],
    metadata: {
      title: "Spicy corn sticks",
      descripttion: "Spicy crunchy corn snack",
      Keywords: "corn, spicy, snack"
    }
  },
  {
    id: 7,
    name: "Salted almonds",
    url: "salted-almonds",
    category: "snack",
    brand: "Nest Food",
    price: 150,
    oldPrice: 200,
    rating: 4.5,
    stock: 25,
    image: card7,
    description: "Premium salted almonds for healthy snacking.",
    ingredients: ["Almonds", "Salt"],
    nutrition: { calories: 170, protein: "6g", fat: "14g", carbs: "6g" },
    reviews: [
      { user: "Ritu", comment: "High quality!", rating: 5 },
      { user: "Sahil", comment: "Too expensive.", rating: 4 }
    ],
    images: [card7, card8, card1],
    metadata: {
      title: "Salted almonds",
      descripttion: "Healthy almond snack",
      Keywords: "almonds, healthy, dry fruits"
    }
  },
  {
    id: 8,
    name: "Cashew crunchy",
    url: "cashew-crunchy",
    category: "snack",
    brand: "Nest Food",
    price: 180,
    oldPrice: 250,
    rating: 4.6,
    stock: 18,
    image: card8,
    description: "Crunchy cashews roasted to perfection.",
    ingredients: ["Cashews", "Salt", "Oil"],
    nutrition: { calories: 190, protein: "5g", fat: "15g", carbs: "8g" },
    reviews: [
      { user: "Sanya", comment: "Perfect snack.", rating: 5 },
      { user: "Tarun", comment: "Loved it!", rating: 5 }
    ],
    images: [card8, card1, card2],
    metadata: {
      title: "Cashew crunchy",
      descripttion: "Crunchy roasted cashews",
      Keywords: "cashew, dry fruits, snack"
    }
  }
];

export default products;