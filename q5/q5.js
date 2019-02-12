
// Q1. Filtering Filtering employees with salary greater than 5000

function filterSalaryGreaterThan5000(){
    var result = Employee.filter(function(emp){
        return emp.Salary>5000;
    });

    for (var key in result){
         q1.innerHTML+=result[key].Name+" ";
         q1.innerHTML+=result[key].Salary+"  ";
    }
}

// Q2. Group employee on the basis of their age

function groupEmployeeAge(){

    var teenAge=[];
    var adult=[];
    var senior=[];
    
   Employee.map(function (emp){
        if(emp.Age>12 && emp.Age<18)
            teenAge.push(emp);

          else if(emp.Age>=18 && emp.Age<=60)
            adult.push(emp);

          else if(emp.Age>60 )
            senior.push(emp);

    });

    //displaying output
    if(teenAge){
        q2.innerHTML+="<br>Teen Age Gourp: ";
    for (let key in teenAge){
      
        q2.innerHTML+=teenAge[key].Name+" ";
        q2.innerHTML+=teenAge[key].Age+"  ";
        }
    }
    if(adult){
        q2.innerHTML+="<br>Adult Age Gourp: ";
   for (let key in adult){
     
        q2.innerHTML+=adult[key].Name+" ";
        q2.innerHTML+=adult[key].Age+"  ";
        }
    }
    
    if(senior){
        q2.innerHTML+="<br>Senior Age Gourp: ";
    for (let key in senior){
      
        q2.innerHTML+=senior[key].Name+" ";
        q2.innerHTML+=senior[key].Age+"<br>";
       }
    }


}



// Q3. fetch employees with salary less than 1000 and age greater than 20. 
//      Then give them an increment 5 times their salary.

function fetchEmployeesSalaryAge(){

    for (var key in Employee)
        {
            if(Employee[key].Salary<1000 && Employee[key].Age>20){
                Employee[key].Salary*=5;
             
                q3.innerHTML+=Employee[key].Name +" ";       //displaying data
                q3.innerHTML+=Employee[key].Salary + "  ";
            }
        }
}
