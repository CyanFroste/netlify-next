import { createContext, useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext({
  user: null,
  authReady: false,
  login() {},
  logout() {},
});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // connect to netlify
  useEffect(() => {
    netlifyIdentity.init();
  }, []);

  function login() {
    netlifyIdentity.open();
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
