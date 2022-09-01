import { IonContent, IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { Link } from 'react-router-dom';
import { AuthProvider } from "../../services/AuthProvider/AuthProvider";
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import { existsUsername, updateUser } from "../../FireBase/Firebase";

export const Register = () => {


    let history = useHistory();
    const [state, setState] = useState(0)
    const [currentUser, setCurrentUser] = useState({
        displayName: '',
        username: '',
        processCompleted: false,
        uid: '',
    })
    const [formulari, setFormulari] = useState({
        username: '',
        name: '',
        lastName: '',
        gener: '',
        date: '',
    })

    // const handleUserLoggedIn = (user: any) => {
    //     history.push('/register')
    // }

    // const handleUserNotRegistered = (user: any) => {
    //     setCurrentUser(user);
    //     setState(3);
    // }

    // const handleUsernotLoggedIn = () => {
    //     history.push('/user')
    // }

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
                };
                tmp.username = formulari.username;
                tmp.processCompleted = true;
                tmp.displayName = currentUser.displayName;
                tmp.uid = currentUser.uid;
                console.log(currentUser)
                console.log(tmp)
                await updateUser(tmp)
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
                    {/* <Link to={'/'}> */}
                        <IonButton expand="block" class='ion-margin-top' onClick={() => handleRegister()}>Siguiente</IonButton>
                    {/* </Link> */}
                </form>
            </IonContent>
        )
    }

    return (
        <IonContent>
            {/* <AuthProvider
                onUserLoggedIn={handleUserLoggedIn}
                onUsernotLoggedIn={handleUsernotLoggedIn}
                onUserNotRegistered={handleUserNotRegistered}
            >
            </AuthProvider> */}
        </IonContent>
    );
};