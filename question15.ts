/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send
 out a new set of invitations. You’ll have to think of someone else to invite */


 let arr: string[] = ["Grandmothes", "Mother", "Prophet (PBUH)"];

 arr.forEach(fun);

 function fun(value:string){
    console.log(`A.o.A dear ${value} I would like to invite you on dinner tonight`);
    
 }

 arr.splice(0,1,"Phopo");
 arr.forEach(fun);


 export{}