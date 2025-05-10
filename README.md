# Product Management System

A full-stack Product Management System built with React (frontend) and Laravel (backend). It offers complete CRUD functionality for managing products, powered by seamless API integration between the frontend and backend.

## Features

**Create:** Add new products to the system.

**Read:** View all products with detailed information.

**Update:** Modify existing product details.

**Delete:** Remove products from the system.

## Tech Stack

**Frontend:** React + Vite

**Backend:** Laravel (PHP)

**Database:** MySQL (or other supported databases)

**API:** RESTful API for communication between frontend and backend

## Installation

### 1. Download

- #### Clone the repository:

    ```bash
    git clone https://github.com/hacker1649/rl-pro.git 
    ```

### 2. Set up the backend (Laravel)

- #### Navigate to the backend folder:

    ```bash
    cd backend
    ```

- #### Install dependencies:

    ```bash
    composer install
    ```

- #### Set up the .env file and configure your database:

    ```bash
    cp .env.example .env
    php artisan key:generate
    php artisan migrate
    ```

- #### Run the Laravel development server:

    ```bash
    php artisan serve
    ```

### 3. Set up the frontend (React)

- #### Navigate to the frontend folder:

    ```bash
    cd frontend
    ```

- #### Install dependencies:

    ```bash
    npm install
    ```

- #### Start the React development server:

    ```bash
    npm start
    ```

### 4. Connect Frontend and Backend

Ensure the frontend is correctly connected to the backend API. You might need to update API URLs in the React app based on the environment or local server.

## Usage

Once the frontend and backend are running, you can navigate to the frontend app in your browser and start managing products by adding, viewing, updating, and deleting products.

