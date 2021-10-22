
function namenList() {

    var array1 = localStorage.getItem("storage");
    var namen1 = document.getElementById("namen1").value;
    var namen2 = document.getElementById("namen2").value;
    var arrayNew;

      arrayNew = namen1 + " / " + namen2;
      localStorage.setItem("storage", arrayNew);
      var name1 = document.createElement("li");
      name1.innerHTML = localStorage.getItem("storage");
      document.getElementById("li").appendChild(name1);

    document.getElementById("button1").disabled = true
}
function leeren() {
    localStorage.clear();
}
function loschen() {
    var ulElem = document.getElementById("li");
    ulElem.removeChild(ulElem.childNodes[0]);
}


function success() {
	 if(document.getElementById("namen1").value==="" || document.getElementById("namen2").value==="")  {
            document.getElementById("button1").disabled = true;
        } else {
            document.getElementById("button1").disabled = false;
        }
    }
