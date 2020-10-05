$('document').ready(onReady);

let employees = [];

function onReady(){
    console.log('JQ loaded');
    $('#submitBtn').on('click', addEmployee);
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
        // alert('Please fill out all the field!!');
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill out all fields!'
          })
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
    $('.deleteBtn').on('click', deleteEmp);  //descentdent listener for the delete button  
}// end of addEmployee

function appendToDom(){
    //targeting tbody for appending to DOM
    let display = $('#tbody');
    display.empty();

    let monthlyCost = 0;

    //loops through the employess array and append to DOM base on index
    for (let i = 0; i < employees.length; i++) {
        display.append(
            `<tr>
                <td>${employees[i].firstName}</td>
                <td>${employees[i].lastName}</td>
                <td>${employees[i].id}</td>
                <td>${employees[i].title}</td>
                <td>${employees[i].annualSalary}</td>
                <td><button class = "deleteBtn btn btn-danger">Delete</button></td>
            </tr>`)
            monthlyCost += Math.round(`${employees[i].annualSalary}`/12);
            console.log(monthlyCost);
            $('#monthlyTotal').text(monthlyCost);
            //conditional to add red background color if over 20k
            if (monthlyCost > 20000) {
                $('#monthlyTotal').addClass('p-3 mb-2 bg-danger text-white')
            }else{
                $('#monthlyTotal').addClass('p-3 mb-2 bg-success text-white')
            }
    }//end of loop
    
}//end of appendToDom

function deleteEmp(){
    console.log('deleted');
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        $(this).parent().parent().remove();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })//end of sweetalert
    //   employees.splice(0, employees.length);
    // $(this).parent().parent().remove();
}//end of deleteEm

