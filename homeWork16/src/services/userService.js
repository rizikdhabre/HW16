import { utilService } from "./utilService";
import { storageService } from "./storageService";
import axios from "axios"
function createUser(username, email, passowrd, avatar = "") {
  const newUser = {
    id: utilService.generateId(),
    username,
    passowrd,
    email,
    avatar,
    isAdmin: false,
    createdAt: new Date(),
  };
  const totalUsers = storageService.getUsers();
  storageService.saveUsers([...totalUsers, newUser]);
}

function login(username, password) {
  const users = storageService.getUsers();
  const foundedUser = users.find(
    (user) => user.passowrd === password && user.username === username
  );

  if(!foundedUser)return null
  storageService.saveLoggedInUser(foundedUser)
  return foundedUser
}

function logout(){
    storageService.clearAll()
}

async function fetchAvatar(){
    try {
      const URL=`https://randomuser.me/api/`
      const res=await axios.get(URL)
    return res
    } catch (error) {
        console.log(error)
    }
}


export const userService = { createUser, login, logout,fetchAvatar };