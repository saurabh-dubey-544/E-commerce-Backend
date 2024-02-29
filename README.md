## E-Commerce
There are 2 parties:
1. `Customer`
2. `Admin`

The application should be able to Authenticate and Authorize users.

#### What is Authentication and Authorization?
1. **Authentication** : Who am I? It means authenticating a person. Ex: Either Customer or Admin(Seller)
2. **Authorization** : What can I do? It means what all things that I can do. Ex: Customer can purchase, pay, search. Admin can add the products and sell.

#### Authentication
- Earlier, we used to have a `username` and `password` based authentication system.
- Each time we have to do something, we have to use username and password.
- The problem is that our username-password becomes overly exposed.

Therefore, we now use **Token based authentication**
- In this, we have to register first.
- When we login using username and password, a new token is generated called **`Access Token`**.
- This token has a time to live(TTL) which we can set, it means the time after which the token gets expired and we have to login again.
- We use this access token to do any other activity.