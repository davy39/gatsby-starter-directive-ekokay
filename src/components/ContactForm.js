import React from 'react';
export default function ContactForm() {
  return (
    <form method="post" action="https://www.flexyform.com/f/da44406ae23fd4e571cb3a6707088803d65a2888">
      <div className="row">
        <div className="col-6 col-12-mobilep">
          <input type="text" name="name" placeholder="Nom" />
        </div>
        <div className="col-6 col-12-mobilep">
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="col-12">
          <textarea name="adresse" placeholder="Adresse" rows="2"></textarea>
        </div>
        <div className="col-12">
          <textarea name="message" placeholder="Message" rows="6"></textarea>
        </div>
        <div className="col-12">
          <ul className="actions special">
            <li>
              <input type="submit" value="Envoyer" />
            </li>
          </ul>
        </div>
      </div>
      <input type="hidden" name="_recaptcha" id="_recaptcha"/>
    </form>
  );
}
