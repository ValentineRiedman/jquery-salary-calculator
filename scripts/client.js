$(document).ready( onReady );

let employees = [];

function onReady(){
    $('#addEmployeeButton').on('click', addEmployee );
    $('#employeeOut').on('click', '.removeEmployeeButton', fireEmployee );
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
    displayEmployees();
//empty input fields
     $('#firstNameIn').val('');
     $('#lastNameIn').val('');
     $('#idnumberIn').val('');
     $('#titleIn').val('');
     $('#salaryIn').val('');

}// end addEmployee

function displayEmployees(){
    let el = $( '#employeeOut' );
    el.empty();
    let employeeSalary = 0;
    for( let i=0; i<employees.length; i++){
    el.append( `<li> ${ employees[i].firstName }  ${ employees[i].lastName } ${ employees[i].idNumber } ${ employees[i].title } $${ employees[i].salary }
    <button class="removeEmployeeButton" data-index="${i}">Fire</button></li>` );
    employeeSalary += Number( employees[i].salary/12);
    if (employeeSalary[i] > 20000){
        overBudget();
     }
    
}
 
    el = $('#employeeSalaryOut');
    el.empty();
    el.append( employeeSalary.toFixed(2) );
    let displayedSalary = employeeSalary;
     if ( displayedSalary > 20000){
        $('#employeeSalaryOut').css("background-color", "red");
     }
     if( displayedSalary < 20000){
        $('#employeeSalaryOut').css("background-color", "white");
     }
}//end displayEmployees

function fireEmployee(){
    console.log('in fireEmployee');
    //$( this ).parent().remove();
console.log( $( this ).data( 'index' ));
employees.splice( $( this ).data( 'index' ),1);
displayEmployees();
    
}//end fireEmployee

// function overBudget(){
//     employeeSalaryOut.css("background-color", "red");
// }