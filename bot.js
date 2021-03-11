



const fetch = require("node-fetch");

async function getBuyRates(id, qty) {
  let ratesRequest = await fetch(
    "https://api.kyber.network/buy_rate?id=" + id + "&qty=" + qty
  );
  let rates = await ratesRequest.json();
  return rates;
}






(async() => {
   
   console.log(await getBuyRates("0xdac17f958d2ee523a2206206994597c13d831ec7", "10"));
   console.log('2')
  })()

 
// gets all suppourted tokens on kyberswap network
async function getSupportedTokens() {
  let tokensBasicInfoRequest = await fetch(
    "https://api.kyber.network/currencies"
  );
  let tokensBasicInfo = await tokensBasicInfoRequest.json();
  return tokensBasicInfo;
}
(async() => {
   
  //  console.log(await  getSupportedTokens());
    console.log('2')
   })()
   // get values of all tokens on kyerswap
   async function getAllPrices() {
    let tokensDetailedInfoRequest = await fetch(
      "https://api.kyber.network/market"
    );
    let tokensDetailedInfo = await tokensDetailedInfoRequest.json();
    return tokensDetailedInfo;
  }
  (async() => {
   
    console.log(await getAllPrices());
    console.log('3')
   })()

 
