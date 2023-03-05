const request = require('request');
const url ='http://api.weatherstack.com/current?access_key=31b024576c07a4d156cb233b25fb4c91&query=40.714,-74.006&units=f'
// request({url :url} ,(err,response)=>{
//     const data = JSON.parse(response.body)
//  console.log(data.current)
// })

// Another Propery inside the Request Object

request({url,json:true},(err,res)=>{
    // When Json is true , we can access res directly
    // console.log(res.body.current)
    console.log('It is Currently ' + res.body.current.temperature + ' degrees out. It Feels like ' +  res.body.current.feelslike + ' degrees out')
})