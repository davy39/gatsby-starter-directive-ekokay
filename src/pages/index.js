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
              En France, le secteur résidentiel-tertiaire représente 20% des émissions de gaz à effet de serre responsables du dérèglement climatique.
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
              Il nous faut atteindre une plus grande sobriété en abaissant nos besoins énergétiques
               par la rénovation du parc existant et nous orienter vers l'utilisation d'énergies non-carbonnées.
               Pour accélérer cette transition, l'état a mis en place différentes aides financières pour la rénovation de l'habitat individuel.
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
            L'<b>audit énergétique</b> permet d'identifier les travaux prioritaires tout en quantifiant leur coût fiancier,
             ainsi que le gain énergétique engendré.
            Ce dernier se déroule en deux étapes, une visite technique sur site, puis le rendu d'un rapport détaillé.
            </p>
          </div>
        </section>
      </div>

      <footer className="major container medium">
        <h3>Get shady with this starter</h3>
        <p>
          En Bourgogne-Franche-Comté, le programme EFFILOGIS prend en charge une grande partie du coût de réalisation d'un audit énergétique.
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
