# Formula1 Stats Excercise

Demo. http://f1stats-bb.herokuapp.com

## Structure
	Angularjs doesnt have a standard structure from the Vendor as most of the backend frameworks has. Its the duty of the front end guys to come up with a structure which meet the standards.
	While Structuring the Backbase excercise immense care was put into it by separating the logic and control into the desired places.
	Application can scale upon the struture provided.
	Application code is reusable.
	Application code Well commented.

	Application logic is mostly, Inside of `src` directory.

## Usage
	- Application has a simple flow. It can be run from any lightweight server.
	- The application doesnt really needs any server, But some of the request put to a third party domain, makes it difficult for angular ro resolve the CROSS DOMAIN http issues. So Application needs to be on http protocol to avoid that, which you can do by running it under any server.
	- While development I used Web Server for chrome extension. gulp-connect ,PHP-5 internal server, http-server or node express might be your options
## Technologies.
	- As per requirment, Angularjs is conveniently used to create SPA application
	- Simple Custom CSS are used.
	- CSS used are a little Goldplated, Because the reason that the Application is related to sports and sports people like application with heavy CSS.	

## Tests
Karma Test runner is being setup with jasmine for test framework
Well, not complete unit tests were written, but Testing process is a part of application and you can write any tests inside of tests folder using Jasmine.
Karma is all configured to run tests.

too run tests. do ## karma start

## Running Application flow
  - bower install
  - npm install	
  - npm start
  - karma start (for tests)
