import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { Link } from 'react-router-dom';

const HeadMenu = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://tas-server.herokuapp.com/api/category')
      .then((res) => setData(res.data));
  }, []);
  const category = data.filter((el) => el.categoryName === 'Business Solution');

  const subcategory = category.length && category[0].subCategories;

  return (
    <section class="head_menu custom">
      <div class="row">
        <div class="col-md-12 text-center">
          <ul>
            <li>
              <Link
                to="/businessSolution"
                className="active-link"
                style={
                  window.location.href ===
                  `${window.location.origin}/businessSolution`
                    ? { borderBottom: '2px solid #f8c73d' }
                    : null
                }
              >
                {subcategory && subcategory[0].subCategoryName}
              </Link>
            </li>
            <li>
              <Link
                to="/collection/pos"
                className="active-link"
                style={
                  window.location.href ===
                  `${window.location.origin}/collection/pos`
                    ? { borderBottom: '2px solid #f8c73d' }
                    : null
                }
                // onSelect={clickcollection}
              >
                {subcategory && subcategory[1].subCategoryName}
              </Link>
            </li>

            <li>
              <a href="#!" className="active-link">
                COMING SOON
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeadMenu;
