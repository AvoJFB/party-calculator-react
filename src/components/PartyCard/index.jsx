import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { Button, Typography } from 'material-ui';

const cardWidth = 230;
const styles = {
  card: {
    width: cardWidth,
    height: 350,
    margin: 10,
    position: 'relative',
  },
  media: {
    height: 150,
  },
  actions: {
    display: 'flex',
    'flex-direction': 'row',
    height: 'auto',
    position: 'absolute',
    width: cardWidth - 10,
    'justify-content': 'center',
    bottom: 5,
  },
  btn: {
    minWidth: '55px',
  },
};

class PartyCard extends Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
    this.state = {};
  }

  render() {
    const { party, classes } = this.props;
    return (
      <div>
        <Card className={classes.card} raised color="primary">
          <CardMedia className={classes.media} image={party.avatarUrl} title={party.name} />
          <CardContent>
            <Typography type="headline" component="h2">
              {party.name}
            </Typography>
            <Typography component="p">
              {party.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button dense raised color="default" className={classes.btn} tabIndex={-2}>
              Edit
            </Button>
            <Button dense raised color="default" className={classes.btn} tabIndex={-1}>
              Join
            </Button>
            <Button dense raised color="default" className={classes.btn} tabIndex={0}>
              Remove
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(PartyCard);
