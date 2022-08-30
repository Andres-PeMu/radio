import { Consumer } from '../../hook/useContext'
import { UserFrom } from '../../components/UserForm';
import { IonContent, IonPage } from '@ionic/react';
import { Logo } from '../../components/Logo/Logo';
import { LoginWithGoogle } from '../../components/LoginWithGoogle/LoginWithGoogle';

export const NotRegisteredUser = () => {
    return (
        <IonPage>
            <Logo />
            <IonContent>
                <Consumer>
                    {
                        ({ activateAuth }) => {
                            return (
                                <IonContent>
                                    <UserFrom onSubmit={activateAuth} />
                                    <LoginWithGoogle />
                                </IonContent>
                            )
                        }
                    }
                </Consumer>
            </IonContent>
        </IonPage>
    );
};

