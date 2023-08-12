// adding required modules
const mysql = require("mysql2");
const inquirer = require("inquirer");
// database connected
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "komodo14",
        database: "employees_db",
    },
    console.log(`on employees_db database.`)
);
// adding function that will prompt the user questions and connecting to database
db.connect(function (res) {
    console.log("starting");
    promptQuestions();
});

// choices given to user 
function promptQuestions() {
    inquirer.prompt([
{
            type: 'list',
            name: 'userOptions',
            message: 'Select an option?',
            choices:[
                'view all departments',
                 'view all roles',
                  'view all employees',
                   'add a department',
                    'add a role',
                     'add an employee',
                      'update an employee role',
                      'Quit',]}

// the prompt is assigned to each user option/selection - allows user to view / add / and update department/roles/employee
    ]).then((prompt) => {
        switch(prompt.userOptions) {
            case 'view all departments':
                viewallDeps();
                break;
            case 'view all roles':
                viewallRoles(); 
                break;
            case 'view all employees':
                viewAllemployees();
                break;
            case 'add a department':
                addNewdep();
                break; 
            case 'add a role':
                addNewrole();
                break;
            case 'add an employee':
                addNewemployee();
                break;
            case 'update an employee role':
                updateEmployeerole();
                break;

                // ends the server
            case 'Quit':
                console.log('quitting');
                db.end();
                break;
        }});
};
// functions for viewing roles added with mysql2.
function viewallDeps() {

    // the SELECT choses what we want to change using the AS command which renames the department name
    const sql2 = `SELECT department.id, department.name AS Department FROM department;`
    db.query(sql2, (err, res) => {
        if (err) {
            return;}
        
            console.log(res);
        promptQuestions();
    });
};
// selects change to role id to include title, and salary, INNER JOIN shows departments that match with department id from both tables
function viewallRoles() {
    const sql2 = `SELECT role.id, role.title AS role, role.salary AS salary FROM role INNER JOIN department ON (department.id = role.department_id);`;
    db.query(sql2, (err, res) => {
        if (err) {
            return; }  
        console.log(res);
        promptQuestions();
    
    });
};
// shows employee id, first name, last name, and department
function viewAllemployees() {
    const sql2 = `SELECT employee.id, employee.first_name, employee.last_name AS last_name, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN employee manager on manager.id = employee.manager_id INNER JOIN role ON (role.id = employee.role_id) INNER JOIN department ON (department.id = role.department_id) ORDER BY employee.id;`
    db.query(sql2, (err, res) => {
        if (err) {
            return; }
        console.log(res);
        promptQuestions();
    });
};

// function allows user to add a new department, using sql, the department response is set to the users entered name
function addNewdep() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'Enter the name of the department?',
        }]).then((response) => {
        const sql2 = `INSERT INTO department(name) VALUES('${response.department}');`
        db.query(sql2, (err, res) => {
            if (err) {
                return;}
                promptQuestions();
        });
    });
};
// function allows user to add a new role within a department, the user is prompted to enter new information for the role
function addNewrole() {
    const sql2 = `SELECT * FROM department`;
    // title, salary, and input are adjusted according to users input
    db.query(sql2, (err, array) => {
        // array map calls to where the users input will be adjusting ( name, id )
        const departmentArray = array.map(departments => ({
            name: departments.name,
            value: departments.id
        }));
        return inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the name of the new role?',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter the salary of the role?',
            },
            {
                type: 'list',
                name: 'department',
                message: 'Enter which Department the role belongs in?',
                choices: departmentArray
            }
            // changes made to department array's new title for roles
        ]).then((id) => {
            const sql2 = `INSERT INTO role SET title='${id.title}', department_id= ${id.department}, salary= ${id.salary};`
            db.query(sql2, (err, res) => {
                if (err) {
                    return;
                }
                console.log(id.title + " now on the database")
                promptQuestions();
            });
        })})
};
// function to add a new employee to database
function addNewemployee() {
    const sql2 = `SELECT * FROM employee`;
    db.query(sql2, (err, res) => {
        employeeChoices = res.map(employees => ({
            // merges first name and last name
            name: (employees.first_name + employees.last_name),
            value: employees.id}));
// employee role selection
    const sql2 = `SELECT * FROM role`;
    db.query(sql2, (err, res) => {
        roleChoices = res.map(role => ({
            name: role.title,
            value: role.id}));
            // name, role, and employees manager adjusted according to user input
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'first',
                    message: "Enter the employee's first name?",
                },
                {
                    type: 'input',
                    name: 'last',
                    message: "Enter the employee's last name?",
                },
                {
                    type: 'list',
                    name: 'role',
                    message: "Enter the employee's role?",
                    choices: roleChoices
                },
                {
                    type: 'list',
                    name: 'manager',
                    message: "Enter the employee's manager?",
                    choices: employeeChoices
                }
            ]).then((id) => {
                const sql2 = `INSERT INTO employee SET first_name='${id.first}', last_name= '${id.last}', role_id= ${id.role};`
                db.query(sql2, (err, res) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    const names = id.first + id.last
                    console.log(names + " added to the database")
                    promptQuestions();
                });
            });
        });
    });
};

// function to change existing employees role
function updateEmployeerole() {
    const sql2 = `SELECT * FROM employee`;
    db.query(sql2, (err, res) => {
        employeeChoices = res.map(employees => ({
            name: (employees.first_name + employees.last_name),
            value: employees.id
        }));
        const sql2 = `SELECT * FROM role`;
        db.query(sql2, (err, res) => {
            roleChoices = res.map(role => ({
                value: role.id,
                name: role.title
            }));
            return inquirer.prompt([
                {
                    type: 'list',
                    name: 'employee',
                    // allpws user to select from list of existing employees to adjust new role
                    message: "Choose the employee who's role you want to update?",
                    choices: employeeChoices
                },
                
                {
                    type: 'list',
                    name: 'manager',
                    message: "Enter the employee's manager?",
                    choices: employeeChoices
                },
                {
                    type: 'list',
                    name: 'role',
                    message: "Enter the role you want to assign to the employee?",
                    choices: roleChoices
                },
            
            // UPDATE function allows existing role info to be reset
            ]).then((id) => {
                const sql2 = `UPDATE employee SET role_id= ${id.role}, manager_id=${id.manager} WHERE id =${id.employee};`
                db.query(sql2, (err, res) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log("role changed")
                    promptQuestions();
                });
            });
        });
    });
};