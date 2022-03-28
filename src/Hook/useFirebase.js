import { useState, useEffect } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut, onAuthStateChanged, } from "firebase/auth";
import initializeAuthentication from "./../Firebase/firebase.init"
import cogoToast from "cogo-toast";


//Initialize Auth (config)
initializeAuthentication()

const useFirebase = () => {
    const [loading, setIsLoading] = useState(true);
    const [user, setUser] = useState({})
    const [noti, setNoti] = useState(false);
    const [error, setError] = useState('')
    const googlePRovider = new GoogleAuthProvider()
    const fbProvider = new FacebookAuthProvider()
    const auth = getAuth();


    //Google Popup Signin
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googlePRovider)
            .then(result => {
                cogoToast.success('Login Success');
                console.log(result.user)

                setUser(result.user)
                setNoti(true)
            })
            .catch(error => {
                cogoToast.error(error.message);
                setError(error.message)
            })
    }

    //Facebook Popup Signin
    const signInUsingFacebook = () => {
     
        signInWithPopup(auth, fbProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user)
                cogoToast.success('Login Successfull!');
    



                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;

                // ...
            })
            .catch((error) => {
                cogoToast.error(error.message);
              

                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);

                // ...
            });
    }

    //LOGOUT 
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            //Successfully Sign Out

        }).catch((error) => {
            //An error happended
        })
            .finally(() => setIsLoading(false))

    }
    // পেইজ রিফ্রেশ দিলে লগাউট হবেনা
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    // Return for Use from another place
    return {
        signInUsingGoogle, signInUsingFacebook, user, error, logout, noti
    }
}
export default useFirebase;