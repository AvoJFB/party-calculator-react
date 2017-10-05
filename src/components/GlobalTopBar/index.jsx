import React from 'react';
import MenuIcon from 'material-ui-icons/Menu';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';


function ButtonAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="contrast" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" >
          Title
        </Typography>
        <Button color="contrast">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default ButtonAppBar;
