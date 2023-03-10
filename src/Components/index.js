import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',

  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: '77vw',
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        
        <TextField
          label="Usuario"
          id="margin-none"
          defaultValue=""
          className={classes.textField}
        //   helperText="Some important text"
        />
        
      </div>
      
    </div>
  );
}
