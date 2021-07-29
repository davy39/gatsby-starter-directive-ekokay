import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <div id="main">
      <header className="major container medium">
        <h2>
          L'énergie
          <br />
          la plus écologique est
          <br />
          celle que l'on ne consomme pas
        </h2>
      </header>

      <div className="box alt container">
        <section className="feature left">
          <a href="/#" className="image icon fa-signal">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h3>Problématiques</h3>
            <p>
              Les scientifiques nous allertent depuis les années 70 sur le dérèglement climatique
              engendré par l'augmentation des gaz à effet de serre.
              En France, le secteur résidentiel-tertiaire représente 20% des émissions de gaz à effet de serre.
              Les causes sont principalement le manque de performance thermique du bâti et des système, et l'utilisation des énergies fossiles.
            </p>
          </div>
        </section>
        <section className="feature right">
          <a href="/#" className="image icon fa-code">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h3>Solutions</h3>
            <p>
              Il faut tout d'abord viser une plus grande sobriété en abaissant nos besoins énergétiques, et rénover le parc existant pour une plus grande efficacité énergétique
               et une plus grande utilisation des énergies non-carbonnée.
              Pour faciliter cette transition, l'état a mis en place différentes aides financières pour la rénovation de l'habitat individuel.
            </p>
          </div>
        </section>
        <section className="feature left">
          <a href="/#" className="image icon fa-mobile">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h3>Les services EKOKAY</h3>
            <p>
            EKOKAY est un bureau d'étude indépendant oeuvrant pour la maîtrise de l'énergie.
            L'audit énergétique permet d'identifier les travaux prioritaires tout en quantifiant leur coût fiancier,
             ainsi que le gain énergétique engendré.
            Ce dernier se déroule en deux étapes, une visite technique sur site, puis le rendu d'un rapport détaillé.
            </p>
          </div>
        </section>
      </div>

      <footer className="major container medium">
        <h3>Get shady with this starter</h3>
        <p>
          There is also elements page in this template. Click below button to
          check
        </p>
        <ul className="actions special">
          <li>
            <Link to="/Elements" className="button">
              View Elements
            </Link>
          </li>
        </ul>
      </footer>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
