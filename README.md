# CRUDS

This is a simple CRUDS (Create, Read, Update, Delete, Send) application built using the MERN (MongoDB, Express.js, React, Node.js) stack and Next.js.

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
git clone https://github.com/mananc12/cruds.git
cd cruds
```

2. Install dependencies:

```bash
cd crudBack
npm install

cd crudFront
npm install
```

3. Set up environment variables:

Create a `.env` file in the `backend` directory with the following:

```plaintext

URL=your_mongo_db_connection_string
PORT=your_port
EMAIL=sender_email
TO=recipient_email_address
PASSWORD=sender_password_for_other_apps_to_allow_sending_email    //It looks like this 'qyyqjxhokzygqnmh'
SUBJECT=write_subject_of_email

```

4. Run the application:

```bash
# In the backend directory
node app.js

# In the frontend directory
npm run dev
```

5. Open your browser and use the CRUDS app.

## Video Demo

Watch a demo of the CRUDS app in action: [Link to Demo Video](https://www.awesomescreenshot.com/video/25252584?key=a93ee96b4a2eed2e2bd9d3e576f54b3b)

## Contributors

- Manan Chauhan (@mananc12)
