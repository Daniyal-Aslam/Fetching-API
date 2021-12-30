// FOR EACH LOOP BEGIN
 const arry = ["javascript","php","pyhton","html","css","Java"]; 
 arry.forEach(element =(name,ind) => {
    document.getElementById("getloop").innerHTML = `${ind} -- ${name} `; 
    console.log(`${ind} -- ${name} `);
 });
// FOR EACH LOOP END 