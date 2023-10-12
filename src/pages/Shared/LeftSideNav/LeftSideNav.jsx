import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([])

  useEffect(()=> {
    fetch('categories.json')
    .then(res=>res.json())
    .then(data=> setCategories(data))
  },[])

  // console.log(categories);

  return (
    <div className='space-y-6'>
      <h2 className="text-2xl m-4">All Categories</h2>
      {
        categories.map( category=> <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className='block ml-4 text-md font-semibold'
            >
              {category.name}
          </Link>
        )
      }
    </div>
  );
};

export default LeftSideNav;