const validation = (userData) => {
    const errors = {};
    const regExp = /\S+@\S+\.\S+/;
    const regExpPassword = /.\d+\./;

    if (!regExp.test(userData.email)) {
        errors.email = 'Debes ingresar un email válido!';
    }
    if (!userData.email) {
        errors.email = 'Completar Campo';
    }
    if (userData.email.length > 35) {
        errors.email = 'Debes ingresar un email válido!';
    }

    if (!regExpPassword.test(userData.password)) {
        errors.password = 'Debe tener al menos 1 número!';
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'Debe tener entre 6 y 10 caracteres!';
    }

    if (userData.repeatPassword !== userData.password) {
        errors.repeatPassword = 'Las contraseñas no coinciden';
    }

    return errors
}

export default validation