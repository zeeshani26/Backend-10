# Backend Api End Points

### Backend link()

### For Registering. Make a POST request with the following API.

/api/register
The body should include the following details in the specific data type:
name: String,
email: String,
password: String

### For Login. Make a POST request with the following API.

/api/login

### For Getting all the flights. Make a GET request with the following API.

/api/flights

### For Getting a Single Flight Detail based on id. Pass the id as a paramater and make a GET request with the following API.

/api/flights/:id

### For adding new flights to the system. Pass the id as a paramater of the flight you want to update and make a POST request with the following API.

/api/flights

The body should include the following details in the specific data type:
airline: String,
flightNo: String,
departure: String,
arrival: String,
departureTime: Date,
arrivalTime: Date,
seats: Number,
price: Number

### For updating a flight in the system. Make a PATCH request with the following API.

/api/flights/:id

### For deleting a flight in the system. Pass the id as a paramater of the flight you want to delete and make a DELETE request with the following API.

/api/flights/:id
