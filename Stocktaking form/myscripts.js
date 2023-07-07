


/* var name = prompt("Please enter your Name and Surname","");
var gender = prompt("Please enter your gender","");

if (gender == 'male')
{
    alert("Welcome, MR. " + name);

}
else if (gender == 'female')
{
    alert("Welcome, MS. " + name);

} else {
    alert("Welcome, Unknown gender ("+ gender +") " + name);
} */


function four_numbers() { 
    var first_number = document.getElementById("box_number_2").value;
    var second_number = document.getElementById("box_number_3").value; 
    var third_number = document.getElementById("box_number_4").value;
    var fourth_number = document.getElementById("box_number_5").value;
    var result =parseInt(first_number)+parseInt(second_number) 
    +parseInt(third_number)+parseInt(fourth_number);
    var box_number_5 = document.getElementById('box_number_6');
    box_number_5.value=result;
     } 
     
     function clear_box() {
     document.getElementById("box_number_2").value="";	 
     document.getElementById("box_number_3").value="";	 
     document.getElementById("box_number_4").value="";	 
     document.getElementById("box_number_5").value="";	 
     }