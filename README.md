Bike Service Booking Application :

This repository contains the source code for a Bike Service Booking web application. 
The application allows customers to book various bike services, and service station owners can manage those bookings. 
The app is built using React.js HTML and Css for the frontend, Node.js for the backend, and MongoDB as the database.

Features :

* Customers can book services such as general service , oil changes, and water washes.
* Owners can list services, manage bookings, and mark them as ready for delivery or completed.
* Email notifications are sent to both customers and owners regarding booking status updates.
* Authentication for customers to log in using email ID.
  
Tech Stack :

Frontend: React.js, HTML, CSS
Backend: Node.js, Express.js
Database: MongoDB
Email Notifications: Nodemailer

Prerequisites :

Node.js 
MongoDB (Local) or MongoDB Atlas (Cloud instance)
Git installed on your machine
A mail service (Eg: Gmail) for sending email notifications using Nodemailer

Before running the application, ensure you create a .env file in the root directory of the backend with the following environment variables:

PORT=4000
MONGODB_URI=mongodb://localhost:27017/bikeServiceDB

You can also modify MONGODB_URI to use a MongoDB Atlas URI for cloud deployment.

Installation Instructions :
1. Clone the Repository
git clone https://github.com/LogananthanD/Bike-Service.git
cd Bike-Service

2. Backend Setup:
Navigate to the backend directory
cd ./backend

Install the required dependencies:
npm install

Run the backend server:
npm start
The backend API will be available at http://localhost:5000.

3. Frontend Setup
Navigate to the frontend directory:
cd ./frontend

Install the required dependencies:
npm install

Run the frontend development server:
npm start
The frontend will be available at http://localhost:3000.

Running the Application
Once both the frontend and backend servers are running, you can access the application by navigating to http://localhost:3000 in your browser.

API Endpoints
Here is a list of the main API endpoints used in the application:

POST /api/customers/register - Register a new customer
POST /api/customers/login - Login a customer
POST /api/bookings/create - Create a new booking
GET /api/bookings - Get all bookings (for owners)
PUT /api/bookings/:id/status - Update booking status (ready for delivery, completed)

Sample Data :

1) Name : Pasu
   Email : pasupathiuthamasamy@gmail.com
   password : 123

2) Name : veerandraprasath
   Email : veerandraprasath@gmail.com
   password : 123

3) Name : logxxh
   Email : loga.nanthan.d33@gmail.com
   password : 123

   
If you have any questions or feedback, feel free to contact me via email : loga.nanthan.d@gmail.com 
