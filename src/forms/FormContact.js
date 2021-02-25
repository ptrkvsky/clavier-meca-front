import React, { useState, useRef } from 'react';
import { PrimaryButton } from '../styles/components/Buttons';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';
import mediaQueries from '../styles/global/mediaQueries';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const Form = styled('form')`
  width: 947px;
  margin-left: auto;
  margin-right: auto;

  ${mediaQueries.tabletLandscape} {
    width: 100%;
  }

  .input-text-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${mediaQueries.mobile} {
      flex-direction: row;
    }
  }

  .item-form {
    margin-bottom: 48px;
  }

  .label {
    display: block;
    text-transform: uppercase;
    font-size: 34px;
    font-family: ${theme.fonts.title};
  }

  .ipt {
    margin-top: 10px;
    min-height: 54px;
    width: 100%;
    font-size: 24px;
    letter-spacing: -1px;
    color: ${theme.colors.main};
    font-family: ${theme.fonts.main};
    transition: all 0.4s ease-in-out;
    border: none;
    border-bottom: 8px solid ${theme.colors.main};

    &.txt {
      width: 434px;
      ${mediaQueries.mobile} {
        width: 100%;
      }
    }

    &.txtarea {
      padding-top: 8px;
      height: 358px;
      ${mediaQueries.mobile} {
        height: auto;
      }
    }
  }

  .warning {
    margin: 48px 0;
    font-size: 34px;
    line-height: 36px;
  }

  .submit-wrapper {
    display: flex;
    gap: 24px;
    align-items: center;
    ${mediaQueries.mobile} {
      grid-gap: 0;
      flex-direction: column;
    }
  }

  .success {
    font-size: 32px;
    color: ${theme.colors.primary};
  }
`;

const FormContact = () => {
  const formEl = useRef(null);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(formEl.current);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setFormSuccess(true))
      .catch(error => alert(error));
  };

  return (
    <Form
      ref={formEl}
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      onSubmit={handleSubmit}
    >
      <div class="input-text-wrapper">
        <div class="item-form">
          <label>
            <span className="label">Prénom </span>
            <input
              className="ipt txt"
              type="text"
              placeholder="Prénom"
              name="name"
            />
          </label>
        </div>
        <div class="item-form">
          <label>
            <span className="label">E-mail </span>
            <input
              className="ipt txt"
              type="email"
              placeholder="Email"
              name="email"
            />
          </label>
        </div>
      </div>

      <div>
        <label className="label">
          Message
          <textarea
            placeholder="Un mot sympathique"
            className="ipt txtarea"
            name="message"
          ></textarea>
        </label>
      </div>
      <p class="warning">
        Vos informations ne seront transmises à aucun tiers et seront
        automatiquement supprimées après 15 jours.
      </p>
      <div data-netlify-recaptcha="true"></div>
      <div class="submit-wrapper">
        <PrimaryButton big={true} type="submit">
          J'envoie
        </PrimaryButton>
        <div class="success">
          {formSuccess ? 'Votre message a été envoyé avec succès, merci !' : ''}
        </div>
      </div>
    </Form>
  );
};

export default FormContact;
