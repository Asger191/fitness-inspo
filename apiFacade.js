import { data } from "react-router"

const BASE_URL = "http://localhost:7007/api/v1/"
const LOGIN_ENDPOINT = "auth/login"
const REGISTER_ENDPOINT = "auth/register"

function handleHttpErrors(res) {
if (!res.ok) {
  return res.json().then( err => Promise.reject({ status: res.status, fullError: err }))
}
return res.json()
} 

/* Insert utility-methods from later steps 
here (REMEMBER to uncomment in the returned 
object when you do)*/

const login = (email, password) => {const options = makeOptions("POST", false, {email: email, password: password });
return fetch(BASE_URL + LOGIN_ENDPOINT, options)
    .then(handleHttpErrors)
    .then(data => {setToken(data.token) 
      return data;
    })  
 }

 function register(email, password){
  const options = makeOptions("POST", true, {email: email, password: password});
  return fetch(BASE_URL + REGISTER_ENDPOINT, options)
  .then(handleHttpErrors)
  .then(data => {setToken(data.token)});
 }


const fetchData = (endpoint) => { 
    const options = makeOptions("GET",true);
    return fetch(BASE_URL + endpoint, options).then(handleHttpErrors)
 }

const makeOptions= (method,addToken,body) =>{
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      'Accept': 'application/json',
    }
  }
  if (addToken && loggedIn()) {
    opts.headers["Authorization"] = `Bearer ${getToken()}`;
  }
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}


const setToken = (token) => {
    localStorage.setItem('jwtToken', token)
  }

const getToken = () => {
  return localStorage.getItem('jwtToken')
}

const loggedIn = () => {
  const loggedIn = getToken() != null;
  return loggedIn;
}

const logout = () => {
  localStorage.removeItem("jwtToken");
}


const getEmailAndRoles = () => {
        const token = getToken()
        if (token != null) {
            const payloadBase64 = getToken().split('.')[1]
            const decodedClaims = JSON.parse(window.atob(payloadBase64))
            const roles = decodedClaims.roles
            const email = decodedClaims.email
            return [email, roles]
        } else return []
    }

    const hasUserAccess = (neededRole, loggedIn) => {
        const roles = getEmailAndRoles().split(',')
        return loggedIn && roles.includes(neededRole)
    }

const facade = {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchData,
    getEmailAndRoles,
    hasUserAccess,
    register
}

export default facade;