# EcommerceDatabase

## Description
Ecommerce Database Structure

## Installation
To install:  
1. Clone repo to your computer

## Usage
2. Once cloned Open a terminal and run "npm i" 
3. Update the .ENV file with your mysql password
4. In the terminal, run "mysql -uroot -p" (enter your sql pw)
5. While in the MySql terminal, run "source db/schema.sql;"
6. exit the Mysql terminal 
7. Next the terminal, run "node seeds/index.js;"
8. in the terminal, run "node server.js" 
9. Open insomnia and perform get, post, put, and delete functions

## License
MIT License
- This application is covered under the MIT license. 
- https://opensource.org/licenses/MIT

## User Story
AS A manager at an internet retail company <br>
I WANT a back end for my e-commerce website that uses the latest technologies <br>
SO THAT my company can compete with other e-commerce companies <br>

## Acceptance Criteria: 

GIVEN a functional Express.js API <br>
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file <br>
THEN I am able to connect to a database using Sequelize  <br>
WHEN I enter schema and seed commands  <br>
THEN a development database is created and is seeded with test data  <br>
WHEN I enter the command to invoke the application  <br>
THEN my server is started and the Sequelize models are synced to the MySQL database  <br>
WHEN I open API GET routes in Insomnia Core for categories, products, or tags  <br>
THEN the data for each of these routes is displayed in a formatted JSON  <br>
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core  <br>
THEN I am able to successfully create, update, and delete data in my database  <br>

## Link to video of application being used in insomnia: 
https://drive.google.com/file/d/1MqKNyeoFIUVXsQjUV8jUIEKBAi0UaNn_/view

## Questions 
- Github profile - https://github.com/NBADRAUN
- For any questions, please email me at Nbadraun@gmail.com


