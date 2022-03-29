import initializeFirebase from './../Components/Login/Firebase/firebase.init.js'
import { getAuth, createUserWithEmailAndPassword , signInWithPopup,signOut , GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


initializeFirebase();
const useFirebase = ()=> {
    const [user,setUser] = useState({});
    // const[email, setEmail] = useState('');
    // const [password,setPassword]= useState('');
    const auth = getAuth();
    
    const googleProvider = new GoogleAuthProvider();
    useEffect(()=>{
        onAuthStateChanged(auth, (users) => {
            console.log(users);
            if (users) {
              setUser(users);
              // ...
            } else {
              setUser({});
            }
          });
    },[]);
    const signUpWithGoogle = (e)=>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
         setUser(result.user);
        })
        e.preventDefault();
        
    }
    const logOut = ()=>{
        signOut(auth).then(() => {
            setUser({});
          }) 
    }
   return{
       signUpWithGoogle,
       logOut,
       user
   };

}

export default useFirebase;