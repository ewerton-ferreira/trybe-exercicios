let fruits = [3, 4, 10, 1, 12];
let searchForValues = 0;

for(let index = 0; index < fruits.length; index +=1) {
    searchForValues += fruits[index];
    } 
    
    if(searchForValues > 15) {
        console.log(searchForValues)
    } else {
        console.log("valor menor que 16");
}