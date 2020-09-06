// import React, {Component} from 'react';
// import FacebookLogin from 'react-facebook-login';

// export default class Facebook extends Component {

//     state = {
//         auth: false,
//         name: '',
//         picture: ''
//     };

//     responseFacebook = response => {
//         console.log(response);
//         if(response.status !== 'unknown')
//         this.setState({
//             auth: true,
//             name: response.name,
//             picture: response.picture.data.url
//         });
        
//     }

//     componentClicked = () => {
//         console.log('Facebook btn clicked');
//     }

//     render(){
//         let facebookData;

//         this.state.auth ?
//         facebookData = (
//                 <div style={{
//                     width: '400px',
//                     margin: 'auto',
//                     background: '#f4f4f4',
//                     padding: '20px',
//                     color: '#000'
//                 }}>
//                     <img src={this.state.picture} alt={this.state.name} />
//                     <h2>Welcome {this.state.name}!</h2>
//                 </div>
//             ) : 
//             facebookData = (<FacebookLogin
//                 appId="671108993506455"
//                 autoLoad={true}
//                 fields="name,email,picture"
//                 onClick={this.componentClicked}
//                 callback={this.responseFacebook} />);

//         return (
//             <>
//                 {facebookData}
//             </>
//         );
//     }
// }



import React from 'react';
import FacebookLoginWithButton from 'react-facebook-login';
import Button from '@material-ui/core/Button';
import { FacebookLoginButton } from "react-social-login-buttons";
// import FacebookLoginButton from "react-social-login-buttons/lib/buttons/FacebookLoginButton";

const responseFacebook = (response) => {
  console.log(response);
}

const componentClicked = () => {
  console.log( "Clicked!" )
}

export default function Facebook() {
  return (
    <FacebookLoginButton 
      appId="671108993506455"
      autoLoad
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
      icon="fa-facebook"/>
    )
}
// import React from 'react';
// import ReactDOM from 'react-dom';
// import FacebookLogin from 'react-facebook-login';

// const responseFacebook = (response) => {
//   console.log(response);
// }

// ReactDOM.render(
//   <FacebookLogin
//     appId="671108993506455"
//     autoLoad={true}
//     fields="name,email,picture"
//     callback={responseFacebook}
//     cssClass="my-facebook-button-class"
//     icon="fa-facebook"
//   />,
//   document.getElementById('demo')
// );