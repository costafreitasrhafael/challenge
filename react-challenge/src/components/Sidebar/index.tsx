import React, { useState } from 'react';
import { RiDashboardFill, RiMenuUnfoldLine, RiMenuFoldLine, RiGroupFill, RiProfileFill } from 'react-icons/ri';

import intl from '../../locales/intl';
import SimpleMenuItem from './SimpleMenuItem';
import { Container, MenuHamburger } from './styles';

const Sidebar: React.FC = () => {
  const [isExpand, setIsExpand] = useState(true);

  return (
    <Container expand={isExpand}>
      <MenuHamburger
        data-testid="menu-hamburguer"
        expand={isExpand}
        onClick={() => setIsExpand(!isExpand)}
      >
        {isExpand ? (
          <RiMenuFoldLine size={22} />
        ) : (
          <RiMenuUnfoldLine size={22} />
        )}
      </MenuHamburger>

      <SimpleMenuItem
        testid="dashboard-link"
        title={intl.get('Components.Sidebar.dashboard')}
        urlPath="/dashboard"
        Icon={RiDashboardFill}
        expand={isExpand}
      />

      <SimpleMenuItem
        testid="transactions-link"
        title={intl.get('Components.Sidebar.professional')}
        urlPath="/professional"
        Icon={RiGroupFill}
        expand={isExpand}
      />

      <SimpleMenuItem
        testid="charts-link"
        title={intl.get('Components.Sidebar.profession')}
        urlPath="/profession"
        Icon={RiProfileFill}
        expand={isExpand}
      />

    </Container>
  );
};

export default Sidebar;
