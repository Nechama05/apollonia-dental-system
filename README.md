# Apollonia Dental Management System 🦷

A Full-Stack web application for managing dental clinic resources, including departments and employees.
This project demonstrates a complete **Microservices Architecture** using **Node.js**, **MongoDB**, and **Docker**.

## 🚀 Key Features
* **CRUD Operations:** Full management (Create, Read, Update, Delete) of employees and departments.
* **Complex Relationships:** Implemented MongoDB references (`ObjectId`) to link employees to specific departments dynamically.
* **RESTful API:** Robust backend API built with Express.js.
* **Dockerized Environment:** Fully containerized application and database using Docker Compose for seamless deployment.
* **Dynamic UI:** Responsive frontend built with Vanilla JavaScript interacting with the backend via fetch API.

## 🛠 Tech Stack
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose (ODM)
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **DevOps:** Docker, Docker Compose

## ⚙️ How to Run
Prerequisites: Make sure **Docker Desktop** is installed and running.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Nechama05/apollonia-dental-system.git]
    cd apollonia-dental-system
    ```

2.  **Build and Run with Docker:**
    ```bash
    docker-compose up --build
    ```

3.  **Access the App:**
    Open your browser and navigate to: `http://localhost:3000`

## 📂 Project Structure
* `/models` - Mongoose schemas (Employee, Department).
* `/routes` - API route definitions and controllers.
* `/public` - Static frontend files (HTML, CSS, JS client logic).
* `server.js` - Application entry point and database connection logic.
* `docker-compose.yml` - Container orchestration configuration.

---
*Developed by Nechama Soraski*
