$(document).ready( onReady );

let employees = [];

function onReady(){
    $('#addEmployeeButton').on('click', addEmployee );
}

function addEmployee(){
    console.log('in addEmployee');
    let newEmployee ={
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idnumberIn').val(),
        title: $('#titleIn').val(),
        salary: $('#salaryIn').val()
    }
    console.log( newEmployee );
    employees.push( newEmployee );
    console.log( employees );

}// end addEmployee

function displayEmployees(){
    let el = $( '#employeeOut' );
    el.empty();
    for( let i=0; i<employees.length; i++);
    el.append////working on append
}