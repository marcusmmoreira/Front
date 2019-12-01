import axios from 'axios';

const api= axios.create({
    baseURL:'http://localhost:3334/'
    //baseURL:'http://www11.directtalk.com.br/adminuiservices/api/treatment/resume?channelId=11&departmentId=e4b53844-5c26-4b89-9aee-5091b127c50c&startdate=2019-10-01%2000%3A00%3A00&endDate=2019-10-05%2023%3A59%3A59&skip=0&count=900&timezone=-3'
    //baseURL:'http://192.168.21.238:8096/'
    //baseURL:'http://nifi.protege.projuris.com.br:9993/nifi-api/system-diagnostics/'
});

export default api;