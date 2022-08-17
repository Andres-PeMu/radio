import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';
import { Logo } from '../components/Logo/Logo';

export const Home = () => {
    return (
        <div>
            <Logo />
            <ListOfCategories />
            <ListOfPhotoCards />
        </div>
    );
};

