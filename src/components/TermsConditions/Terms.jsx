import React from 'react';
import HeadMenu from './HeadMenu';
import NavBar from '../NavBar/NavBar';
import './terms.css';

const Terms = (props) => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt eum tempore odit vel pariatur eius soluta itaque neque doloribus fugiat in labore, ea quae cumque ab quas? Mollitia voluptatem soluta corrupti sit, iure est deleniti debitis, tenetur, ab unde corporis nobis? Voluptatum reiciendis omnis optio. Eos sint, id facilis, minima eligendi laudantium saepe vel accusamus cum aperiam tempora officia, voluptate sed doloribus ipsam incidunt distinctio inventore delectus? Suscipit, soluta placeat? Ad atque saepe error ipsum ducimus odio! Velit, vitae, saepe quia sit sint corrupti laudantium natus accusamus quod, mollitia optio dolores error repellendus atque. Repellendus nam sint blanditiis vitae consequuntur?';
  return (
    <>
      <NavBar />
      <div className="termsWrapper">
        <h1 className="text-center">Terms and Conditions</h1>
        <HeadMenu />

        <div className="mainSection">
          <div className="published">
            <p>Published: 28 April, 2021</p>
            <p>Updated: 28 April, 2021</p>
          </div>

          <h1 className="text-center termsOfUse">Terms Of Use</h1>

          <div className="contentText">
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
