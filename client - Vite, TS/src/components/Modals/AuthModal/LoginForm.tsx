import React from 'react';
import styled from 'styled-components';

import google_icon_white from '@/assets/icons/google_icon.png';
import useLoginThroughGoogle from '@/hooks/useLoginThroughGoogle';
import { IUserToFrontEnd } from '@/interfaces/IUser';
import Form from '@/components/Form';
import { useForm } from 'react-hook-form';
import renderGenericInput from '@/components/Form/Input/GenericsInputs';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { useAuthContext } from '@/contexts/AuthContext';

const LoginFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  form {
    width: 100%;
  }
`;

export interface IGoogleAuthResponse {
  success: boolean;
  data: { userCredentials: IUserToFrontEnd; state: string; accessToken: string; refreshToken: string } | null;
}

const LoginForm = () => {
  const { loginFn: handleEnterButtonClick, applyUserCredentials } = useAuthContext();

  const { initiateGoogleAuth } = useLoginThroughGoogle({
    onMessageReceived: (googleAuthResponse: IGoogleAuthResponse) => {
      const { data } = googleAuthResponse;

      if (data) {
        return applyUserCredentials({ userCredentials: data!.userCredentials });
      }
    },
  });

  const rhfConfig = useForm();

  return (
    <LoginFormContainer>
      <Form axiosCallHook={handleEnterButtonClick} rhfConfig={rhfConfig} buttonConfig={{ label: 'LOGIN' }}>
        {renderGenericInput({ type: 'email', rhfConfig: rhfConfig })}
        {renderGenericInput({ type: 'password', rhfConfig: rhfConfig })}
      </Form>

      <PrimaryButton
        icon={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
            <img src={google_icon_white} alt="google_icon" width={20} style={{ borderRadius: '4px' }} />
          </div>
        }
        label="LOGIN THROUGH GOOGLE"
        attributes={{
          onClick: initiateGoogleAuth,
          type: 'submit',
        }}
      />
    </LoginFormContainer>
  );
};

export default LoginForm;
