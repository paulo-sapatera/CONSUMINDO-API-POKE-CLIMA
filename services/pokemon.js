const axios = require('axios');
const teste = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
  })
 
  const consultaPokemon = async(req, res, numeroPokemon)=>{
    try {
        const {data} = await teste.get(numeroPokemon);
        console.log(data)
        return res.send({palavra: data.abilities[1]})
      } 
        catch (error) {
        
      }
}
consultaPokemon("/245")