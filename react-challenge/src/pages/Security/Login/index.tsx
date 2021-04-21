import React, { ChangeEvent, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import { Button, Container, EyeIcon, EyeOffIcon, WelcomeText } from './styles';

import intl from '../../../locales/intl';
import CommonAuthComponents from '../AuthComponent';

const Login: React.FC = () => {
  const [cookies, setCookie] = useCookies(['central-system']);

  const [email, setEmail] = useState<string>(cookies.email || '');
  const [password, setPassword] = useState<string>(cookies.password || '');
  const [seePassword, setSeePassword] = useState<boolean>(false);

  const history = useHistory();

  useEffect(() => {
    console.log(cookies.token);
    console.log(cookies.token !== 'undefined' );
  }, [cookies.token]);

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleSendLogin = async () => {

    
    setCookie('id', 1);
    setCookie('fullname', 'Rhafael');    
    setCookie('profile', 'Admin');
    
    history.push('/profession');
  };

  return (
    <CommonAuthComponents>
      <Container>
        <WelcomeText>{intl.get('Pages.Login.welcome')}</WelcomeText>
        <TextField
          id="standart"
          label="E-mail"
          autoComplete="none"
          onChange={handleChangeEmail}
          defaultValue={email}
        />
        <TextField
          id="outlined-password-input"
          label={intl.get('Pages.Login.password')}
          type={seePassword ? 'text' : 'password'}
          onChange={handleChangePassword}
          defaultValue={password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {seePassword ? (
                  <EyeOffIcon
                    onClick={() => {
                      return setSeePassword(false);
                    }}
                  />
                ) : (
                  <EyeIcon
                    onClick={() => {
                      return setSeePassword(true);
                    }}
                  />
                )}
              </InputAdornment>
            ),
          }}
        />

        <Button onClick={handleSendLogin}>
          {intl.get('Pages.Login.button')}
        </Button>

      </Container>
    </CommonAuthComponents>
  );
};

export default Login;
