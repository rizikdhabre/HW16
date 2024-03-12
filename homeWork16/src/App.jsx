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
  const [avatar,setAvatar]=useState("")
  const [invalidUser,setinvalidUser]=useState(false)

  useEffect(()=>{
    const loadData=async()=>{
      const res= await userService.fetchAvatar()
      const {data}=res
      const {results}=data
      const img=results[0].picture.large
      setAvatar(img)
 }
    loadData()
  },[])

  useEffect(() => {
    const loggedInUser = storageService.getLoggedInUser();
    if (loggedInUser) {
      setloggedInUser(loggedInUser);
    }
  }, []);

  const handleAuth = (username, password, isRegister = false, email = "") => {
    if (isRegister) {
      userService.createUser(username, email, password,avatar);
      setShowRegister(false);
    } else {
      const user = userService.login(username, password);
      if (!user) {
        setinvalidUser(true) 
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
            invalidUser={invalidUser}
          />
        )
      ) : (
        <>
          <Header loggedInUser={loggedInUser} handleLogout={handleLogout} /> 
          <Title loggedInUser={loggedInUser} />
          <Dashboard />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
