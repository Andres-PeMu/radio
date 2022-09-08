import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Auth } from '../../FireBase/Firebase'
import { IonButton, IonContent } from '@ionic/react';
import { AuthProvider } from '../../services/AuthProvider/AuthProvider';
// import { Consumer } from '../../hook/useContext';


export const LoginWithGoogle = () => {
    let history = useHistory();
    const [state, setCurrentState] = useState(0)

    const handleOnClic = async () => {
        const googleProvider = new GoogleAuthProvider();
        const signInWithGoogle = async (googleProvider: any) => {
            try {
                const res = await signInWithPopup(Auth, googleProvider);
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        await signInWithGoogle(googleProvider);
    }

    const handleUserLoggedIn = (user: any) => {
        history.push('/register')
    }

    const handleUserNotRegistered = (user: any) => {
        history.push('/register')
    }

    const handleUsernotLoggedIn = () => {
        setCurrentState(4);
    }

    if (state === 4) {
        return (
            <IonContent>
                <IonButton expand="block" onClick={handleOnClic}>iniciar con Google</IonButton>
            </IonContent>
        );
    }if(state === 5){
        return (
            <IonContent>
                {/* <IonButton expand="block" onClick={handleOnClic}>iniciar con Google</IonButton> */}
            </IonContent>
        );
    } else {
        return (
            <IonContent>
                <AuthProvider
                    onUserLoggedIn={handleUserLoggedIn}
                    onUsernotLoggedIn={handleUsernotLoggedIn}
                    onUserNotRegistered={handleUserNotRegistered}
                    onActivateAuth={handleUserLoggedIn}
                >
                </AuthProvider>
            </IonContent>
        );
    }

};

