import React from 'react';
import loginImg from "../logo.jpg";
import '../components/login/login.scss';

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="mainContainer" ref={this.props.containerRef}>
           <div className="header">Register</div>
           <div className="content">
               <div className="logo">
                   <img src={loginImg}/>
               </div>
              <div className="form">
               <div className="formGroup">
               <label htmlFor="username">Username</label>
               <input type="text" name="username" placeholder="username" />
               </div>
               <div className="formGroup">
               <label htmlFor="email">Email</label>
               <input type="email" name="email" placeholder="email"/>
               </div>
               <div className="formGroup">
               <label htmlFor="password">Password</label>
               <input type="password" name="password" placeholder="password"/>
               </div>
              </div>
             </div>
             <div className="containerFooter">
                 <button type="button" className="btn">Register</button>
             </div>
        </div>
    }
}