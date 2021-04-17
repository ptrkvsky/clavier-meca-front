import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { PrimaryButton } from '../styles/components/Buttons';
import theme from '../styles/global/theme';
import mediaQueries from '../styles/global/mediaQueries';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formEl.current);
    fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setFormSuccess(true))
      .catch((error) => console.error(error));
  };

  return (
    <Form
      ref={formEl}
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div className="input-text-wrapper">
        <div className="item-form">
          <label htmlFor="first-name">
            <span className="label">Prénom </span>
            <input
              id="first-name"
              className="ipt txt"
              type="text"
              placeholder="Prénom"
              name="name"
            />
          </label>
        </div>
        <div className="item-form">
          <label htmlFor="email">
            <span className="label">E-mail </span>
            <input
              id="email"
              className="ipt txt"
              type="email"
              placeholder="Email"
              name="email"
            />
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="label">
          Message
          <textarea
            id="message"
            placeholder="Un mot sympathique"
            className="ipt txtarea"
            name="message"
          />
        </label>
      </div>
      <p className="warning">
        Vos informations ne seront transmises à aucun tiers et seront
        automatiquement supprimées après 15 jours.
      </p>
      <div data-netlify-recaptcha="true" />
      <div className="submit-wrapper">
        <PrimaryButton big type="submit">
          J&apos;envoie
        </PrimaryButton>
        <div className="success">
          {formSuccess ? 'Votre message a été envoyé avec succès, merci !' : ''}
        </div>
      </div>
    </Form>
  );
};

export default FormContact;
