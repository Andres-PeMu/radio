import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signup } from '../../services/FireBase/Firebase'

import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';

export const LoginSignup = () => {

  
  const [userPassword, setUserPassword] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleEmail = async (email:any) => {
    setUserPassword({
      ...userPassword,
      email: email.target.value,
    })
  }

  const handlePassWord = async (password:any) => {
    setUserPassword({
      ...userPassword,
      password: password.target.value,
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setError('')
      setLoading(true)
      await signup( userPassword.email, userPassword.password)
      history.push('/register')
    } catch (e) {
      setError('Fallo al crear la cuenta')
      console.log(e)
    }
    setLoading(false)
  }

  return (
    <form className='login_form' onSubmit={handleSubmit}>
      <h1>Registrate</h1>
      {error && <h1>{error}</h1>}
      <IonItem className='from_item'>
        <IonLabel position="floating">Email</IonLabel>
        <IonInput className='from_input' type="email" onIonChange={email => handleEmail(email)} required ></IonInput>
      </IonItem>
      <IonItem className='from_item'>
        <IonLabel position="floating">Contraseña</IonLabel>
        <IonInput type="password" onIonChange={password => handlePassWord(password)} required></IonInput>
      </IonItem>
      <IonButton disabled={loading} expand="block" type="submit" class='ion-margin-top'>Registrate</IonButton>
    </form>
  );
};

