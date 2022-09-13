import { IonContent, IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { AuthProvider } from "../../services/AuthProvider/AuthProvider";
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import { existsUsername, updateUser, userExists } from "../../FireBase/Firebase";
import { Consumer } from "../../hook/useContext";

export const Register = () => {


    let history = useHistory();
    const [state, setState] = useState(0)
    const [userPassword, setUserPassword] = useState({
        displayName: '',
        username: '',
        processCompleted: false,
        uid: '',
        name: '',
        lastName: '',
        gener: '',
        date: '',
        password: '',
        email: ''
    })
    const [currentUser, setCurrentUser] = useState({
        displayName: '',
        username: '',
        processCompleted: false,
        uid: '',
        email: '',
    })
    const [formulari, setFormulari] = useState({
        username: '',
        name: '',
        lastName: '',
        gener: '',
        date: '',
        password: '',
    })
    const [password, setPassword] = useState({
        password: '',
    })

    const handleUserLoggedIn = (user: any) => {
        history.push('/')
    }

    const handleUserNotRegistered = (user: any) => {
        setCurrentUser(user);
        setState(3);
        console.log('estoy entrando a handleUserNotRegistered register', currentUser, state)
    }

    const handleUsernotLoggedIn = () => {
        // history.push('/user')
        console.log('contraseña')
    }

    const handleUserName = (event: any) => {
        setFormulari({
            ...formulari,
            username: event.target.value
        })
    }

    const handleName = (event: any) => {
        setFormulari({
            ...formulari,
            name: event.target.value
        })
    }

    const handleLastNAme = (event: any) => {
        setFormulari({
            ...formulari,
            lastName: event.target.value
        })
    }

    const handleGener = (event: any) => {
        setFormulari({
            ...formulari,
            gener: event.target.value
        })
    }

    const handleDate = (event: any) => {
        setFormulari({
            ...formulari,
            date: event.target.value
        })
    }

    const handlePassWord = (event: any) => {
        setFormulari({
            ...formulari,
            password: event.target.value
        })
    }

    const handleRegister = async () => {
        console.log(formulari)
        if (formulari.username !== '' && formulari.name !== '' && formulari.lastName !== '' && formulari.gener !== '' && formulari.date !== '') {
            const exists = await existsUsername(formulari.username);
            console.log(exists)
            if (exists) {
                setState(5);
            } else {
                const tmp = {
                    displayName: '',
                    username: '',
                    processCompleted: false,
                    uid: '',
                    name: '',
                    lastName: '',
                    gener: '',
                    date: '',
                    password: '',
                    email: '',
                    activate: false,
                };
                tmp.username = formulari.username;
                tmp.processCompleted = true;
                tmp.displayName = currentUser.displayName;
                tmp.email = currentUser.email;
                tmp.uid = currentUser.uid;
                tmp.name = formulari.name;
                tmp.lastName = formulari.lastName;
                tmp.gener = formulari.gener;
                tmp.date = formulari.date;
                tmp.password = formulari.password;
                tmp.activate = true;
                await updateUser(tmp)
                // history.push('/');
            }
        }
    }

    if (state === 3 || state === 5) {
        return (
            <IonContent>
                <form className='login_form'>
                    {state === 5 ? <p>El nombre de usuario ya existe, escoge otro</p> : ''}
                    <IonItem className='from_item'>
                        <IonLabel position="floating">Nombre de usuario</IonLabel>
                        <IonInput className='from_input' type="text" required onIonChange={e => handleUserName(e)}></IonInput>
                    </IonItem>
                    <IonItem className='from_item'>
                        <IonLabel position="floating">Nombres</IonLabel>
                        <IonInput className='from_input' type="text" required onIonChange={e => handleName(e)}></IonInput>
                    </IonItem>
                    <IonItem className='from_item'>
                        <IonLabel position="floating">Apellidos</IonLabel>
                        <IonInput className='from_input' type="text" required onIonChange={e => handleLastNAme(e)}></IonInput>
                    </IonItem>
                    <IonItem className='from_item'>
                        <IonLabel position="floating">Genero</IonLabel>
                        <IonSelect multiple={true} onIonChange={e => handleGener(e)}>
                            <IonSelectOption value="M">Masculino</IonSelectOption>
                            <IonSelectOption value="F">Femenino</IonSelectOption>
                            <IonSelectOption value="O">Otro</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem className='from_item'>
                        <IonInput className='from_input' type="date" required onIonChange={e => handleDate(e)}></IonInput>
                    </IonItem>
                    <IonItem className='from_item'>
                        <IonLabel position="floating">Contraseña</IonLabel>
                        <IonInput className='from_input' type="password" required onIonChange={e => handlePassWord(e)}></IonInput>
                    </IonItem>
                    <IonButton expand="block" class='ion-margin-top' onClick={() => { handleRegister() }}>Siguiente</IonButton>
                </form>
            </IonContent>
        )
    }

    const handleUserPassword = async (user: any) => {
        console.log('este es el user: ', user);
        setUserPassword(user)
        setState(6);
    }

    const handlePasswordSubmit = async () => {
        console.log(userPassword.password);
        console.log(password.password);
        if (userPassword.password === password.password) {
            const tmp = {
                displayName: '',
                username: '',
                processCompleted: false,
                uid: '',
                name: '',
                lastName: '',
                gener: '',
                date: '',
                password: '',
                email: '',
                activate: false,
            };
            tmp.username = userPassword.username;
            tmp.processCompleted = true;
            tmp.displayName = userPassword.displayName;
            tmp.email = userPassword.email;
            tmp.uid = userPassword.uid;
            tmp.name = userPassword.name;
            tmp.lastName = userPassword.lastName;
            tmp.gener = userPassword.gener;
            tmp.date = userPassword.date;
            tmp.password = userPassword.password;
            tmp.activate = true;
            console.log('tmp', tmp)
            await updateUser(tmp)
            history.push('/');
        }
    }

    const handlePasswordInput = (e: any) => {
        setPassword({
           password: e.target.value,
        })
        console.log('value ',e.target.value)
        console.log(password.password)
    }

    if (state === 6) {
        return (
            <IonContent>
                <form>
                    <IonItem className='from_item'>
                        <IonLabel position="floating">Contraseña</IonLabel>
                        <IonInput className='from_input' type="password" required onIonChange={e => handlePasswordInput(e)}></IonInput>
                    </IonItem>
                    <IonButton expand="block" class='ion-margin-top' onClick={() => { handlePasswordSubmit() }}>Siguiente</IonButton>
                </form>
            </IonContent>
        )
    }

    return (
        <IonContent>
            <Consumer>
                {
                    ({ activateAuth }) => {
                        return (
                            <AuthProvider
                                onUserLoggedIn={handleUserLoggedIn}
                                onUsernotLoggedIn={handleUsernotLoggedIn}
                                onUserNotRegistered={handleUserNotRegistered}
                                onActivateAuth={activateAuth}
                                onUserPassword={handleUserPassword}
                            >
                            </AuthProvider>
                        )
                    }
                }
            </Consumer>
        </IonContent>
    );
};

