import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import '../styles/pages/landing.css';
import '../styles/global.css';

import logoImg from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wraper">
        <img src={logoImg} alt="happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Caxias</strong>
          <span>Maranhão</span>
        </div>

        <Link to="/orphanage" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
