import Navbar from "../components/Navbar";
import { AuthContextProvider } from "../stores/AuthContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
      {/* Each `page` gets rendered in this `Component`, anything outside will be available to all pages */}
    </AuthContextProvider>
  );
}
