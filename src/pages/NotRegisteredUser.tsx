import { IonButton } from '@ionic/react';
import  { Consumer } from '../hook/Context'

export const NotRegisteredUser = () => {
    return (
        <Consumer>
            {
                ({ activateAuth }) =>{
                    return(
                        <form onSubmit={activateAuth}>
                            <IonButton type="submit" >iniciar secion</IonButton>
                        </form>
                    )
                }
            }
        </Consumer>
    );
};

