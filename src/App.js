import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import FacebookLogin from './components/signup/facebook';
import Facebook from './components/signup/facebook';
import OutlinedCard from './components/card'; 
import PrimarySearchAppBar from './components/appBar';
import Grid from '@material-ui/core/Grid';
function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Facebook Signup</h1>
        </header> */}
        {/* <Signup/> */}
        <Grid item xs={12}>
        <PrimarySearchAppBar/>
        </Grid>
        <Grid item xs={12}>
        <OutlinedCard/>
        </Grid>
        {/* <ClassNames/> */}
        {/* <Facebook/> */}
        </Grid>
    </div>
  );
}

export default App;
