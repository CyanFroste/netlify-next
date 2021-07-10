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
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    // attach listeners before init
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
    });

    netlifyIdentity.on("logout", () => {
      setUser(null);
    });

    netlifyIdentity.on("init", (user) => {
      setUser(user);
      setAuthReady(true);
    });

    // connect to netlify
    netlifyIdentity.init();

    return () => {
      netlifyIdentity.off("init");
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
    };
  }, []);

  function login() {
    netlifyIdentity.open();
  }

  function logout() {
    netlifyIdentity.logout();
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        authReady,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
