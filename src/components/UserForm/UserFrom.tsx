import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { login } from '../../services/FireBase/Firebase';

import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';

import './styles.css'

export const UserFrom = () => {

  const [userPassword, setUserPassword] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleEmail = async (email: any) => {
    setUserPassword({
      ...userPassword,
      email: email.target.value,
    })
  }

  const handlePassWord = async (password: any) => {
    setUserPassword({
      ...userPassword,
      password: password.target.value,
    })
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setError('')
      setLoading(true)
      await login(userPassword.email, userPassword.password)
      console.log(userPassword.email, userPassword.password)
      history.push('/')
    } catch {
      setError('Fallo al crear la cuenta')
    }

    setLoading(false)
  }

  return (
    <form className='login_form' onSubmit={handleSubmit}>
      {error && <h1>{error}</h1>}
      <IonItem className='from_item'>
        <IonLabel position="floating">Usuario</IonLabel>
        <IonInput className='from_input' type="email" onIonChange={email => handleEmail(email)} required ></IonInput>
      </IonItem>
      <IonItem className='from_item'>
        <IonLabel position="floating">Contraseña</IonLabel>
        <IonInput type="password" onIonChange={password => handlePassWord(password)} required></IonInput>
      </IonItem>
      <Link to={'/recuperarContraseña'} className='from_link_recover'>Olvide mi contraseña</Link>
      <IonButton disabled={loading} expand="block" type="submit" class='ion-margin-top'>iniciar secion</IonButton>
      <p className='from_p_register'>
        ¿no tienes cuenta?
        <Link to={'/userRegister'} className='from_Link_register'> Registrate</Link>
      </p>
    </form>
  );
};