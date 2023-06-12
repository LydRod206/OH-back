# ONLY HANDS

# Backend


This is the backend of the ONLY HANDS app, built with Node.js and Express.js. It provides the API endpoints and interacts with the database to handle data operations.





## Installation


1. Clone the repository: `git clone git@github.com:stasiaDiamond/OH-back.git`
2. Navigate to the backend directory: `cd OH-back`
3. Install dependencies: `npm install`: 

Backend Dependencies:

Express: npm install express
Cors: npm install cors
Sequelize: npm install sequelize
MySQL2: npm install mysql2
Dotenv: npm install dotenv
Nodemailer: npm install nodemailer
Firebase: npm install firebase







## Configuration


Before running the app, you need to configure the database connection in the configuration file. Open `config/database.js` and set the appropriate values for your database:

Locate the config/database.js file in your project directory.
Open the database.js file using a text editor or an IDE.
Look for an object containing the database configuration options.
Set the appropriate values for your database connection.
Replace or add the necessary information for properties like username, password, database, host, port, etc.
Save the changes to the database.js file.





## Usage and Database



The backend uses a MySQL database to store data. Make sure you have a running MySQL server and update the database configuration accordingly.

To initilize the database, run the following commands:

1. Navigate into the mysql server: `mysql -u root -p`
2. Run: `source db/schema.sql` then `exit`.
3. Run migrations and seed: `npx sequelize-cli db:migrate` then `npx sequelize-cli db:seed:all`. 

To start the backend server, run the following command: `npm start`.


This will start the server on [localhost:9000](http://localhost:9000).






## API Routes



The backend provides the following API routes:

- `/clients`: Handles user operations (GET, POST, PUT, DELETE).
- `/jobs`: Handles job operations (GET, POST, PUT, DELETE).
- `/invoices`: Handles invoice operations (GET, POST, PUT, DELETE).


Refer to the source code in the `controllers` directory for more details about each route.







## Contributing


Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.



## License


This project is licensed under the [MIT License](LICENSE).










