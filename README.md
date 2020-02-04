Africa Connected Backend Documentation

https://documenter.getpostman.com/view/9228779/SWTEdc4n?version=latest

## NOTE: must register and login with department (either 'buyer' or 'seller')

POST

https://african-market-lambda.herokuapp.com/auth/register

{
"username" : "John",
"password" : "password",
"department" : "seller"
}

---

POST

https://african-market-lambda.herokuapp.com/auth/register

{
"username" : "John",
"password" : "password",
"department" : "seller"
}

---

POST
https://african-market-lambda.herokuapp.com/auth/login

{
"username" : "John",
"password" : "password",
"department" : "seller"
}

---

GET

https://african-market-lambda.herokuapp.com/users/

## Return a list of USERS.

GET
https://african-market-lambda.herokuapp.com/users/:id

## Returns a single USER

GET

https://african-market-lambda.herokuapp.com/users/:id/items

Returns an individual USER's ITEMS

---

DEL

https://african-market-lambda.herokuapp.com/users/:id

Delete a single USER

---

GET

https://african-market-lambda.herokuapp.com/items/

Get a List of all ITEMS

---

GET

https://african-market-lambda.herokuapp.com/items/:id

Get a single ITEM

---

POST https://african-market-lambda.herokuapp.com/items/additem

Post a single ITEM

{
"name": "Shoes",
"description": "Running Shoes",
"price": "456",
"location": "Congo",
"category": "Clothing",
"URL": "https://fake.url",
"user_id": 5
}

---

PUT

https://african-market-lambda.herokuapp.com/items/:id

Update a single ITEM

{
"name": "Shoes - Updated",
"description": "Running SHoes Updated",
"price": "45667",
"location": "Sauti",
"category": "Clothing",
"URL": "https://fake-update",
"user_id": 5
}

---

DEL

https://african-market-lambda.herokuapp.com/items/:id

Delete a single ITEM

---

GET

https://african-market-lambda.herokuapp.com/items/category/:category

Get a list of items by CATEGORY (e.g. Food, Clothing)

---
