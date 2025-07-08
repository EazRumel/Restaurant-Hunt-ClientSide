import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { auth } from '../firebase/firebaseInit';

const SocialLogin = () => {
  const provider = new GoogleAuthProvider()
  
    return signInWithPopup(auth,provider)
    .then((result)=>{

    })

  }


export default SocialLogin;