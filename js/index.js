//  AND ANIMAL SECTION 
// VARIABLE INITIALIZETATION  
let cat =   document.getElementById('cat');
let dog =   document.getElementById('dog');
let cat_btn =   document.getElementById('cat_btn');
let dog_btn =   document.getElementById('dog_btn');
cat_btn.addEventListener('click', getCat)
dog_btn.addEventListener('click', getDog)  
 
 
// https://api.thecatapi.com/v1/images/search         =>  API FOR CAT DATA
async function getCat(){
   await fetch('https://api.thecatapi.com/v1/images/search').then(res=> res.json())
    .then(catImage=>{
        cat.innerHTML = `<img src="${catImage[0].url}"/>` 
    })
} 
// https://api.thedogapi.com/v1/images/search         =>  API FOR Dog DATA
async function getDog(){
    await fetch('https://api.thedogapi.com/v1/images/search').then(res=>{ 
        return res.json()
    }).then(dogImage =>{
        dog.innerHTML =`<img src="${dogImage[0].url}"/>`
    })
}
//  AND ANIMAL SECTION   
