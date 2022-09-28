import { IonContent, IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { AuthProvider } from "../../services/AuthProvider/AuthProvider";
// import { useHistory } from 'react-router-dom';
import { useState } from "react";
import { existsUsername, registerNewUser } from "../../services/FireBase/Firebase";
import { Consumer } from "../../hook/useContext";

const UserRegister = () => {

    // let history = useHistory();

    const [state, setState] = useState(1)

    const [formulari, setFormulari] = useState({
        username: '',
        name: '',
        lastName: '',
        gener: '',
        date: '',
        password: '',
        displayName: '',
        processCompleted: true,
        email: '',
    })

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

    const handleEmail = (event: any) => {
        setFormulari({
            ...formulari,
            email: event.target.value
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
                    activate: true,
                };
                tmp.username = formulari.username;
                tmp.processCompleted = true;
                tmp.displayName = formulari.username;
                tmp.email = formulari.email;
                tmp.uid = formulari.email;
                tmp.name = formulari.name;
                tmp.lastName = formulari.lastName;
                tmp.gener = formulari.gener;
                tmp.date = formulari.date;
                tmp.password = formulari.password;
                tmp.activate = true;
                await registerNewUser(tmp)
                setState(0);
            }
        }
    }

    if (state === 5 || state === 1) {
        return (
            <>
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
                            <IonLabel position="floating">correo</IonLabel>
                            <IonInput className='from_input' type="text" required onIonChange={e => handleEmail(e)}></IonInput>
                        </IonItem>
                        <IonItem className='from_item'>
                            <IonLabel position="floating">Contraseña</IonLabel>
                            <IonInput className='from_input' type="password" required onIonChange={e => handlePassWord(e)}></IonInput>
                        </IonItem>
                        <IonButton expand="block" class='ion-margin-top' onClick={() => { handleRegister() }}>Siguiente</IonButton>
                    </form>
                </IonContent>
            </>
        );
    }

    const handleUserLoggedIn = (user: any) => {
        console.log(user)
    }

    const handleUserNotRegistered = (user: any) => {
        console.log(user)
    }

    const handleUsernotLoggedIn = () => {
        console.log('handleUsernotLoggedIn')
    }
 
    const handleUserPassword = () => {
        console.log('handleUserPassword')
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

export default UserRegister;