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
   
    appendToDom();
}// end of addEmployee

function appendToDom(){
    let display = $('#tbody');
    display.empty();

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
            </tr>`)
        
    }//end of loop
}//end of appendToDom
