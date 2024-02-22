function sum (num1 ,num2){
    return num1+num2;

}
console.log(sum(10,5))

// function em (na) {
    
//    return(na.slice(0 ,na.indexOf("@")));
// }
// let na = prompt();
// console.log(em(na))


const toProper= (detail)=> {
    return(detail.charAt(0).toUpperCase() +detail.slice(1).toLowerCase()); 
}

console.log(toProper('eLlo'));