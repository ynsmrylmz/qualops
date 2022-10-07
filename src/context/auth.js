import {
  createContext,
  useContext,
  useState,
  useReducer,
} from 'react';

const AuthContext = createContext([{}, () => {}]);

const initialState = {
  mail: '',
  token: '',
};

const AuthReducer = function (state, action) {
  switch (action.type) {
    case authActions.SET_AUTH: {
      return {
        ...state,
        mail: action.payload.mail,
        token: action.payload.token,
      };
    }
    default:
      return state;
  }
};

const authActions = {
  SET_AUTH: 'SET_AUTH',
};

const AuthProvider = function (params) {
  const [state, dispatch] = useReducer(AuthReducer, {
    ...initialState,
  });
  return (
    <AuthContext.Provider {...params} value={{ state, dispatch }} />
  );
};

const AuthConsumer = function (params) {
  return <AuthContext.Consumer {...params} />;
};

const useAuth = function () {
  const context = useContext(AuthContext);

  const { state, dispatch } = context;

  function auth({ mail, token }) {
    dispatch({
      type: authActions.SET_AUTH,
      payload: {
        mail,
        token,
      },
    });
    // dispatch({...state, mail: mail, token: token})
  }

  return {
    mail: state.mail,
    auth: auth,
    loggedIn: true, //!!state.token,
  };
};

export { AuthProvider, AuthConsumer, useAuth };
