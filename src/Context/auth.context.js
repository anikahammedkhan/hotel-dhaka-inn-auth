import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const gitHubLogin = () => {
        return signInWithPopup(auth, gitHubProvider);
    }


    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [user]);

    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                console.log(error.message);
            }
            )

    }
    const authInfo = { user, loading, setLoading, registerUser, loginUser, googleLogin, gitHubLogin, signOutUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
