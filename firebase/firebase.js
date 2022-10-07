
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const db = firebase.firestore();




//--------------- References ------------------------

var namebox = document.getElementById("namen1"); 
var boxnumber = document.getElementById("namen2");

var buttonTest = document.getElementById("button1");
buttonTest.addEventListener('click', insertData);

var thingsRef;
var unsubscribe;


//--------------- Insert Data ------------------------

function insertData(){
   
thingsRef = db.collection('Reihenfolge')

thingsRef.add({
name: namebox,
number: boxnumber,
createdAt: serverTimestamp()

});
console.log("hihi")
}






// ----------------- Get function -----------------
function getData(){
const dbref = ref(db);

get(child(dbref)).then((snapshot)=>{
    if(snapshot.exists()){
        console.log(snapshot.val());
    }
 else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});


}