# 🍴 풍부해진 쇼핑몰 SJ

![image]('./public/image/mainpage.png')
SJ 는 사용자가 다양한 옷을 간편하게 구매할 수 있는 웹사이트입니다.

### 개발 기간

- 전체 개발 기간: 2024-05-15 ~ 2024-06-16
- 백앤드 구현: 2022-06-03 ~ 2022-06-08
- 프론트앤드 및 기능 구현: 2022-06-06 ~ 2022-06-16

### 배포 주소

> <div>프론트 서버 : https://sj-shopping-mall.netlify.app/account/profile</div>
> 백엔드 서버 : http://sj-shopping-mall.ap-southeast-2.elasticbeanstalk.com/
> <br>

### 테스트 계정

- **Test ID**: admin@gmail.com
- **Test PW**: 123

## 프로젝트 소개

**SJ**는 쇼핑몰을 구현해보려고 클론코딩을 한 프로젝트 입니다.

- 원하는 상품을 고를수 있도록 메인페이지를 구성했습니다.
- 어드민 페이지를 통해서, 등록되어 있는 상품, 주문, 유저정보의 등록, 수정 및 삭제를 할수 있습니다.
- 원하는 상품의 사이즈를 선택해서 결제까지 할수 있도록 했습니다.
  <br>

## Developer

| <img src="https://avatars.githubusercontent.com/u/35758170?v=4" width="150" height="150"/> |
| :----------------------------------------------------------------------------------------: |
|              Sung U Jung<br/>[@SungJung0616](https://github.com/SungJung0616)              |

<br>

# Project Overview

## User Features

1. **Sign Up**
   ![image]('./public/image/signup.png')

2. **Login**

   - Email login
   - External account login
     ![image]('./public/image/login.png')

3. **Shopping Mall Landing Page**

   - Search functionality
   - Logout button
   - Shopping bag button
   - My orders button
     ![image]('./public/image/mainpage.png')

4. **Product Detail Page**

   - Add product to cart
   - Select product size
     ![image]('./public/image/productDetail.png')

5. **Cart Page**

   - Display selected items
   - Modify item quantity
   - Delete items
   - Proceed to checkout
     ![image]('./public/image/cartPage.png')

6. **Checkout Page**

   - Prevent checkout if stock is insufficient
     ![image]('./public/image/payment.png')

7. **Order Completion Page**
   - Display order number
   - View order details and status
     ![image]('./public/image/orderPage.png')

## Admin Page

1. **Product List Page**
   - Add new products
   - Search products
   - Edit and delete product information
   - Pagination

![image]('./public/image/adminProduct.png')

2. **Order Page**

   - View order details
   - Update order status
   - Search by order number
     ![image]('./public/image/adminOrder.png')

3. **User Page**
   - View user details
   - Update user level

![image]('./public/image/adminUser.png')

## ERD

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
