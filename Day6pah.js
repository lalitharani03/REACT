import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [price, setPriceRange] = useState({ min: 0, max: 1000 });

  useEffect(() => {
    const fetch = async () => {
      try {
        const response =axios.get('categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetch();
  }, []);

  const updatePriceRange = (min, max) => {
    setPriceRange({ min, max });
  };

  return (
    <ProductContext.Provider
      value={{
        categories,
        price,
        updatePriceRange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;


import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const Home = () => {
  const { categories, price, updatePriceRange } = useContext(ProductContext);

  return (
    <div>
      <h1>Online Store</h1>
      <div>
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Price Range</h2>
        <input
          type="number"
          placeholder="Min"
          value={price.min}
          onChange={(e) => updatePriceRange(parseInt(e.target.value), priceRange.max)}
        />
        <input
          type="number"
          placeholder="Max"
          value={price.max}
          onChange={(e) => updatePriceRange(price.min, parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Home;
