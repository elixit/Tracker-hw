# TRACKER-HW


## Description

- The goal of this project is to create a seeds.sql, schema.sql, and connect it to a server using mysql 2 and inquirer. We are required to make an employee database that allows the user to 
                 'view all departments',
                 'view all roles',
                  'view all employees',
                   'add a department',
                    'add a role',
                     'add an employee',
                      'update an employee role'  from the command line.
 A feature to 'Quit' the terminal was added. When the user installs the required dependencies and sources the seeds/schema using sql, they can run 'npm start' to get the options prompted in the terminal. Used sql2 for SELECT, AS, FROM, INNER JOIN, ON, CONCAT, LEFT JOIN, ORDER BY, VALUES, SET, functions which allowed database to be structured according to each function. db.query used to send out responses.

## Table of contents

1. [ Description ](#Description)
2. [ link ](#Functionalitylink)
3. [ usage ](#Usage)
4. [ installation ](#Installation)
5. [ screenshot ](#Screenshot)
6. [ liscence ](#License)

## Functionalitylink



(https://drive.google.com/file/d/1a6KC9OWHlKXrBzItJYp82NucdT9BgPUZ/view?usp=share_link))



## Usage
 - imported required packages: node.js mysql2, inquirer
 - npm i to get node.js
 - to install dependencies: npm i inquirer@8.2.4, npm i mysql2
 - set password in server.js
 - source schema/seeds: mysql -u root -p
 - enter password when prompted
 - navigate to proper folder and run npm start
   

## Installation 
- server.js used to connect host to sql 
- seeds.sql used to keep data on employee database 
- schema.sql used to structure employee database
- inquirer used to prompt user questions



## Screenshot 


 
![Image 8-11-23 at 7 54 PM](https://github.com/elixit/Tracker-hw/assets/63372291/64010f5c-0004-41e3-b3f5-d7865f213a75)


## License

[MIT](https://choosealicense.com/licenses/mit/)

