# JSON-based API for a fictional cars dealership website
-----------------------------------------------------------------------------------------
## - Technologies: 
      - Node.js
      - Express
      - MongoDB
-----------------------------------------------------------------------------------------   
## - API EndPoints

 ### users resource:
      - GET       /users            - Fetch all users
      - GET       /users/:id        - Fetch specific user by ID
      - GET       /users/:id/cars   - Fetch all sold cars by specific user based on user ID
      - POST      /users            - Create a new user
      - POST      /users/:id/cars   - Create a new car for specific user, given user ID
      - DELETE    /users/:id        - Delete specific user, given user ID
      - PATCH     /users/:id        - Update specific user, (particular fields
      
 ### cars resource:
       - GET       /cars            - Fetch all cars
       - GET       /cars/:id        - Fetch specific car by ID
       - POST      /cars            - Create a new car
       - DELETE    /cars/:id        - Delete specific car, given car ID
       - PATCH     /cars/:id        - Update specific car, (particular fields)
 -----------------------------------------------------------------------------------------
## - Database Models
      - Users model
            - firstName
            - lastName
            - email
            - SoldCars[]
      - Cars model
            - seller
            - model
            - year
            - make
