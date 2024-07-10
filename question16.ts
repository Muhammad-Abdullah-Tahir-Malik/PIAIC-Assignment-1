/*More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner. */

let arr:string[]=["Arsalan Bhi","Ahsan Bhi","Haroon Bhi"];

arr.forEach(fun);

function fun(value:string){
console.log(`A.o.A ${value} I have found a biger table so I am inviting more gest`);
}

arr.forEach(fun2);


function fun2(value1:string, num:number){
    console.log(`${num} : A.o.A ${value1} I am happy to invite you on dinner`);
    
}

arr.splice(0,0,"Mati");
//arr.forEach(fun2);
arr.splice(2,0,"Mahad");
//arr.forEach(fun2);
arr.splice(4,0,"Zaid");
arr.forEach(fun2);


export{}