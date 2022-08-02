//se define la expiracion de 'guardado' de los usuarios/objetos
const EXPIRATION_TIME = 500000;

//se crean los objetos (userAccounts)
const userAccounts = [
    {
        name: "Mauricio Bustos Herrera",
        user: "maubherrera",
        password: "1234",
    },

    {
        name: "Victoria Bustos Herrera",
        user: "victoriabh",
        password: "abcde",
    },

    {
        name: "Carlos Herrera Zuñiga",
        user: "carloshz",
        password: "4321",
    },
];

//singleton que usa el localstorage para traerse datos del usuario
function getUsers() {
    let users = localStorage.getItem('userAccounts');
    if (users == undefined || users == null) {
        localStorage.setItem('userAccounts', JSON.stringify(userAccounts));
        users = localStorage.getItem('userAccounts');
    }
    return JSON.parse(users);
}

//validación regresa error o regresa correcto (true o false)
function validUser(user, password) {
    let userObject;
    let users = getUsers();
    users.forEach(element => {
        if (element.user == user && element.password == password) {
            userObject = element;
            return;
        }
    });
    return userObject;
}

//vamos a recibir un objeto de usuario y lo vamos a guardar en localStorage
function createSession(user) {
    user.expiration = Date.now();
    localStorage.setItem('user', JSON.stringify(user));
}

//limpia una sesion en el localstorage
function closeSession() {
    localStorage.removeItem('user');
}

//obtiene una session en el localstorage
function getSession() {
    return JSON.parse(localStorage.getItem('user'));
}

//Revisar si una sesion aun sigue activa
function checkExpiration() {
    let user = getSession();
    //Comparacion para validar una sesion en milisegundos 
    if ((user.expiration + EXPIRATION_TIME) <= Date.now()) {//Date.now() nos regresa el tiempo actual en milisegundos
        return false;
    } else {
        return true;
    }
}
