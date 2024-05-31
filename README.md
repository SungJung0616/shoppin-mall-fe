# Project Overview

## User Features

1. **Sign Up**
2. **Login**
   - Email login
   - External account login
3. **Shopping Mall Landing Page**
   - Search functionality
   - Logout button
   - Shopping bag button
   - My orders button
4. **Product Detail Page**
   - Add product to cart
   - Select product size
5. **Cart Page**
   - Display selected items
   - Modify item quantity
   - Delete items
   - Proceed to checkout
6. **Checkout Page**
   - Prevent checkout if stock is insufficient
7. **Order Completion Page**
   - Display order number
   - View order details and status

## Admin Page

1. **Product List Page**
   - Add new products
   - Search products
   - Edit and delete product information
   - Pagination
2. **Order Page**
   - View order details
   - Update order status
   - Search by order number

## Database Schema

### User Collection

- `email`: String
- `password`: String
- `name`: String
- `level`: Integer

### Product Collection

- `sku`: String
- `name`: String
- `image`: String
- `price`: Float
- `description`: Text
- `stock`: Integer
- `category`: String
- `isDeleted`: Boolean

### Cart Collection

- `userId`: Integer
- `items`: Array of Objects `{productId, size, qty}`

### Order Collection

- `shipTo`: String
- `contact`: String
- `userId`: Integer
- `items`: Array of Objects `{productId, qty, size, price}`

### Order Item Collection

- `productId`: Integer
- `qty`: Integer
- `size`: String
- `price`: Float (changeable)

![Database Schema](public/image/image.png)

## Implementation Plan

### Set Up the Project Environment

- Initialize a new project using a framework (React for frontend, Node.js/Express for backend).
- Set up a database (MongoDB).
- Configure user authentication (using Passport.js for various login methods).

### Design Database Models

- Define the database schema using an ORM (Mongoose for MongoDB).

### Build the User Interface

- Create the landing page with search, login, and navigation functionalities.
- Implement the product detail page with size selection and add-to-cart functionality.
- Develop the cart page to display, modify, and delete items.
- Create the checkout process with stock verification.
- Design the order completion page with order details and status tracking.

### Admin Interface

- Build the product list page with add, search, edit, delete functionalities, and pagination.
- Create the order page for viewing and updating order details.

### Integration and Testing

- Integrate frontend and backend.
- Implement unit and integration tests to ensure all functionalities work as expected.

### Deployment

- Deploy the application to a hosting service (MongoDB Atlas, backend on AWS, frontend on Netlify).
