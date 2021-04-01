# exercise_tracker
This application is a simple exercise record keeping application

Link to application demo : 'to be deployed soon'

To run it locally:

1. cd into the exercise_tracker folder
2. cd into the front_end folder type `npm install` to install all the dependencies for the application
3. cd into the backend folder type `npm install` to install the dependencies
4. you need to get your mongodb atlas account to hookup the database
5. in the models folder inside the backend folder the is a user schema and an exercise schema
6. when you create your db on mongodb atlas make sure the collection names are exercises and users for the db to hookup correctly
7. once that is done get your `db uri`
8. inside the backend folder and locate the .env file
9. In it you need to look for the `ATLAS_URI` replace the placeholder value with your db uri from mongodb atlas
10. To `start` the application first cd into the front_end folder and run `npm start` to start the react server
11. then cd into the backend folder and type `npm start` the db connection would be made if successful you would see a log in the console
12. move to your browser, it should load the localhost automatically
13. view the application

# Features
Currently you can just create an exercise, edit and delete it. also there is user authentication as well
more features to come as i brainstorm





