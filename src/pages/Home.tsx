import { IonContent } from '@ionic/react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';


export const Home = () => {
    return (
        <IonContent>
            <ListOfCategories />
            <ListOfPhotoCards />
        </IonContent>
    );
};

