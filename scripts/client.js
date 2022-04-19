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
    el.append(`
    <tr>
                <td>${ employees[i].firstName }</td>
                <td>${ employees[i].lastName }</td>
                <td>${ employees[i].idNumber }</td>
                <td>${ employees[i].title }</td>
                <td>$${ employees[i].salary }</td>
                <th><button class="removeEmployeeButton" data-index="${i}">Fire</button></th>
              </tr>
    
    
    
    `)
    
    
        //el.append( `<li> ${ employees[i].firstName }  ${ employees[i].lastName } ${ employees[i].idNumber } ${ employees[i].title } $${ employees[i].salary }
    //<button class="removeEmployeeButton" data-index="${i}">Fire</button></li>` );
    employeeSalary += Number( employees[i].salary/12);    
}
 
    el = $('#employeeSalaryOut');
    el.empty();
    el.append( employeeSalary.toFixed(2) );
    let displayedSalary = employeeSalary;
    //create a red background if over 20k
     if ( displayedSalary > 20000){
        $('#employeeSalaryOut').css("background-color", "red");
        alert('You are over budget!');
     }
     //keep same background if below 20k
     if( displayedSalary < 20000){
        $('#employeeSalaryOut').css("background-color", "aqua");
     }
}//end displayEmployees

function fireEmployee(){
console.log( 'in fireEmployee', $( this ).data( 'index' ));
//give an alert when employee is fired
alert(employees[$( this ).data( 'index' )].firstName  + ' has been fired.'   );
employees.splice( $( this ).data( 'index' ),1);
displayEmployees();
    
}//end fireEmployee
