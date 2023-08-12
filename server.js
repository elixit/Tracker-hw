// adding required modules
const inquirer = require("inquirer");
const mysql = require("mysql2");
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
                addDepartment();
                break; 
            case 'add a role':
                addRole();
                break;
            case 'add an employee':
                addEmployee();
                break;
            case 'update an employee role':
                updateEmployeerole();
                break;

                // ends the server
            case 'Quit':
                console.log('quitting');
                db.end();
                break;
        }
    });
};
// functions for viewing roles added with mysql2.
function viewallDeps() {

    // the SELECT choses what we want to change using the AS command which renames the department name
    const sql2 = `SELECT department.id, department.name AS Department FROM department;`
    db.query(sql2, (err, res) => {
        if (err) {
            return;
        }
        console.log(res);
        promptQuestions();
    });
};let deletedRow = ''

db.query('SELECT * FROM department, ', function (err, results) {
  console.log(results);
}); 

db.query(`DELETE FROM department WHERE id = ?`, deletedRow, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
  
  

db.query('SELECT * FROM role, ', function (err, results) {
    console.log(results);
  });

  db.query(`DELETE FROM roles WHERE id = ?`, deletedRow, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
  
  

db.query('SELECT * FROM employee, ', function (err, results) {
    console.log(results);
  });

  db.query(`DELETE FROM roles WHERE id = ?`, deletedRow, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
  


function promptUser() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'text',
          message: 'Enter three characters.',
          maxLength: 3,
        },
        {
          name: 'textColor',
          type: "list",
          message: 'Enter a color keyword for the text color.',
          
        },
       
        {
          name: 'shape',
          type: "list",
          message: 'Choose a shape for the logo.',
          choices: [ "Square", "Circle","Triangle"],
        },
        {
          name: 'shapeColor',
          type: "list",
          message: 'Enter a color keyword for the shape color.',
        },
        
      ])
      .then((input) => {
        {writeToFile("logo.svg", input);
        }
      });
    }
    
    promptUser();
    
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
