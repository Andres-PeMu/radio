import { useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { Auth, getUserInfo, registerNewUser, userExists } from '../../FireBase/Firebase';
import { userInfoRegister } from '../../interface/userInfo.model';

export const AuthProvider = ({children, onUserLoggedIn, onUsernotLoggedIn, onUserNotRegistered}:{children:any, onUserLoggedIn:any, onUsernotLoggedIn:any, onUserNotRegistered:any}) => {

    useEffect(() => {
        onAuthStateChanged(Auth, async (user: any) => {
            if (user) {
                const isRegistered = await userExists(user.uid);
                if (isRegistered!) {
                    const userInfo : userInfoRegister | undefined = await getUserInfo(user.uid)
                    console.log(userInfo)
                    if(userInfo?.processCompleted){
                        onUserLoggedIn(userInfo);
                        console.log('este es el usuario: ',userInfo)
                    }else{
                        onUserNotRegistered(userInfo)
                        console.log('no hay registro')
                    }
                }else {
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
    }, [onUserLoggedIn, onUserNotRegistered, onUsernotLoggedIn])

    return (
        <div>{children}</div>
    );
};

