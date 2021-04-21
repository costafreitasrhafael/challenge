import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { RiArrowDownSLine, RiLogoutBoxRLine } from 'react-icons/ri';
import { Container, HeaderTitle, HeaderUser, HeaderUserName, ProfileExpand, ProfileTriangle, ProfileBox, ProfileBoxItem } from './styles';

const Header: React.FC = () => {
  const [profileExpand, setProfileExpand] = useState(false);
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies(['central-system']);

  const handleLogout = () => {
    setCookie('token', 'invalid_token');
    removeCookie('id');
    removeCookie('fullname');
    removeCookie('phone');
    removeCookie('profile');
    removeCookie('userEmail');
    history.push('/');
  };

  return (
    <Container>
      <HeaderTitle>Full Stack</HeaderTitle>
      <HeaderUser data-testid="profile-icon" onClick={() => setProfileExpand(!profileExpand)}>
        <HeaderUserName>{cookies.fullname}</HeaderUserName>
        <RiArrowDownSLine size={18} />
      </HeaderUser>
      
      {profileExpand ? (
        <ProfileExpand>
          <ProfileTriangle />
          <ProfileBox>
            <ProfileBoxItem onClick={handleLogout}>
              <RiLogoutBoxRLine size={18} />
              Sair
            </ProfileBoxItem>
          </ProfileBox>
        </ProfileExpand>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Header;
