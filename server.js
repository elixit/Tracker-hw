const express = require('express');
const mysql = require('mysql2');


const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'department_db'
  },
  console.log(`Connected to the department_db database.`)
);


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