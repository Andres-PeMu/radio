import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './hook/useContext';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
// import { IonReactRouter } from '@ionic/react-router';
// import { IonRouterOutlet } from '@ionic/react';

ReactDOM.render(
  <Provider>
    <React.StrictMode>
      {/* <IonReactRouter>
        <IonRouterOutlet> */}
         <App />
        {/* </IonRouterOutlet>
      </IonReactRouter> */}
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
reportWebVitals();
