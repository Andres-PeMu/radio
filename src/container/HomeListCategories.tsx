import { IonContent } from '@ionic/react'
import { PhotoCard } from "../components/PhotoCard";
import { ListOfCategories } from '../components/ListOfCategories';
import { photos } from "../api/categories";
import { Logo } from '../components/Logo/Logo';

export const HomeListCategories = () => {
    let URLactual = window.location.pathname;
    const split = URLactual.split('/')
    console.log(split[3])
    const photo = photos.filter(photo => photo.categoryId === parseInt(split[3]))
    console.log(photo)
    return (
        <div>
            <IonContent>
                <Logo />
                <ListOfCategories />
                {
                    photo.map(photo => <PhotoCard key={photo.id} {...photo} />)
                }
            </IonContent>
        </div>
    );
};

