import { useState } from "react";

import { IonTabButton, IonLabel, IonTabBar } from "@ionic/react"
import { Nav } from './styles'

import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";


export const NavBar = () => {

    const [selectedHome, setSelectedHome] = useState(true);
    const [selectedFaborite, setSelectedFaborite] = useState(false);
    const [selectedUser, setSelectedUser] = useState(false);

    const tabSelectedHome = (selectedHome) ? 'tab-selected' : '';
    const tabSelectedFaborite = (selectedFaborite) ? 'tab-selected' : '';
    const tabSelectedUser = (selectedUser) ? 'tab-selected' : '';
    
    const handleTabClickHome = ()=> {
        const home:boolean = true;
        const faborite = false;
        const user = false
        const classFaborite = document.getElementById('tab-button-Faborites')
        const classUser = document.getElementById('tab-button-User')
        if (classFaborite){
            classFaborite.classList.remove('tab-selected')
        }
        if (classUser){
            classUser.classList.remove('tab-selected')
        }

        return (
            setSelectedHome(home),
            setSelectedFaborite(faborite),
            setSelectedUser(user)
        )
        
    }

    const handleTabClickFaborite = ()=> {
        const home = false;
        const faborite = true;
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
            setSelectedFaborite(faborite),
            setSelectedUser(user)
        )
    }

    const handleTabClickUser = ()=> {
        const home = false;
        const faborite = false;
        const user = true;
        const classHome = document.getElementById('tab-button-Home')
        const classFaborite = document.getElementById('tab-button-Faborite')
        if (classHome){
            classHome.classList.remove('tab-selected')
        }
        if (classFaborite){
            classFaborite.classList.remove('tab-selected')
        }
        return (
            setSelectedHome(home),
            setSelectedFaborite(faborite),
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
                <IonTabButton tab="Faborites" href="/faborite" className={tabSelectedFaborite} onClick={handleTabClickFaborite}>
                    <MdFavoriteBorder />
                    <IonLabel>Faborites</IonLabel>
                </IonTabButton>
                <IonTabButton tab="User" href="/user" className={tabSelectedUser} onClick={handleTabClickUser}>
                    <MdPersonOutline />
                    <IonLabel>User</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </Nav>
    );
};

