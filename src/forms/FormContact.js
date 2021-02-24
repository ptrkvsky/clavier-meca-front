import React from 'react';
import { PrimaryButton } from '../styles/components/Buttons';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';

const Form = styled('form')`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  .ipt {
    margin-top: 8px;
    padding: 12px 0;
    border: none;
    border-bottom: 8px solid ${theme.colors.main};
    width: 100%;
    font-size: 32px;
    letter-spacing: -1px;
  }
  .item-form {
    margin-bottom: 48px;
  }
  .label {
    display: block;
    text-transform: uppercase;
    font-size: 24px;
    letter-spacing: 1px;
    font-family: ${theme.fonts.light};
    color: ${theme.colors.contrast};
  }
  .btn {
    margin-top: 24px;
  }
`;

const FormContact = () => {
  return (
    <Form name="contact" method="POST" data-netlify="true">
      <p class="item-form">
        <label>
          <span className="label">Mon prénom </span>
          <input className="ipt" type="text" placeholder="Prénom" name="name" />
        </label>
      </p>
      <p class="item-form">
        <label>
          <span className="label">Mon e-mail </span>
          <input
            className="ipt"
            type="email"
            placeholder="Email"
            name="email"
          />
        </label>
      </p>

      <p>
        <label className="label">
          Mon message :
          <textarea
            placeholder="Un mot sympathique"
            className="ipt"
            name="message"
          ></textarea>
        </label>
      </p>
      <p>
        <PrimaryButton className="btn" type="submit">
          J'envoie
        </PrimaryButton>
      </p>
    </Form>
  );
};

export default FormContact;
