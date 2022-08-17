import { useState } from "react";

import { IonTabButton, IonLabel, IonTabBar } from "@ionic/react"
import { Nav } from './styles'

import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";


export const NavBar = () => {

    const [selectedHome, setSelectedHome] = useState(true);
    const [selectedFavorite, setSelectedFavorite] = useState(false);
    const [selectedUser, setSelectedUser] = useState(false);

    const tabSelectedHome = (selectedHome) ? 'tab-selected' : '';
    const tabSelectedFavorite = (selectedFavorite) ? 'tab-selected' : '';
    const tabSelectedUser = (selectedUser) ? 'tab-selected' : '';
    
    const handleTabClickHome = ()=> {
        const home:boolean = true;
        const favorite = false;
        const user = false
        const classFavorite = document.getElementById('tab-button-Faborites')
        const classUser = document.getElementById('tab-button-User')
        if (classFavorite){
            classFavorite.classList.remove('tab-selected')
        }
        if (classUser){
            classUser.classList.remove('tab-selected')
        }

        return (
            setSelectedHome(home),
            setSelectedFavorite(favorite),
            setSelectedUser(user)
        )
        
    }

    const handleTabClickFavorite = ()=> {
        const home = false;
        const favorite = true;
        const user = false
        const classHome = document.getElementById('tab-button-Home')
        const classUser = document.getElementById('tab-button-User')
        if (classHome){
            classHome.classList.remove('tab-selected')
        }
        if (classUser){
            classUser.classList.remove('tab-selected')
        }
        return (
            setSelectedHome(home),
            setSelectedFavorite(favorite),
            setSelectedUser(user)
        )
    }

    const handleTabClickUser = ()=> {
        const home = false;
        const favorite = false;
        const user = true;
        const classHome = document.getElementById('tab-button-Home')
        const classFavorite = document.getElementById('tab-button-Favorite')
        if (classHome){
            classHome.classList.remove('tab-selected')
        }
        if (classFavorite){
            classFavorite.classList.remove('tab-selected')
        }
        return (
            setSelectedHome(home),
            setSelectedFavorite(favorite),
            setSelectedUser(user)
        )
    }

    return (
        <Nav>
            <IonTabBar slot='bottom'>
                <IonTabButton tab="Home" href="/" className={tabSelectedHome} onClick={handleTabClickHome}>
                    <MdHome />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Favorites" href="/favorite" className={tabSelectedFavorite} onClick={handleTabClickFavorite}>
                    <MdFavoriteBorder />
                    <IonLabel>Favorites</IonLabel>
                </IonTabButton>
                <IonTabButton tab="User" href="/user" className={tabSelectedUser} onClick={handleTabClickUser}>
                    <MdPersonOutline />
                    <IonLabel>User</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </Nav>
    );
};

