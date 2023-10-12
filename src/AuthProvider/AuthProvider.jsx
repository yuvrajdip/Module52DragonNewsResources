import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config'

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  //* Register
  const createUser = (email , password)=> {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //* LogIn
  const logIn = (email, password)=> {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //* logOut
  const logOut = ()=> {
    return signOut( auth );
  }

  //* onAuthStateChanged
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
      if( currentUser ){
        setUser( currentUser);
      }
    });

    return ()=>{
      unSubscribe();
    } 
  },[]);

  //* passing Important params with ContextAPI
  const authInfo = {
    user ,
    createUser, //* use in Register for Registration
    logIn, //* use in Login Component
    logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;