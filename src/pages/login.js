import React from 'react';
import loginImg from "../logo.jpg";
import '../components/login/login.scss';

export class Login extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return <div className="mainContainer" ref={this.props.containerRef}>
         <div className="header">Prisijunk!</div>
         <div className="content">
             <div className="logo">
                 <img src={loginImg}/>
             </div>
            <div className="form">
             <div className="formGroup">
             <label htmlFor="username">Vartotojas</label>
             <input type="text" name="username" placeholder="Įveskite vartotoją" />
             </div>
             <div className="formGroup">
             <label htmlFor="password">Slaptažodis</label>
             <input type="password" name="password" placeholder="Įveskite slaptažodį"/>
             </div>
            </div>
           </div>
           <div className="containerFooter">
               <button type="button" className="btn">Prisijungti</button>
           </div>
      </div>
  }
}

export default Login;