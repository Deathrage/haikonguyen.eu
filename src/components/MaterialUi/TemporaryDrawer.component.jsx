import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

const StyledSideList = styled.div`
  width: 250px;
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paperAnchorLeft {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.bodyTextColor};
  }
`;

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const mobileLinks = [
    {
      id: 1,
      href: '#about',
      name: 'About'
    },
    {
      id: 2,
      href: '#blog',
      name: 'Blog'
    },
    {
      id: 3,
      href: '#portfolio',
      name: 'Portfolio'
    },
    {
      id: 4,
      href: '#contact',
      name: 'Contact'
    },
    {
      id: 5,
      href: '#instagram',
      name: 'Instagram'
    }
  ];

  const sideList = side => (
    <StyledSideList
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {mobileLinks.map((link) => (
          <ListItem button component='a' href={link.href} key={link.id}>
            {link.name}
          </ListItem>
        ))}
      </List>
      <Divider /> 
    </StyledSideList>
  );
 
  return (
    <>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={toggleDrawer('left', true)}
      >
        <MenuIcon />
      </IconButton>
      <StyledDrawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </StyledDrawer>
    </>
  );
}