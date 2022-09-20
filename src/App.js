import React from 'react';
import './App.css';
import { auth } from './firebase/init';
import { createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged } from "firebase/auth";

function App() {

  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [loggedin, setLoggedin] = React.useState(false);
  // const [loadingUser, setLoadingUser] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
        setLoggedin(true);
      }
      else{
        setUser({})
        setLoggedin(false);
      }
    })
  }, []);

  function register(){
    console.log('register')
    createUserWithEmailAndPassword(auth, 'john@email.com', 'john123')
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function login(){
    signInWithEmailAndPassword(auth, 'john@email.com', 'john123')
    .then((data) => {
      console.log(data);
      setUser(data.user);
      setLoggedin(true);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function logout() {
    signOut(auth);
    setUser({});
    setLoggedin(false);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="nav">
            <div className="logo">NAVIGATION BAR TEST</div>
            {
              loggedin ?
              (loading ?
                <div className="buttons">
                  <button className="loginSkeleton"></button>
                  <button className="registerSkeleton"></button>
                </div>:
                <div className="buttons">
                  <button className="logout" onClick={logout}>{user.email[0].toUpperCase()}</button>
                </div>
              )
               :
              (loading ?
              <div className="buttons">
                <button className="loginSkeleton"></button>
                <button className="registerSkeleton"></button>
              </div>:
              <div className="buttons">
                <button className="login" onClick={login}>Login</button>
                <button className="register" onClick={register}>Register</button>
              </div>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
