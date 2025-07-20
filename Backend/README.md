# User Routes

## POST /users/register

Registers a new user. Requires `fullname.firstname` (min 3 chars), optional `fullname.lastname`, valid `email`, and `password` (min 6 chars).  
Returns a JWT token and user details on success.  
Validation errors or duplicate email return 400.

## POST /users/login

Authenticates a user. Requires valid `email` and `password`.  
Returns a JWT token and user details on success.  
Invalid credentials return 401.

## GET /users/profile

Returns the authenticated user's profile.  
Requires a valid JWT token in the request (via cookie or `Authorization` header).  
Returns user details on success.  
Unauthorized requests return 401.

## GET /users/logout

Logs out the user by blacklisting the JWT token.  
Requires a valid JWT token.  
Returns a success message on logout.

# User Registration Endpoint

## POST /users/register

### Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body
The request body should be a JSON object with the following properties:
- `fullname`: An object containing:
  - `firstname`: The user's first name (minimum 3 characters, required)
  - `lastname`: The user's last name (minimum 3 characters, optional)
- `email`: The user's email address (must be a valid email, required)
- `password`: The user's password (minimum 6 characters, required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: `201 Created`
- **Response Body**: A JSON object containing the authentication token and user details.
  ```json
  {
    "token": "your-auth-token",
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing the validation errors.
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### User Already Exists
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object indicating that the user already exists.
  ```json
  {
    "message": "User already exist"
  }
  ```

# User Login Endpoint

## POST /users/login

### Description
Authenticates an existing user using email and password.

### Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: `200 OK`
- **Response Body**: JWT token and user details.
  ```json
  {
    "token": "your-auth-token",
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Invalid Credentials
- **Status Code**: `401 Unauthorized`
- **Response Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

# Get User Profile Endpoint

## GET /users/profile

### Description
Returns the authenticated user's profile. Requires JWT token.

### Responses

#### Success
- **Status Code**: `200 OK`
- **Response Body**: User details.
  ```json
  {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

#### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

# Logout Endpoint

## GET /users/logout

### Description
Logs out the user by blacklisting the JWT token.

### Responses

#### Success
- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "message": "Logged out"
  }
  ```

#### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```
