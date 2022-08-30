import { IonTabButton, IonTabBar } from "@ionic/react"

import { MdHome } from "react-icons/md";
import './style.css'

export const Logo = () => {
    return (
        <IonTabBar slot='bottom' className="tabBar_logo">
            <IonTabButton tab="Home" href="/" >
                <MdHome />
            </IonTabButton>
        </IonTabBar>
    );
};