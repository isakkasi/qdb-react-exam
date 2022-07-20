# qdb-react-exam
Question database with controls for the react-js exam

<!-- From here it is automatic from Create React App -->

# General

This application is designed to service an EASA Part 147 Aircraft Maintenance Training Centers during exam paper preparations.

# Functionalities

## Authorization and Authentication
The user has access the to platform only after successful login. Guests may only see the Dashboard page, where only general information for the Application and database is available

## Building a question database
The main function of the app is to store the questions for the exams. The authorized user is able to add, edit and delete questions from the database. Option for "create similar question" is also available (all data from the selected question is loaded in the create form).

## Generating exams
The authorized user may generate an exam based on specific parameters i.e. which ATA chapters to be included, how many questions to be added for each ATA chapter, etc. After the exam is created, the user may download exam papers, blank answer sheets and master copy of correct answers. The details for each exam are stored in the database.

## Configuration
The authorized user may configure the data needed for the questions and the exams (add ATA chapters, create courses, etc.)

