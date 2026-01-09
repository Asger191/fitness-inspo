//Dev URL:
//const BASE_URL = "http://localhost:7007/api/v1/"

//DEPLOYED URL:
const BASE_URL = "/api/v1/"

const LOGIN_ENDPOINT = "auth/login"
const REGISTER_ENDPOINT = "auth/register"
const CREATE_ENDPOINT = "exercise"
const UPDATE_ENDPOINT = "exercise"
const DELETE_ENDPOINT = "exercise"
const USER_DELETE_ENDPOINT = 'auth/users';



function handleHttpErrors(res) {
if (!res.ok) {
  return res.json().then( err => Promise.reject({ status: res.status, fullError: err }))
}

if(res.status === 204){
  return null;
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

 function createExercise(exercise){
  const options = makeOptions("POST", true, exercise)

  return fetch(BASE_URL + CREATE_ENDPOINT, options)
  .then(handleHttpErrors)
 }

 function updateExercise(exercise){
  const options = makeOptions("PUT", true, exercise)

  return fetch(BASE_URL + UPDATE_ENDPOINT + "/" + exercise.id, options)
  .then(handleHttpErrors)
 }

 function deleteExercise(id){
  const options = makeOptions("DELETE", true)

  return fetch(BASE_URL + DELETE_ENDPOINT + "/" + id, options)
  .then(handleHttpErrors)
 }

 //Delete User by id
  function deleteUser(id){
  const options = facade.makeOptions("DELETE", true)

return fetch(BASE_URL + USER_DELETE_ENDPOINT + "/" + id, options)
  .then(handleHttpErrors)
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

    const hasUserAccess = (neededRole) => {
        const [, roles] = getEmailAndRoles()

        if(Array.isArray(neededRole)){
          return neededRole.some(role => roles.includes(role))
        }
        return  roles.includes(neededRole)
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
    register,
    createExercise,
    updateExercise,
    deleteExercise,
    deleteUser
}

export default facade;