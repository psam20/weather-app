const request = require('request');
const url ='http://api.weatherstack.com/current?access_key=31b024576c07a4d156cb233b25fb4c91&query=40.714,-74.006'
request({url :url} ,(err,response)=>{
    const data = JSON.parse(response.body)
 console.log(data.current)
})