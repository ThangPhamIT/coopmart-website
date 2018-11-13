import axios from 'axios';

export default {
    user: {
        login: credentials =>
            axios.post("https://coopmart-api.herokuapp.com/api/authenticate", { credentials }).then(res => res.data.user),
        signup: user => 
            axios.post("https://coopmart-api.herokuapp.com/api/users", { user }).then(res => res.data.user),
        sendResult: test => 
            axios.post("https://coopmart-api.herokuapp.com/api/users/submitTest", { test }).then(res => res.data.user)
    }
};