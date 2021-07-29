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
          L'énergie la plus écologique est celle que l'on ne consomme pas
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
              En France, le secteur résidentiel-tertiaire représente 20% des émissions de gaz à effet de serre
               de par le manque de performance thermique du bâti et l'utilisation des énergies fossiles.
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
               La rénovation du parc existant nous permet d'atteindre une plus grande sobriété énergétique
               tout en nous orientant vers l'utilisation d'énergies non-carbonnées.
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
            <b>EKOKAY</b> est un bureau d'étude indépendant oeuvrant pour la maîtrise de l'énergie.
            L'<b>audit énergétique</b> permet d'identifier les travaux prioritaires tout en quantifiant leur coût fiancier,
             ainsi que le gain énergétique engendré.
            </p>
          </div>
        </section>
      </div>

      <footer className="major container medium">
        <h3>Aide au financement d'un audit</h3>
        <p>
          En Bourgogne-Franche-Comté, le programme <b>EFFILOGIS</b> prend en charge une grande partie du coût de réalisation d'un audit énergétique.
        </p>
        <ul className="actions special">
          <li>
            <Link to="https://www.ajena.org/aides-financieres-regionales-effilogis" className="button">
              En savoir plus...
            </Link>
          </li>
        </ul>
      </footer>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
