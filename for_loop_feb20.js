let num = 10;
for ( let i = 0; i < num; i++)
{
    console.log(2*i);
}

let obj ={
    A : 26,
    B : 23,
    C : 34,
    D : 35
}
obj.E= 434;
for( let a in obj){                                //This is a for in loop
    console.log(a + " " + obj[a]);
}


for( let b  in obj){                                //This is a for in loop
    console.log("The values of the object are as follows: " + obj[b]);
}
console.log("34 + 53 = ", 34+53);
