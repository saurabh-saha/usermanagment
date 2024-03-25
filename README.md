# User Management System

A simple user management system capable of registering, authenticating, and controlling customers.

## Functionalities

### Register User
Allows registering and saving a user into the collection.

### Update User
Enables updating a user with a specified username.

### Delete User
Allows deleting a user with a specified username.

### Get Users
Retrieves all users from the collection.

### Authenticate
Authenticates a user with a username and password.

## How to Use

1. **Clone the Repository:**
   ```bash
   git clone <repository_url>
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Application:**
   ```bash
   npm start
   ```

4. **Endpoints:**
   - **Register User:** `POST /api/user/register`
   - **Update User:** `PUT /api/contact/:username`
   - **Delete User:** `DELETE /api/contact/:username`
   - **Get Users:** `GET /contact`
   - **Authenticate:** `POST /api/user/login`

## Technologies Used

- Node.js
- Express.js
- MongoDB (or any other database)
- bcryptjs (for password hashing)
- JSON Web Tokens (JWT) (for authentication)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
