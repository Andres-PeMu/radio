import { useEffect, } from 'react';
import { useHistory } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { Auth, getUserInfo, registerNewUser, userExists } from '../../FireBase/Firebase';
import { userInfoRegister } from '../../interface/userInfo.model';

export const AuthProvider = ({ children, onUserLoggedIn, onUsernotLoggedIn, onUserNotRegistered, onActivateAuth }
    : { children: any, onUserLoggedIn: any, onUsernotLoggedIn: any, onUserNotRegistered: any, onActivateAuth: any }) => {

    useEffect(() => {
        onAuthStateChanged(Auth, async (user: any) => {
            if (user) {
                const isRegistered = await userExists(user.uid);
                if (isRegistered!) {
                    const userInfo: userInfoRegister | undefined = await getUserInfo(user.uid)
                    console.log('este es user info', userInfo)
                    if (userInfo?.processCompleted) {
                        onActivateAuth();
                        onUserLoggedIn(userInfo);
                        console.log('directo al home')
                    } else {
                        onUserNotRegistered(user)
                        console.log('no hay registro', user)
                    }
                } else {
                    await registerNewUser({
                        uid: user.uid,
                        displayName: user.displayName,
                        profilePicture: '',
                        username: '',
                        processCompleted: false,
                    })
                    onUserNotRegistered(user)
                }
            } else {
                onUsernotLoggedIn();
            }
        });
    }, [onUserLoggedIn, onUserNotRegistered, onUsernotLoggedIn, onActivateAuth])

    return (
        <div>{children}</div>
    );
};

