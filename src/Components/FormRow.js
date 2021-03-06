import PokemonSlot from "./PokemonSlot";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();
// const array=[1,2,3,4]

  function FormRow() {
    return (
      <>
      {/* {array.map((item) => {
        return(<div>
          <h1>{item}</h1>
        </div>)
      } )} */}
        <Grid item xs={6}>
          <Paper className={classes.paper}><PokemonSlot /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><PokemonSlot /></Paper>
        </Grid>
      </>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
