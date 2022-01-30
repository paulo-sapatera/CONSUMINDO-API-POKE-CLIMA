import 'dotenv/config'
const axios = require('axios');
const teste = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
  })
console.log("começo")

  const consultaClima = async(req, res, cidade)=>{
    console.log("meio")
    try {
        const {data} = await teste.get(`weather?q=${cidade}&appid=${process.env.chave}&lang=pt_br&units=metric`);
        console.log(data)
        return res.send({palavra: data})
      } 
        catch (error) {
        
      }
      console.log("fim")
}
consultaClima("Campinas")

