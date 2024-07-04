/*Name Cases: Store a person’s name in a variable, and then print that 
person’s name in lowercase, uppercase, and titlecase. */


let a="Abdullah tahir";
let b=a;
a= a.toUpperCase();
console.log(a);
a=a.toLowerCase();
console.log(a);
let result = "";
for (let i = 0; i < b.length; i++) {
    let char = b[i];
    if (char >= 'a' && char <= 'z') {
        result += char.toUpperCase(); 
    }
    else if (char >= 'A' && char <= 'Z') {
        result += char.toLowerCase(); }
    else{
        result+=char;
    }
}
console.log(result);