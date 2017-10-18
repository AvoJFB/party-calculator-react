import React, { Component } from 'react';
import MenuIcon from 'material-ui-icons/Menu';
import withStyles from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Auth from './Auth';
import AuthContainer from '../../containers/AuthContainer';

const styles = () => ({
  root: {
    width: '100%',
    color: 'white',
    backgroundColor: 'black',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class GlobalTopBar extends Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
    this.state = {};
  }

  render() {
    const WrappedAuth = AuthContainer(Auth);
    return (
      <div className={this.classes.root}>
        <AppBar position="static" color="default">
          <Toolbar className={this.classes.flex}>
            <IconButton className={this.classes.menuButton} aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit">
              Party calculator
            </Typography>
            <div className={this.classes.flex} />
            <WrappedAuth />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(GlobalTopBar);
