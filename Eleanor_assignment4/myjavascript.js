//BMI


let PeterMass=78;
let LucasMass=92;
let PeterHeight=1.95;
let LucasHeight=1.69;
PeterBMI=PeterMass/(PeterHeight*PeterHeight);
LucasBMI=LucasMass/(LucasHeight*LucasHeight);


console.log('Lucas BMI:',LucasBMI);
console.log('Peter BMI:',PeterBMI);


if (LucasBMI > PeterBMI){
    console.log('True:Lucas BMI is Higher');
    document.getElementById('highbmi').innerHTML = "Lucas have high BMI" ;
}
else{
    console.log('False');
    document.getElementById('highbmi').innerHTML = "Lucas do not have high BMI" ;
}

document.getElementById('peterbmi').innerHTML = "The BMI of Peter is" + PeterBMI ;
document.getElementById('lucasbmi').innerHTML = "The BMI of Lucas is" + LucasBMI ;


let c1 = 0;
let c2 = 10;
let c3 = 100;
let f1 = 32;
let f2 = 100;
let f3 = 10;



console.log('celcius temperature is' + c1 + "," + c2 + " " + c3);
console.log('fahrenheit temperature is' + f1 + "," + f2 + " " + f3);

document.getElementById('temperaturef').innerHTML = "Temperature in fahrenheit:" + f1 + "," + f2 + ", " + f3 ;
document.getElementById('temperaturec').innerHTML = "Temperature in Celcius:" + c1 + "," + c2 + ", " + c3 ;

//Temperature Convert F to C
function FahrenheitToCelcius(Ftemp){
   return (5/9)*(Ftemp-32);
}

//Temperature Convert C to F
function CelciusToF(ctemp){
    return (ctemp*1.8000)+32.00;
 }


console.log('F to C temperature is' + FahrenheitToCelcius(100) );
console.log(FahrenheitToCelcius(100));

//console.log(FahrenheitToCelcius((prompt('Enter F Temp'))));
document.getElementById('convert_to_c').innerHTML = "F to C temperature is" + FahrenheitToCelcius(prompt('Enter Fahrenheit Temp'));
//console.log(FahrenheitToCelcius((prompt('Enter F Temp'))));
//console.log(FahrenheitToCelcius());

document.getElementById('convert_to_f').innerHTML = "C to F temperature is" + CelciusToF(prompt('Enter Celcius Temp'));

//console.log(FahrenheitToCelcius());
//console.log(CelciusToF());



function retireAge(personAge,birthyear){
 
   personAge = 2022-birthyear;

   if ( (personAge) > 65 ){

       console.log('happy retirement');
   }
   else{

       yeartoretire = 65 - personAge;
       console.log('You can retire in' + yeartoretire + 'years');
     
   }
   

}

