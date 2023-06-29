import axios from 'axios';

export const baseUrl1 = 'api base url will be here'

axios.interceptors.request.use(function (config) {
    config = {...config, params: {
        ...config.params,
       
    }};
    config.headers['token'] = `key`;
    return config;
}, function (error) {
    return Promise.reject(error);
});

export const getData = (params) => {
    return axios.get(baseUrl1 + `/data`);
}
