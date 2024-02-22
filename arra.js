const arra = [];
// adding array

arra[0]= "hello";
arra[1]="welcome";
arra[2]=25;



console.log(arra[arra.length -1]);
arra.push (55);
console.log(arra)
arra.unshift("vk")
console.log(arra)
arra.pop();
console.log(arra)


// let pus = arra.unshift("hrlo")
// console.log(pus)// in push and unshift it shows length of array

// let shif = arra.shift()
// console.log(shif)
//in shift and pop it display deleted output
arra.splice(3,0,"vigneshvk")
const newarra=arra.slice(0,3);
// (1,2) first is to slect index second is to select how many elements to delete
console.log(arra)
console.log(newarra.reverse()) //it will reverse the order 


const myarray =["dhoni",7,"virat",18];
console.log(myarray);

// const newarraya = myarray.concat(arra);
// console.log(newarraya);// concat used to add


const newarraya = [...myarray,...arra];
console.log(newarraya);