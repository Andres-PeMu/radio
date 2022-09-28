import { IonContent, IonPage } from '@ionic/react';
import { ListOfCategories } from '../../components/ListOfCategories/ListOfCategories';
import { ListOfPhotoCards } from '../../components/ListOfPhotoCards';
import { NavBar } from '../../components/NavBar';
import { Auth } from '../../services/FireBase/Firebase';


export const Home = () => {

    const user = Auth.currentUser;
    console.log(user)

    return (
        <IonPage>
            <IonContent>
                <ListOfCategories />
                <ListOfPhotoCards />
                <NavBar />
            </IonContent>
        </IonPage>
    );
};

