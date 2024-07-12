## Coffee Shop Front End

### Header

- conditionally renders log in and log out buttons based on page and isLoggedIn state
- conditionally renders cart counter based on cartLength state

### Home/Product Display

- Conditionally renders users name in greeting
- display created products from MongoDB through backend express server

### UserAuth page

- can login using existing user credentials, or go to SignUp page
- sets token state to returned jwt token confirming login, and sets isLoggedIn state to true

### SignUp page

- can sign up, adding new user to MongoDB through backend express server
- instantly logs in and redirects to Home page upon sign up

### CartDisplay

- modal displaying cartItems in real time, toggles with cart and close buttons
- conditionally renders "checkout" or "log in to checkout" button based on isLoggedIn state
- renders cart total
- renders 'Thank you for shopping with us' upon successful 'transaction'

### CartItem

- card for each cart item, features buttons to add or subtract from item quantity,
  updating cartItems and total.

