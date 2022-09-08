import { IonContent, IonPage } from '@ionic/react';
import { ListOfCategories } from '../../components/ListOfCategories/ListOfCategories';
import { ListOfPhotoCards } from '../../components/ListOfPhotoCards';
import { NavBar } from '../../components/NavBar';


export const Home = () => {
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

