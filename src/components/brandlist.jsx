import React from 'react';
import './brandlist.css';

const BrandList = ({ brands }) => {
    console.log('brands in brandList'+brands)
  return (
    <div className="brand-list">
      {brands.map(brand => (
        <div key={brand.brandId} className="brand-item">
          <h3>{brand.brandName}</h3>
          <p>Brand ID: {brand.brandId}</p>
          </div>
      ))}
    </div>
  );
}

export default BrandList;
