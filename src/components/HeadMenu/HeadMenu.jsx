import React from 'react';
import './HeadMenu.css';
import { Link } from 'react-router-dom';

const HeadMenu = () => {
  return (
    <section class="head_menu">
      <div class="row">
        <div class="col-md-12 text-center">
          <ul>
            <li>
              <Link
                to="/"
                className="active-link"
                style={
                  window.location.href === `${window.location.origin}/`
                    ? { borderBottom: '2px solid #f8c73d' }
                    : null
                }
              >
                PRODUCT
              </Link>
            </li>
            <li>
              <Link
                to="/collections/"
                className="active-link"
                style={
                  window.location.href ===
                  `${window.location.origin}/collections/`
                    ? { borderBottom: '2px solid #f8c73d' }
                    : null
                }
                // onSelect={clickcollection}
              >
                COLLECTION
              </Link>
            </li>

            <li>
              <a href="#!" className="active-link">
                BUILD YOUR SOFTWARE
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeadMenu;
