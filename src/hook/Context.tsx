import { createContext, useState } from 'react';

interface IsAuth {
  isAuth: boolean,
  activateAuth?: () => void,
}

const defaultState = {
  isAuth: false,
};

const defaultUseState = {
  isAuth: false,
};

const Context = createContext<IsAuth>(defaultState);

export const Provider = ({ children }:{children:any}) => {
  const [isAuth, setIsAuth] = useState(defaultUseState.isAuth);
 
  const activateAuth = () => {
      setIsAuth(!isAuth)
    }

  return (
    <Context.Provider value={{ 
        isAuth,
        activateAuth
     }} >
      {children}
    </Context.Provider>
  )
}

export const Consumer = Context.Consumer;