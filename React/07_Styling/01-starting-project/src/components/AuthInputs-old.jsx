import { useState } from 'react';
import { styled } from 'styled-components'

import Button from './Button';
import Input from './Input';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
          <Input
            invalid={emailNotValid}
            label="Email"
            type="email"
            // style={{
            //   backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'
            // }}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
          <Input
            invalid={passwordNotValid}
            label="Password"
            type="password"
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
      </ControlContainer>
      <ActionContainer>
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </ActionContainer>
    </div>
  );
}