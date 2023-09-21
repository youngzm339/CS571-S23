import {createContext, useState} from 'react';

const LoginStateContext = createContext();

export const LoginStateProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <LoginStateContext.Provider value={[isLogin, setIsLogin]}>
            {children}
        </LoginStateContext.Provider>
    );
};

export default LoginStateContext;