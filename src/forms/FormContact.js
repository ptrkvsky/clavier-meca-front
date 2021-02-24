import React from 'react';
import { PrimaryButton } from '../styles/components/Buttons';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';

const Form = styled('form')`
  .ipt {
    border: none;
    border-bottom: 8px solid ${theme.colors.main};
  }
  .item-form {
    margin-bottom: 48px;
  }
  .label {
    display: block;
    margin-bottom: 24px;
    text-transform: uppercase;
    font-size: 24px;
    letter-spacing: 1px;
    font-family: ${theme.fonts.light};
    color: ${theme.colors.contrast};
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
        <label>
          Mon message : <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <PrimaryButton type="submit">Send</PrimaryButton>
      </p>
    </Form>
  );
};

export default FormContact;
