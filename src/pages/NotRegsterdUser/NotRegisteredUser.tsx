// import { Consumer } from '../../hook/useContext'
import { UserFrom } from '../../components/UserForm/UserFrom';
import { IonContent, IonPage } from '@ionic/react';
import { Logo } from '../../components/Logo/Logo';
import { LoginWithGoogle } from '../../components/LoginWithGoogle/LoginWithGoogle';

export const NotRegisteredUser = () => {
    return (
        <IonPage>
            <Logo />
            <IonContent>
                <UserFrom />
                <LoginWithGoogle />
            </IonContent>
        </IonPage>
    );
};

