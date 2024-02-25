# CRUD App

This is a simple CRUD (Create, Read, Update, Delete) application built using the MERN (MongoDB, Express.js, React, Node.js) stack.

## Features

- Add new user data
- View a list of users
- Delete users
- Send selected users' data via email

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- Axios
- Nodemailer
- Next.js (for the frontend)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/crud-app.git
cd crud-app
```

2. Install dependencies:

```bash
cd backend
npm install

cd frontend
npm install
```

3. Set up environment variables:

Create a `.env` file in the `backend` directory with the following:

```plaintext
DB_CONNECTION=your_mongo_db_connection_string
EMAIL=your_email_for_nodemailer
PASSWORD=your_email_password
TO=recipient_email_address
SUBJECT=your_email_subject
```

4. Run the application:

```bash
# In the backend directory
node app.js

# In the frontend directory
npm run dev
```

5. Open your browser and use the CRUD app.

## Video Demo

Watch a demo of the CRUD app in action: [Link to Demo Video](https://www.awesomescreenshot.com/video/25252584?key=a93ee96b4a2eed2e2bd9d3e576f54b3b)

## Contributors

- Manan Chauhan (@mananc12)
