import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Signup from './signup/signup';
import Container from '@material-ui/core/Container';
import SignUp from './signup/signup';
// import Facebook from '.'

const useStyles = makeStyles((theme) =>({
  root: {
    minWidth: 275,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Container component="main" maxWidth="sm">
    <Card className={classes.root} variant="outlined">
      <Signup/>
    </Card>
    </Container>
  );
}
