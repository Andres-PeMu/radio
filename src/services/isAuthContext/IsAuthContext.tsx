import { Route } from 'react-router-dom';

import {
  IonContent
} from '@ionic/react';

import { Favorites } from '../../pages/Favorites/Favorites';
import { User } from '../../pages/User/User';
import { NotRegisteredUser } from '../../pages/NotRegsterdUser/NotRegisteredUser';
import { Consumer } from '../../hook/useContext';
import { Register } from '../../components/Register/Register';

import { Home } from '../../pages/Home/Home';
import { PhotocarProps } from '../../container/PhotocarProps';
import { HomeListCategories } from '../../container/HomeListCategories';

const IsAuthContext = () => {
  return (
    <Consumer>
      {
        ({ isAuth }) =>
          isAuth
            ?
            <IonContent>
              <Route exact path="/" component={Home} />
              <Route exact path="/detail/:id" component={PhotocarProps} />
              <Route exact path="/photos/:categories/:id" component={HomeListCategories} />
              <Route exact path="/favorite" component={Favorites} />
              <Route exact path="/user" component={User} />
            </IonContent>
            :
            <IonContent>
              <Route exact path="/favorite" component={NotRegisteredUser} />
              <Route exact path="/user" component={NotRegisteredUser} />
              <Route exact path="/login" component={NotRegisteredUser} />
              <Route exact path="/" component={NotRegisteredUser} />
              <Route exact path="*" component={NotRegisteredUser} />
              <Route exact path="/register" component={Register} />
            </IonContent>
      }
    </Consumer>
  );
};

export default IsAuthContext;

