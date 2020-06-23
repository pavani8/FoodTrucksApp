***************Requirements*********************
-->node
-->mongo
-->vs code editor
******Procedure********
1)Create a folder.Open the folder in vs code
2)In the terminal enter commands:
         a) npm init:  to create package.json file
        // b)npm install: to create node_modules folder which consists of packages
3)npm install express --save         --> to install express framework
    After creating any one dependency, node_modules folder gets created.
4)npm install body-parser --save   --> to install body-parser middle ware which parses the incoming requests
   --> body-parser is a module that parses the request (of various content types) and creates a req.body object 
         that we can access in our routes.
5)npm install mongoose --save      --> which converts javascript code to mongo queries
6)Create a file named server.js and write code in it.
7)For configuring and connecting to a database, create a config folder in the root folder of project.
    Create database.config.js file in config folder
8)Write the url of database connection in database.config.js file
9)Configure and connect to the database in server.js file
10)Create a folder called app->models folder->modelname.js file


                                                                 