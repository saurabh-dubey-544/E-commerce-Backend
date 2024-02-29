1. Initialize the project. `npm init`
2. Create 3 folders `Routers`,`Controllers`,`Models`. This will be the structure of the project.

Now, I want some dependencies to be installed
- Mongoose (for the Database) -- `npm install mongoose`
- express -- `npm install express`
- JWT (json web tokens) [to create access tokens] -- `npm install jsonwebtoken`
- bcrypt js (to encrypt our password before storing it in Database) -- `npm install bcryptjs`


I'll work on things in this order:
`Controllers` -----> `Models` -----> `Routes`

**Models**
- `user.model.js` : In this, I will define the user connection where I'll define the user Schema.

<hr>
Create a file  `server.js` and this will be the starting point of the app.

- Create a folder `Configs` and inside this a file `server.config.js` in which I'll write the configurations of the server.
- Similarly create file `db.config.js` to store address and name of the database.
- We created this so that we can change them in future instead of hard coding the values like PORT Number , address of Database , etc.
- We will only have to change once and the changes will get applied to each place where we have used them.