import { utilService } from "./utilService";
import { storageService } from "./storageService";
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


export const userService = { createUser, login, logout };