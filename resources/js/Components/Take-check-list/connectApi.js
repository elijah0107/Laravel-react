import axios from 'axios';

export const connect = user => {
    return axios
        .post('api/notice', {
            email: user.email,
            name: user.name,
        }, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data.token);
        })
        .catch(err => {
            console.log(err)
        });
};

export const sendEmail = user => {
    return axios
        .post('api/send', { email: user.email }, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data.token);
        })
        .catch(err => {
            console.log(err)
        })
};
