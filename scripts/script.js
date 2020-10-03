console.log('JS loaded');

$('document').ready(onReady);

let employees = [];

function onReady(){
    console.log('JQ loaded');
    $('#submitBtn').on('click', addEmployee);

    
    // $('#table').on('click', appendToDom);
}// end of onReady

function addEmployee(){
    console.log('in addEmployee');
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();
    //conditional to check all input fields are entered
    if ((firstName === '') || (lastName === '') || (id === '') ||(title === '') ||(annualSalary === '')){
        alert('Please fill out all the field!!');
        return false;
    }// end of conditional
    //grabs the value from the input fields and push it into the employees array
    employees.push({firstName: firstName,
                    lastName: lastName,
                    id: id,
                    title: title,
                    annualSalary: annualSalary    
         })
    //empties the input after submit is clicked
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');  
   //calls the appendToDom function
    appendToDom();
}// end of addEmployee

function appendToDom(){
    let display = $('#tbody');
    display.empty();

    let monthlyCost = 0;

    // console.log('trying to push to DOM');
    // console.log(employees.firstName);
    for (let i = 0; i < employees.length; i++) {
        display.append(
            `<tr>
                <td>${employees[i].firstName}</td>
                <td>${employees[i].lastName}</td>
                <td>${employees[i].id}</td>
                <td>${employees[i].title}</td>
                <td>${employees[i].annualSalary}</td>
                <td><button class = "deleteBtn">Delete</button></td>
            </tr>`)
            monthlyCost += Number(`${employees[i].annualSalary}`/12);
            console.log(monthlyCost);
            $('#monthlyTotal').text(monthlyCost);
            if (monthlyCost > 20000) {
                $('#monthlyTotal').addClass('red')
            }
    }//end of loop
    $('.deleteBtn').on('click', deleteEmp);    
}//end of appendToDom

function deleteEmp(){
    console.log('deleted');
    $(this).parent().parent().remove();
}//end of deleteEm

