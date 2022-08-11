function showOutput(){
    var fullName = document.getElementById("fullName").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var salary;

if (jobTitle == "Project Manager") {
  //  if (jobTitle.toLowerCase() == "project manager") {
    salary = 100000;
} 

else if (jobTitle == "Supervisor"){
   // else if (jobTitle..toLowerCase() == "supervisor"){
    salary = 80000;
}

else if (jobTitle == "Sales Representive"){
   // else if (jobTitle.toLowerCase() == "sales representive"){
    salary = 60000;
}
else {
    salary = "Invalid job Title, there is no salary"
}
document.getElementById("postFullName").innerHTML = "Full Name: " + fullName;
document.getElementById("postJobTitle").innerHTML = jobTitle;
document.getElementById("postSalary").innerHTML = "$" + salary;
}
