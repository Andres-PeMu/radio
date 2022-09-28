import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { IonButton } from "@ionic/react";
import { NavBar } from "../../components/NavBar";
import { logout } from '../../services/FireBase/Firebase';


export const User = () => {

    const [error, setError] = useState('')
    const history = useHistory()

    const handleSubmit = async () => {
        setError('')

        try {
            await logout()
            history.push('/')
            console.log('logout')
        } catch {
            setError('Hubo un fallo al salir')
        }
    }

    return (
        <div>
            <h1>Users</h1>
            <form className='login_form' onSubmit={handleSubmit}>
                <IonButton expand="block" class='ion-margin-top' type='submit'>Cerrar</IonButton>
            </form>
            <NavBar />
        </div>
    );
};

