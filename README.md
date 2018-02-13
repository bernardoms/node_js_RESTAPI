# node_js_RESTAPI
A simple node_js REST API with a mongodb deployed on mlab.
For now, you can make 4 REST calls.
POST: 

Creates new user:
POST http://localhost:3000/users
{
  name:xpto
  email:xpto@xpto.com
  password:xpto123
}
GET:

Get all users:
GET localhost:3000/users/

get a user by name and password:

GET localhost:3000/users/name/password

get a user by id
GET localhost:3000/users/id
