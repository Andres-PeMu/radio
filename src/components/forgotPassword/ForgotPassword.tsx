import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { resetPassword } from '../../services/FireBase/Firebase';
import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';

const ForgotPassword = () => {

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [userEmail, setUserEmail] = useState({ email: '' });

    const handleEmail = async (email: any) => {
        setUserEmail({
          email: email.target.value,
        })
      }

    const handleSubmit = async (email: any) => {
        email.preventDefault();

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(userEmail.email)
            setMessage('Checa tu bandeja de entrada y sigue las instrucciones')
        } catch {
            setError('Fallo al restaurar tu password')
        }

        setLoading(false)
    }

    return (
        <form className='login_form' onSubmit={handleSubmit}>
            {message && <h1>{message}</h1>}
            <IonItem className='from_item'>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput className='from_input' type="email" onIonChange={email => handleEmail(email)} required ></IonInput>
            </IonItem>
            <IonButton disabled={loading} expand="block" type="submit" class='ion-margin-top'>Recuperar Contrasela</IonButton>
        </form>
    );
};

export default ForgotPassword;