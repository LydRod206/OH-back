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

- `/users`: Handles user operations (GET, POST, PUT, DELETE).
- `/jobs`: Handles job operations (GET, POST, PUT, DELETE).
- `/receipts`: Handles receipt operations (GET, POST, PUT, DELETE).
- `/invoices`: Handles invoice operations (GET, POST, PUT, DELETE).
- `/job-categories`: Handles job category operations (GET).

Refer to the source code in the `controllers` directory for more details about each route.







## Contributing


Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.



## License


This project is licensed under the [MIT License](LICENSE).








![Screenshot 2023-06-09 at 11 37 56 AM](https://github.com/stasiaDiamond/OH-back/assets/119384486/9cb31188-05a5-4831-be71-cce6fa82b957)



![Screenshot 2023-06-09 at 11 37 01 AM](https://github.com/stasiaDiamond/OH-back/assets/119384486/68b6273b-f9ad-4265-9d58-4686ce1986d9)



![Screenshot 2023-06-09 at 11 37 18 AM](https://github.com/stasiaDiamond/OH-back/assets/119384486/a5d21644-e584-458a-a6e5-71bfc23c8f83)



![Screenshot 2023-06-09 at 11 37 35 AM](https://github.com/stasiaDiamond/OH-back/assets/119384486/42740f0f-7047-4e0d-8cf7-589b311c7539)



![Screenshot 2023-05-31 at 1 48 21 PM](https://github.com/stasiaDiamond/OH-back/assets/119384486/e80ebfec-281d-4cce-825a-d3753259ca39)


