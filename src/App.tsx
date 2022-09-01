import { Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';

// import glovalStyles
import { GlobalStyle } from './theme/GlobalStyles'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

// components
import { Home } from './pages/Home/Home'
// import { NavBar } from './components/NavBar';
// import { Logo } from './components/Logo/Logo';

import { PhotocarProps } from './container/PhotocarProps'
import { HomeListCategories } from './container/HomeListCategories';

/* Theme variables */
import './theme/variables.css';

// import IsAuthContext from './services/isAuthContext/IsAuthContext';
import { Register } from './components/Register/Register';
import { Favorites } from './pages/Favorites/Favorites';
import { User } from './pages/User/User';
import { NotRegisteredUser } from './pages/NotRegsterdUser/NotRegisteredUser';



setupIonicReact();

const App: React.FC = () => {

  return (
    <IonApp>
      <GlobalStyle />
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={PhotocarProps} />
          <Route exact path="/photos/:categories/:id" component={HomeListCategories} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/favorite" component={Favorites} />
          <Route exact path="/user" component={User} />
          <Route exact path="/login" component={NotRegisteredUser} />
          {/* <IsAuthContext /> */}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp >
  );
};

export default App;
