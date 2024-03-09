import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import { storageService } from "./services/storageService";
import { userService } from "./services/userService";
import "./styles/main.css";
import Header from "./components/Header";
import Title from "./components/Title.jsx";
import Footer from "./components/Footer.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import LoginForm from "./components/LoginForm.jsx";

const App = () => {
  const [loggedInUser, setloggedInUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const loggedInUser = storageService.getLoggedInUser();
    if (loggedInUser) {
      setloggedInUser(loggedInUser);
    }
  }, []);

  const handleAuth = (username, password, isRegister = false, email = "") => {
    if (isRegister) {
      userService.createUser(username, email, password);
      setShowRegister(false);
    } else {
      const user = userService.login(username, password);
      if (!user) {
        alert("Invalid credentials");
        setShowRegister(true);
        return;
      }
      setloggedInUser(user);
    }
  };

  const handleLogout = () => {
    userService.logout();
    setloggedInUser(null);
  };
  return (
    <div>
      {!loggedInUser ? (
        showRegister ? (
          <RegisterForm
            handleAuth={handleAuth}
            setShowRegister={setShowRegister}
          />
        ) : (
          <LoginForm
            handleAuth={handleAuth}
            setShowRegister={setShowRegister}
          />
        )
      ) : (
        <>
          <Header loggedInUser={loggedInUser} handleLogout={handleLogout} /> 
          <Title />
          <Dashboard />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
