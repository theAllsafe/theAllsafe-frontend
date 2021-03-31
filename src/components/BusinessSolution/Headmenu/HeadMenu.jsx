import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const HeadMenu = () => {
  return (
    <section class="head_menu">
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
                INVENTORY MANAGEMENT
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="active-link"
                style={
                  window.location.href ===
                  `${window.location.origin}/collections/`
                    ? { borderBottom: '2px solid #f8c73d' }
                    : null
                }
                // onSelect={clickcollection}
              >
                POS SYSTEM
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
