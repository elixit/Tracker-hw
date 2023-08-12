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


let deletedRow = ''

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
