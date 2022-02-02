
## Usage
* You need to run PostgreSQL server locally and add .env file with the credentials. Check example at .env.example

* Install dependencies
	```
	npm install
	```
* Run locally
	```
	$ npm start
	```
* Run using nodemon (for development purposes)
	```
	$ npm run start-dev
	```
* Run Prettier (only check)
	```
	$ npm run format
	```
* Run Prettier (modify files)
	```
	$ npm run format:fix
	```

## Environment Variables
```
NODE_ENV=development          # NODE Environment -> <development, production, test>
PORT=3001                     # API PORT

# DB Connection
DB_HOST=localhost             # Postgres host
DB_PORT=5432                  # Postgres Port
DB_NAME=app                   # Postgres DB Name
DB_USERNAME=root              # Postgres Username
DB_PASSWORD=root              # Postgres Passsword
```