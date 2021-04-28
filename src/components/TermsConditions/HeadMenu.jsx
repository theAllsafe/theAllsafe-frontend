import React from 'react';
import './HeadMenu.css';
import { Link } from 'react-router-dom';

const HeadMenu = (props) => {
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
                  window.location.href ===
                  `${window.location.origin}/termsconditions`
                    ? { borderBottom: '2px solid #f8c73d' }
                    : null
                }
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                to="/privacypolicy/"
                className="active-link"
                style={
                  window.location.href ===
                  `${window.location.origin}/privacypolicy/`
                    ? { borderBottom: '2px solid #f8c73d' }
                    : null
                }
                // onSelect={clickcollection}
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="active-link"
                style={
                  window.location.href === `${window.location.origin}/copyright`
                    ? { borderBottom: '2px solid #f8c73d' }
                    : null
                }
              >
                Copyright
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeadMenu;
