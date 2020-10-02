console.log('JS loaded');

$('document').ready(onReady);

let employees = [];

function onReady(){
    console.log('JQ loaded');
    $('#submitBtn').on('click', addEmployee);
}// end of onReady

function addEmployee(){
    console.log('Submit logged');
}// end of addEmployee