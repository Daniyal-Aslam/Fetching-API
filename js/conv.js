
// CURRENCY CONVERTER BEGIN
var apikey ='3bf4cac1a760f07d2ca56b14e7b0ae57';
var  select_box = document.getElementById('select_cont'); 
var ratBox = document.getElementById('rateBox');


 fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${apikey}`).then(res=> res.json()).then(curent=> {
    select_box.innerHTML = `<option value="${curent.base}">${curent.base}</option>`; 
   let arykey = curent.rates;
   let mainKey = Object.keys(curent.rates);
   mainKey.map(item=>{
       return ratBox.innerHTML+=`<option value=${item}>${item}</option>`;
   })
   console.log(curent); 
}).catch(error=>{
    console.log(`This was the error behid api not getting ${error}`)
}); 