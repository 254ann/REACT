import React from 'react'

const FilterComponent = ({ searchTerm, selectedCategories, onSearchTermChange, onCategoryChange}) => {
  const categories = ["Electronics", "Clothing", "Books"];
  const handleInputChange = (e) =>{
    onSearchTermChange(e.target.value);
  };

  const handleCheckBoxChange = (e) =>{
    onCategoryChange(e.target.value);
  };

  return (
    <div>
      <input type="text"
      value={searchTerm}
      onChange={handleInputChange}
      placeholder='seach a product' />
      {categories.map((category) =>(
        <div key={category}>
          <label>
            <input type="checkbox"
            value={category}
            checked={selectedCategories.includes(category)}
            onChange={handleCheckBoxChange} />
          </label>

        </div>
      ))}
      
    </div>
  )
}

export default FilterComponent