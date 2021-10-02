'use strict';

 /* function logger(){
  
    console.log("my name is John");
}

logger();
logger();
logger();

// receive and return data

function fruitProcessor(apples,oranges){
 
    //console.log(apples,oranges);
    const juice =`juice with ${apples} and ${oranges} oranges` ;
    return juice;

}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const apOgJuice = fruitProcessor(4,5);
console.log(fruitProcessor(3,3)) ;



//Function declaration
function calcAge1(birthYear) {

    return 2021 - birthYear ;
}

const age1 = calcAge1(1893) ;
console.log(age1);

//anoonimus function EXPRERSSION
const calcAge2 = function(birthYear){
    return 2023 - birthYear ;
}

const age2 = calcAge2(1984);

console.log(age1,age2);


// ARROW finction
 const calcAge3 = birthYear3 => 2037 - birthYear3;

 console.log(calcAge3(1977));

 const yearUntil = (birthYear4, firstName) =>{
     const age =2037- birthYear4 ;
     const retirrement = 65 - age ;
     return `${firstName} retirers in ${retirrement}` ;

 }

 console.log(yearUntil(1995,'John')) ;
 console.log(yearUntil(1990,'Bob')) ;
 
//Function calls other function


function cutPiece(fruit){
    return fruit*4 ;
}


 function fruitProcessor(apples,oranges){
 

    const applePieses = cutPiece(apples) ;
    const orangePieces = cutPiece(oranges) ;
    //console.log(apples,oranges);
    const juice =`juice with ${applePieses} and ${orangePieces} oranges` ;
    return juice;

}

console.log(fruitProcessor(2,3) ); 

 const calcAge = function(birthDate) {

    return 2037-birthDate
}

const yearUntil = function (birthDate, firstName) {
    const age = calcAge(birthDate)
    const retirrement = 65 - age ;

   if (retirrement>0){

   return  retirrement ;
   }else{
       return 555 ;
   }
}
   // return `${firstName} retirers in ${retirrement}` ;
   console.log(yearUntil(1992,'mike'));
   console.log(yearUntil(1970,'BOB'));   */

   const avr = (a,b,c) => (a+b+c)/3 ;

   const avrKoala = avr(40,45,30) ;
   const avrDol = avr(40,10,15);

     function checkWinner(koala,dol) {

    if (koala>dol) { 
        if(koala>=dol*2){
            return 'Koala wins'
        } else{
            return "nobody wins"
        }

    } else{ 

     if(dol>=koala*2){
        return 'Dolphins wins'
     } else {
        return "nobody wins"
     }
    }
   }
   const winner = checkWinner(avrKoala,avrDol);

   console.log(winner);
   console.log(`Koala ${avrKoala} Dolphins  ${avrDol}`) ;
