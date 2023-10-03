// function definition
//function functionName(parameters) {
    //code to be executed
//}

//functionName(parameterValues); //function "call"

//function sayHello(){
//    console.log("Hello!");
//}

//sayHello(); //calling the function

//function add(a, b) {
    //return a + b;
//}

//var result = add(2,3);
//console.log(result);



//var yourName = "Bob";   // global variable, defined outside of function

//function sayHi() {
//    console.log("Hi " + yourName)
//}

//sayHi();

//function sayBye() {
//    console.log("bye " + yourName)
//}

//sayBye();


// getElementById
//var getId = document.getElementById("myDiv");
//console.log(getId);



 function getInfo() {
     var fullName = document.getElementById("name").value;
     var getEmail = document.getElementById("email").value;
     var getClass = document.getElementById("class").value;

    var result = "Name: " + fullName + " Email: " + getEmail + " Class: " + getClass;

     alert(result);
 }

// var status1 = document.getElementById("status").innerHTML;
// //alert(status1);

// document.getElementById("status").innerHTML = "This class is FULL - Registration is CLOSED"

// //events
// var btn = document.getElementById('btn');
// btn.addEventListener("click", function(event){
//    alert("You Clicked the Button");
// });



//var formBtn = document.getElementById('btn2');
//formBtn.addEventListener("click", function getName(event) {
//    event.preventDefault();
//    var favFood = document.getElementById("favFood").value;
//    console.log(favFood);
//});

