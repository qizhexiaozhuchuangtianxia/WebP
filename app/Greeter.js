//Greeter,js
import React, {Component} from 'react'
import config from './config.json';
import styles from './main.css'
class Greeter extends Component{
  render() {
    return (
      <div><img src="http://pic.sucaibar.com/pic/201305/20/5f259ab481.jpg" />---{config.greetText}</div> 
    )
  }
}

export default Greeter