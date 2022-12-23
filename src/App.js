import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }
  // initially both login and logout are shown
  //   render() {
  //     return (
  //       <div className="container">
  //         <Welcome greeting="Hello" name="User" />
  //         <button>Login</button>
  //         <button>Logout</button>
  //       </div>
  //     )
  //   }

  //   // 1.conditional rendering using if-else:
  //   renderAuthButton = () => {
  //     const {isLoggedIn} = this.state

  //     if (isLoggedIn === true) {
  //       return <button type="button">Logout</button>
  //     }
  //     return <button type="button">Login</button>
  //   }
  //   //   this function is used in render where button JSX is there initially.
  //   // so only 1 button is shown

  //   render() {
  //     return (
  //       <div className="container">
  //         <Welcome greeting="Hello" name="User" />
  //         {this.renderAuthButton()}
  //       </div>
  //     )
  //   }

  //   2.Using Element variables:
  //   render() {
  //     const {isLoggedIn} = this.state
  //     let authButton
  //     if (isLoggedIn === true) {
  //       authButton = <button type="button">Logout</button>
  //     } else {
  //       authButton = <button type="button">Login</button>
  //     }
  //     return (
  //       <div className="container">
  //         <Welcome greeting="Hello" name="User" />
  //         {authButton}
  //       </div>
  //     )
  //   }

  //   3.Using ternary operator:
  //   render() {
  //     const {isLoggedIn} = this.state
  //     return (
  //       <div className="container">
  //         <Welcome greeting="Hello" name="User" />
  //         {isLoggedIn ? (
  //           <button type="button">Logout</button>
  //         ) : (
  //           <button type="button">Login</button>
  //         )}
  //         {/* if we want to show nothing when isLoggedIn is false, then place "null" after ":" */}
  //       </div>
  //     )
  //   }

  //   4.Using Logical && operator:
  //   A && B => B executed only when A is true
  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        {/* <Welcome greeting="Hello" name="User" /> */}
        {/* call using default props */}
        <Welcome />
        {isLoggedIn && <button type="button">Logout</button>}
        {!isLoggedIn && <button type="button">Login</button>}
      </div>
    )
  }
}

export default App
