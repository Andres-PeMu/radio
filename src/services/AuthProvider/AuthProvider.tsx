import { useEffect, } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { Auth, getUserInfo, registerNewUser, userExists } from '../../FireBase/Firebase';
import { userInfoRegister } from '../../interface/userInfo.model';

export const AuthProvider = ({ children, onUserPassword, onUserLoggedIn, onUsernotLoggedIn, onUserNotRegistered, onActivateAuth }
    : { children: any, onUserPassword: any, onUserLoggedIn: any, onUsernotLoggedIn: any, onUserNotRegistered: any, onActivateAuth: any }) => {

    useEffect(() => {
        onAuthStateChanged(Auth, async (user: any) => {
            if (user) {
                const isRegistered = await userExists(user.email);
                if (isRegistered!) {
                    const userInfo: userInfoRegister | undefined = await getUserInfo(user.uid)
                    console.log('este es user info', userInfo)
                    if (userInfo?.processCompleted) {
                        if (userInfo?.activate) {
                            onActivateAuth();
                            onUserLoggedIn(userInfo);
                            console.log('directo al home')
                        } else {
                            console.log('userPass')
                            onUserPassword(userInfo)
                        }
                    } else {
                        onUserNotRegistered(user)
                        console.log('no hay registro', userInfo)
                    }
                } else {
                    await registerNewUser({
                        uid: user.uid,
                        displayName: user.displayName,
                        mail: user.email,
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
    }, [onUserPassword, onUserLoggedIn, onUserNotRegistered, onUsernotLoggedIn, onActivateAuth])

    return (
        <div>{children}</div>
    );
};

