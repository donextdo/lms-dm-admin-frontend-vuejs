import axios from "axios";

const setAuthHeader = (token) => {
    if (sessionStorage.getItem('token')) {
        axios.defaults.headers.common = {
            Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        };
    } else {
        delete axios.defaults.headers.Authorization;
    }
};

export default setAuthHeader;