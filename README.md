

# General

This application is designed to service an EASA Part 147 Aircraft Maintenance Training Centers during exam paper preparations.

It is also used as an end course project in SoftUni.

# Overview

The app is developed using React.

The backend is custom built Node.js API server using Express.

The database is using MongoDB.

# Functionalities
## Authorization and Authentication

The application is accessible for all users. Most of the functionalities are available only for registered users.

- Unregistered users may access only the static pages (Tutorial, About), the Login and Register forms, the Dashboard with general database statistics.

- Registered users may access the questions and configuration pages. All registered users has roles assigned to them, which allow them to use different functionalities:

    - **User** - may only access the information without amending it, the question correct answers are hidden, may add comments for the questions.

    - **Examiner** - may create and edit questions, to configure the parameters. He is not allowed to delete questions and configuration items.

    - **Admin** - has full access to all functionalities, may change the roles for all users.

- every authorized user may change his own profile details without the role (unless he is administrator and from different panel)

## Pages

The app has three dynamic pages:

- **Dashboard** - gets information form the database for count of the users, questions and other information.

- **Questions** - all created questions are listed. For each question the are control buttons:

    - Details - shows the available data for the question, its usage (future implementation), user comments and history. Each user may add comments and only the author is allowed to delete his own comments.

    - Add Similar - allows the user to add a question with the form populated with the data from the selected question. The data may be modified and the question to be saved as new.

    - Edit - Edit the data of the question and save it in the database. Not all user roles are allowed to do it.

    - Delete - Only users with role Admin are allowed to delete questions from the database.

- **Configuration** - allows the users (as per the role) to add, remove, edit and create similar configuration items, which are used during question and exam creation (populate the dropdown list, will be used for searching and filtering). The buttons are visible when an item row is selected.

Static pages - the are used only for general static information only
(they are stateless)

## Data validation and error handling

Data validation is implemented for some of the forms to ensure that correct data will be provided to the server, or based on specific requirements of the business logic (questions shall end either with:

-  **.** 
-  **:** 
-  **?** 

Error handling is implemented at the places where fetch errors are expected

## External API

The app uses external API to provide the currency rate USD-BGN (visible on the top right of the screen). The server provider is RapidApi.

## Architecture

Public folder - static images (logo), reset.css

Components - the main pages has separate folders. Common components. Each component is stylized with module css.

Context - two contexts used - for the user and for the user role privileges

Hooks - one custom hook (useLocalStorage), common use of: useState and useEffect

Services - all requests to the server are through services, using common requester function

Utils - only one, parsing DB dates to readable format as per the requirements

# Deployment

The app is hosted on: [project-a.buzoo.org](http://project-a.buzoo.org)
The backend server is hosted on: api.buzoo.org
The database is at mongodb.com (Atlas)

# Development

When the app is run on a local machine and the database is not accessible, it is possible to seed the local database with sample data and four users with different roles:


| username  |  password 	| role  	    |   	|   	|
|---	    |---	        |---	        |---	|---	|
| user1	    | user1	        | User  	    |   	|   	|
| user2	    | user2	        | Invigilator  	|   	|   	|
| user3	    | user3	        | Examiner  	|   	|   	|
| user4	    | user4	        | Admin	        |   	|   	|

In case there are any user already, the Seed button is not displayed.








  



