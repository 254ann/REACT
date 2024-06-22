// src/App.jsx
import './App.css';
import { useState } from 'react';
import Listcomponent from "./components/StoriesList/list.component";
import LoginForm from "./components/LoginFormAssessment/login.component";
import FilterComponent from "./components/E-commerce/filter.component";
import ProductListComponent from "./components/E-commerce/productList.component";
import ProductProperties from './components/Product-Cards/productProperties.component';

const initialStories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const productsData = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
  { id: 2, name: 'T-Shirt', category: 'Clothing', price: 19 },
  { id: 3, name: 'Book', category: 'Books', price: 14 },
  // Add more products as needed
];

const initialProducts = [
  {
    title: "Jordan Proto Lyte",
    collection: "Running Collection",
    description: "Lightweight and breathable, perfect for running.",
    availableColors: ["Red", "Black", "Orange"],
    price: 245,
    productID: 0,
  },
  {
    title: "Nike Air Zoom Pegasus",
    collection: "Running Collection",
    description: "Designed for comfort and performance.",
    availableColors: ["Blue", "White", "Grey"],
    price: 180,
    productID: 1,
  },
  {
    title: "Adidas Ultraboost",
    collection: "Running Collection",
    description: "Boost technology for ultimate energy return.",
    availableColors: ["Black", "White", "Green"],
    price: 200,
    productID: 2,
  },
  {
    title: "New Balance Fresh Foam",
    collection: "Running Collection",
    description: "Fresh Foam midsole cushioning for a plush feel.",
    availableColors: ["Red", "Black", "Blue"],
    price: 150,
    productID: 3,
  },
  {
    title: "Asics Gel-Kayano",
    collection: "Running Collection",
    description: "High-performance running shoes with GEL technology.",
    availableColors: ["Yellow", "Black", "Orange"],
    price: 160,
    productID: 4,
  },
  {
    title: "Puma Ignite",
    collection: "Running Collection",
    description: "Engineered for maximum speed and comfort.",
    availableColors: ["Red", "Grey", "Black"],
    price: 130,
    productID: 5,
  },
  {
    title: "Brooks Ghost",
    collection: "Running Collection",
    description: "Smooth transitions and soft cushioning for runners.",
    availableColors: ["Blue", "Black", "White"],
    price: 120,
    productID: 6,
  },
  {
    title: "Under Armour HOVR",
    collection: "Running Collection",
    description: "HOVR technology provides a zero-gravity feel.",
    availableColors: ["Green", "Black", "Orange"],
    price: 140,
    productID: 7,
  },
  {
    title: "Saucony Kinvara",
    collection: "Running Collection",
    description: "Minimalist design with responsive cushioning.",
    availableColors: ["Red", "Yellow", "Black"],
    price: 110,
    productID: 8,
  },
  {
    title: "Mizuno Wave Rider",
    collection: "Running Collection",
    description: "Wave technology for smooth and stable rides.",
    availableColors: ["Black", "White", "Blue"],
    price: 150,
    productID: 9,
  },
];

function App() {
  const [inputVal, setInputVal] = useState("");
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const requiredStory = initialStories.filter(story =>
    story.title.toLowerCase().includes(inputVal.toLowerCase())
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]); // Initialize as an empty array

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) =>
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );

  const filteredProducts = productsData.filter((productObj) => {
    const matchesSearchTerm = productObj.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(productObj.category);
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="App">
      <div className="section">
        <input
          type="text"
          placeholder="search a story"
          onChange={handleChange}
          value={inputVal}
        />
        <h2>Stories</h2>
        <Listcomponent list={requiredStory} />
      </div>

      <hr />

      <div className="section">
        <LoginForm />
      </div>

      <hr />

      <div className="section">
        <FilterComponent
          searchTerm={searchTerm}
          selectedCategories={selectedCategories}
          onSearchTermChange={handleSearchTermChange}
          onCategoryChange={handleCategoryChange}
        />
        <ProductListComponent products={filteredProducts} />
      </div>

      <hr />

      <div className="section" id='product-cards'>
        <h2>Product Cards</h2>
        <ProductProperties products={initialProducts} />
      </div>
    </div>
  );
}

export default App;
