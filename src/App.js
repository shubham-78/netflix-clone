import React, { useEffect } from 'react';
import './css/App.css'
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import {useDispatch, useSelector} from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        //logged in
        console.log(user)
        dispatch(login({
          uid: user.uid,
          email: user.email
        }))
      }else{
        //logged out
        dispatch(logout())
      }
    })
    return unsubscribe;
  }, [dispatch])
  return (
    <div className="app">
      <Router>
        {!user ?  (
          <LoginScreen/>
        ):(
          <Routes>
          <Route path='/profile' element={<ProfileScreen/>}/>
          <Route path='/' element={<HomeScreen/>}/>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
