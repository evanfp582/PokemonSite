import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: "15px",
    // textAlign: 'center',
    color: theme.palette.text.secondary,

  },
}));

export default function PokemonProfileBox(props) {
  const classes = useStyles();

  function FormRow() {
    
    let string1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    let string2=props.id
    let string3=".png"
    let finalString = string1.concat(string2,string3)

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
      }
      

    
    return (
      <React.Fragment>
        <Grid item xs={4} className="pokemon-images-box">
            
          <Paper className="pokemon-images"><html><img src={finalString}></img></html> </Paper>
        </Grid>
        
        <Grid item xs={8} className="hp-and-health">
          <div className="name"><Paper className={classes.paper}>{capitalize(props.name)}</Paper></div>
          <div className="health"><Paper className={classes.paper}>Base Health: {props.baseHP}</Paper> </div>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
          
        </Grid>
        
        
      </Grid>
    </div>
  );
}
