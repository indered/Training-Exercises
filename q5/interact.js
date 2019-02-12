const submit=document.querySelector('button.submit');
const name=document.getElementById('name');
const age=document.getElementById('age');
const salary=document.getElementById('salary');
const dob=document.getElementById('dob');
const q1=document.getElementById('q1');
const q2=document.getElementById('q2');
const q3=document.getElementById('q3');





var Employee=[];  //declaring array Employee


submit.addEventListener('click', ()=>{
   
    var emp={
        Name: name.value,
        Age:age.value,
        Salary:salary.value,
        Dob:dob.value
    };
    Employee.push(emp);
    
    let ul=document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent=name.value+" "+age.value+" "+salary.value+" "+dob.value;
    ul.appendChild(li);

    console.log(Employee);
    clearFields();

});

function clearFields(){
    name.value="";
    age.value="";
    salary.value="";
    dob.value="";

}

