import { useEffect, useState } from 'react';

import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { Auth, userExists } from '../../FireBase/Firebase'
import { IonButton, IonContent } from '@ionic/react';

export const LoginWithGoogle = () => {

    const [currentUser, setCurrentUser] = useState(null)
    const [state, setCurrentState] = useState(0)

    useEffect(() => {
        setCurrentState(1);
        onAuthStateChanged(Auth, handleUserStateChanged);
    }, [])

    const handleUserStateChanged = async (user: any) => {
        if (user) {
            const isRegistered = await userExists(user.uid);
            if (await isRegistered) {
                setCurrentState(2);
            }else {
                setCurrentState(3);
            }
        } else {
            setCurrentState(4);
        }
    }

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

    if (state === 1) {
        return (
            <IonContent>
                <p>Cargando...</p>
            </IonContent>
        );
    } if (state === 2) {
        return (
            <IonContent>
                <p>Ok</p>
            </IonContent>
        );
    } if (state === 3) {
        return (
            <IonContent>
                <p>Estas autenticado pero no registrado</p>
            </IonContent>
        );
    } else {
        return (
            <IonContent>
                <IonButton expand="block" onClick={handleOnClic}>iniciar con Google</IonButton>
            </IonContent>
        );
    }

};

