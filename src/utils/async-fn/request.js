import axios from 'axios';

window.request = function(url, options){

    let { method, headers, data } = options;

    return axios({
        method,
        url,
        data,
        headers : {
            "content-type": "application/json",
            ...headers,
            'access-token' : 'access-token',
        },
    }).then(res => res)
      .catch(err => {
        console.log(err);
      });;
};
