/*Shrinking Guest List: You just found out that your new dinner table won’t
arrive in time for the dinner, and you have space for only two guests.
 */

var guest:string[]=["Amna","Ayesha","Rida","Umer","Yaseen","Kahlid"];
guest.forEach(abc);
function abc(Var:string){
console.log(`Dear ${Var} ....`);
}

for(var i=0;i<4;i++){
    guest.pop();
    console.log("\n" +guest + "\n")
}

console.log("\n"+guest+"\n");

//console.log(arr);



export{}