import React from 'react';
import './AndroidDevelopment.css';
import w2 from './res/web-development2.png';
import topImage from './res/header.png';
import services from './res/services-header.png';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import RequestQuote from '../WebDevelopment/RequestQuote';

function AndroidDevelopement() {
  return (
    <>
      <NavBar />

      <div
        className="col-md-12 heading"
        style={{ marginTop: '5em' }}
        align="center"
      >
        <h2>
          ANDROID <span className="ship">DEVELOPMENT</span>
        </h2>

        <div className="webdev">
          <div className="header">
            <div className="leftHeader">
              <img src={topImage} alt="Header Image" />
            </div>
            <div className="rightHeader">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti qui culpa itaque suscipit incidunt omnis, quas ad, quam
                amet aliquid tempora a! Corrupti porro iure laborum recusandae
                voluptate maiores hic.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="section2 pt-5">
            <div className="card">
              <div className="imgBox">
                <img src={w2} alt="wp" />
              </div>
              <div className="content">
                <h4 className="pt-2">WordPress Websites</h4>
                <p className="pt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur ipsum perspiciatis aliquam earum quos sequi
                  pariatur voluptatum eius, illum enim. Vitae, tempore rem
                  necessitatibus nesciunt cumque voluptate accusamus quaerat
                  iusto!
                </p>
                <button className="btn btn-tas">Read More</button>
              </div>
            </div>

            <div className="card">
              <div className="imgBox">
                <img src={w2} alt="wp" />
              </div>
              <div className="content">
                <h4 className="pt-2">WordPress Websites</h4>
                <p className="pt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur ipsum perspiciatis aliquam earum quos sequi
                  pariatur voluptatum eius, illum enim. Vitae, tempore rem
                  necessitatibus nesciunt cumque voluptate accusamus quaerat
                  iusto!
                </p>
                <button className="btn btn-tas">Read More</button>
              </div>
            </div>

            <div className="card">
              <div className="imgBox">
                <img src={w2} alt="wp" />
              </div>
              <div className="content">
                <h4 className="pt-2">WordPress Websites</h4>
                <p className="pt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur ipsum perspiciatis aliquam earum quos sequi
                  pariatur voluptatum eius, illum enim. Vitae, tempore rem
                  necessitatibus nesciunt cumque voluptate accusamus quaerat
                  iusto!
                </p>
                <button className="btn btn-tas">Read More</button>
              </div>
            </div>
          </div>

          <h1>Lorem ipsum</h1>
          <div className="section3">
            <div className="left_s3">
              <img src={services} alt="Services Image" />
            </div>
            <div className="right_s3">
              <div className="boxy">
                <i className="fas fa-users pr-3"></i>
                <div>
                  <h4>User Friendly Experiences</h4>
                  <p>
                    We develop websites with an engaging and interesting
                    strategy. This ensures we provide a user-friendly experience
                    for the customers of your business
                  </p>
                </div>
              </div>
              <div className="boxy">
                <i class="fas fa-bullseye pr-3"></i>
                <div>
                  <h4>Targeted Communication</h4>
                  <p>
                    We develop websites with an engaging and interesting
                    strategy. This ensures we provide a user-friendly experience
                    for the customers of your business
                  </p>
                </div>
              </div>
              <div className="boxy">
                <i class="fas fa-globe pr-3"></i>
                <div>
                  <h4>Traffic Conversion</h4>
                  <p>
                    We develop websites with an engaging and interesting
                    strategy. This ensures we provide a user-friendly experience
                    for the customers of your business
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section4">
            <div className="leftCard">
              <h1>Web Development Frameworks</h1>
              <p style={{ fontSize: 18 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                expedita fuga distinctio molestiae consequuntur impedit dolore
                voluptatem totam. Facere iure suscipit sapiente, excepturi,
                asperiores soluta aliquam veritatis a corporis, impedit
                exercitationem sequi et adipisci cupiditate? Officiis quae
                <br />
                asperiores soluta aliquam veritatis a corporis, impedit
                exercitationem sequi et adipisci cupiditate? Officiis quae
              </p>
            </div>
            <div className="techs">
              <div className="t_card">
                <i class="devicon-php-plain colored"></i>
                <div className="t_card_text">
                  <h3>php</h3>
                </div>
              </div>
              <div className="t_card">
                <i class="devicon-java-plain-wordmark"></i>
                <div className="t_card_text">
                  <h3>Java</h3>
                </div>
              </div>
              <div className="t_card">
                <i class="devicon-laravel-plain colored"></i>
                <div className="t_card_text">
                  <h3>Laravel</h3>
                </div>
              </div>
              <div className="t_card">
                <i class="devicon-rails-plain-wordmark colored"></i>
                <div className="t_card_text">
                  <h3>Ruby on Rails</h3>
                </div>
              </div>
              <div className="t_card">
                <i class="devicon-react-original colored"></i>
                <div className="t_card_text">
                  <h3>React JS</h3>
                </div>
              </div>
              <div className="t_card">
                <i class="devicon-react-original colored"></i>
                <div className="t_card_text">
                  <h3>React JS</h3>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="f_banner_container">
            <RequestQuote />
            <div className="form_banner">
              <h1>
                REQUEST A FREE <br /> QUOTE
              </h1>
              <h3>
                Share your business ideas with us now and get free consultation
                for app development for your.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AndroidDevelopement;
