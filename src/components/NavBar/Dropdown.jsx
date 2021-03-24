import React from 'react';

const Dropdown = () => {
  return (
    <div className="dropdownMenu">
      {[1, 2, 3, 4, 5, 6].map((el) => (
        <div className="category">
          <h5>
            <i class="fab fa-bandcamp"></i> Category
          </h5>

          <p>Category 1</p>
          <p>Category 2</p>
          <p>Category 3</p>
          <p>Category 4</p>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
