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
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar';
import { PhotocarProps } from './container/PhotocarProps'
import { Logo } from './components/Logo/Logo';

/* Theme variables */
import './theme/variables.css';
// import { ListOfCategories } from './components/ListOfCategories';
import { HomeListCategories } from './container/HomeListCategories';


setupIonicReact();

const App: React.FC = () => {

  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <IonApp>
      <GlobalStyle />
      <IonReactRouter>
        <Logo />
        <IonRouterOutlet>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={PhotocarProps} />
          <Route exact path="/photos/:categories/:id" component={HomeListCategories} />
        </IonRouterOutlet>
        <NavBar />
      </IonReactRouter>
    </IonApp >
  );
};

export default App;
