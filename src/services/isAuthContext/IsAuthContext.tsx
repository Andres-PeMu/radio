import { Route } from 'react-router-dom';

import {
  IonContent
} from '@ionic/react';

import { Favorites } from '../../pages/Favorites/Favorites';
import { User } from '../../pages/User/User';
import { NotRegisteredUser } from '../../pages/NotRegsterdUser/NotRegisteredUser';
import { Consumer } from '../../hook/useContext';

const IsAuthContext = () => {
  return (
    <Consumer>
      {
        ({ isAuth }) =>
          isAuth
            ?
            <IonContent>
              <Route exact path="/favorite" component={Favorites} />
              <Route exact path="/user" component={User} />
            </IonContent>
            :
            <IonContent>
              <Route exact path="/favorite" component={NotRegisteredUser} />
              <Route exact path="/user" component={NotRegisteredUser} />
            </IonContent>
      }
    </Consumer>
  );
};

export default IsAuthContext;

