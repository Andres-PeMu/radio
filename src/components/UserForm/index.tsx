import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import { Link } from 'react-router-dom';
import { useInputValue } from '../../hook/useInputValue';

import './styles.css'



const defaultUseStateEmail = {
    email: '',
}

const defaultUseStatePassword = {
    password: '',
};



export const UserFrom = ({ onSubmit }: { onSubmit: any }) => {

    const email = useInputValue(defaultUseStateEmail.email)
    const password = useInputValue(defaultUseStatePassword.password)

    return (
        <form className='login_form' onSubmit={onSubmit}>
            <IonItem className='from_item'>
                <IonLabel position="floating">Usuario</IonLabel>
                <IonInput className='from_input' type="email" {...email} required ></IonInput>
            </IonItem>
            <IonItem className='from_item'>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput type="password" {...password} required></IonInput>
            </IonItem>
            <Link to={'/'} className='from_link_recover'>Olvide mi contraseña</Link>
            <IonButton expand="block" type="submit" class='ion-margin-top'>iniciar secion</IonButton>
            <p className='from_p_register'>¿no tienes cuenta? <Link to={'/'} className='from_Link_register'>Registrate</Link></p>
        </form>
    );
};