


function hinzufügen() {

var namen1 = document.getElementById("namen1").value;


if(sessionStorage.getItem("storage1") != null){
arrayNew = sessionStorage.getItem("storage1") + "/" + namen1;
}
else{
    arrayNew = namen1 ;
}

sessionStorage.setItem("storage1", arrayNew);




console.log(sessionStorage.getItem("storage1"));



var namenFürAuslosung  = document.createElement("li");
namenFürAuslosung.innerHTML = namen1;
document.getElementById("namenFürAuslosung").appendChild(namenFürAuslosung);




}

function leeren1(){
    sessionStorage.clear();
    location.reload();
}


function auslosen(){
    var arraySplited = sessionStorage.getItem("storage1").split("/");



    
    let alleResults = [];
    let neueReihenfolge =[];
   

    for (let index = 0; index < 100; index++){
        
        
        
        let max = arraySplited.length -1;
        let min = 0;
        let step1 = max - min +1;
        let step2 = Math.random()*step1
        let result = Math.floor(step2)+ min;

        if (alleResults.includes(result) == false){
            neueReihenfolge.push(result);
        }

        
    
        
        alleResults.push(result)
        
        
       
    }

console.log(neueReihenfolge);

let newNeu = [];
for (let index = 0; index < neueReihenfolge.length; index++){
    let indexZahl = neueReihenfolge[index];


   
    

    //var interator = newNeu.values();



if (index %2 != 0){
    newNeu.push(" vs " + arraySplited[indexZahl] + ".");
    
}
else{
   

    newNeu.push(arraySplited[indexZahl]);
}



    }

    var newNeuString = newNeu.toString();

    var newNeu1 = newNeuString.replace(/,/g, "").split(".");

    var newNeu2 = newNeu1.values();

    
    
   
   
    
    


  //  for (let letter of interator) {
  //      console.log(letter);
  //    }







  for (let letter of newNeu2) {
    
    
  
var auslosung = document.createElement("li")

auslosung.innerHTML = letter;
document.getElementById("auslosungErgebnis").appendChild(auslosung);
  }






    

}