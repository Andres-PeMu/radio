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

/* Theme variables */
import './theme/variables.css';


setupIonicReact();

const App: React.FC = () => {

  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <IonApp>
      <GlobalStyle />
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" component={Home} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp >
  );

};

export default App;
