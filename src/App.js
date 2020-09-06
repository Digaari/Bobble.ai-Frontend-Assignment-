import React from 'react';
import './App.css';
import OutlinedCard from './components/card'; 
import PrimarySearchAppBar from './components/appBar';
import Grid from '@material-ui/core/Grid';
function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <PrimarySearchAppBar/>
        </Grid>
        <Grid item xs={12}>
        <OutlinedCard/>
        </Grid>
        </Grid>
    </div>
  );
}

export default App;
