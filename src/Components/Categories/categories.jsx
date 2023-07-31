import Slider from "react-slick";
import './categories.css'
import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const BASE_URL = process.env.REACT_APP_BASE_URL;


const Categories = () => {
    const [categories, setCategories] = useState([]); 
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          setLoading(true);
          const response = await fetch(`${BASE_URL}/3/genre/movie/list`, {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            throw new Error('Failed to fetch categories data');
          }
  
          const data = await response.json();
          setCategories(data.genres); 
          setLoading(false);
        } catch (error) {
          console.error('Error fetching categories data:', error);
          setLoading(false);
        }
      };
  
      fetchCategories();
    }, []);
  
    if (loading) {
      return <h1>Loading categories...</h1>;
    }
  
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
    };
  
    return (
      <div className="latest-container">
        <h2 className="latest-title">Categories</h2>
        <Slider className="category-slider" {...settings}>
          {categories.map((category) => (
            <div key={category.id} className="category-item">
              <h3>{category.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default Categories;
  