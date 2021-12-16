const login = {
    password: '',
    nickname: '',
}
export default function Login(login, action) {
    switch (action.type) {
        case 'Login_loading':
            return {
                password: '',
                nickname: '',
            }
        case 'Login_loadover':
            return {
                password: action.password,
                nickname: action.nickname,
            }
        default:
            return {
                password: '',
                nickname: '',
            }
    }
}
