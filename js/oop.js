// CHECK WINDOW OBJECT    
console.log(window);
// CHECK OBJECT INTO FOR IN LOOP
const obj ={
    name:"Daniyal Aslam",
    age:20,
    depart:"Bs(Software Engineering)"
}

for (const key in obj) { 
    const txt = `${obj[key]}<br>`;
    document.write(txt);

}

obj.prototype.main="get box";
console.log(obj);