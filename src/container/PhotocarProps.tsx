import { IonContent } from '@ionic/react'
import { PhotoCard } from "../components/PhotoCard";
import { photos } from "../api/categories";

export const PhotocarProps = () => {
    let URLactual = window.location.pathname;
    const split = URLactual.split('/')
    const photo = photos.filter(photo => photo.id === parseInt(split[2]))
    return (
        <IonContent>
                {
                    photo.map(photo => <PhotoCard key={photo.id} {...photo} />)
                }
        </IonContent>
    )
}