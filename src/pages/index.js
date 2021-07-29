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
              Vitae natoque dictum etiam semper magnis enim feugiat amet
              curabitur tempor orci penatibus. Tellus erat mauris ipsum
              fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.
            </p>
          </div>
        </section>
        <section className="feature left">
          <a href="/#" className="image icon fa-mobile">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h3>Les services Ekokay</h3>
            <p>
              Vitae natoque dictum etiam semper magnis enim feugiat amet
              curabitur tempor orci penatibus. Tellus erat mauris ipsum
              fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.
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
