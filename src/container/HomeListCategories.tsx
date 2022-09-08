import { IonContent } from '@ionic/react'
import { PhotoCard } from "../components/PhotoCard";
import { photos } from "../api/categories";

export const HomeListCategories = () => {
    let URLactual = window.location.pathname;
    const split = URLactual.split('/')
    const photo = photos.filter(photo => photo.categoryId === parseInt(split[3]))
    return (
            <IonContent>
                {
                    photo.map(photo => <PhotoCard key={photo.id} {...photo} />)
                }
            </IonContent>
    );
};

