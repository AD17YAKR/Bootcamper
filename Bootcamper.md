---
title: Bootcamper v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.17"

---

# Bootcamper

> v1.0.0

Base URLs:

* <a href="https://dev.your-api-server.com">Develop Env: https://dev.your-api-server.com</a>

# Default

## GET Welcome

GET /

> Body Parameters

```json
{}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

# Authentication

## GET Log Out Current User

GET /api/v1/auth/logout

Delete current User cookies

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## GET Get Current Logged in User Details

GET /api/v1/auth/me

By inserting the authorization token it return the current user details

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## PUT Reset Password by reset token

PUT /api/v1/auth/resetpassword/a6b15c48587e902194e698ed9d2f4275bf84a68b

Reset password token received on email conating hashed id

> Body Parameters

```json
{
  "password": "1234567"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» password|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## POST Forgot Password Email Request

POST /api/v1/auth/forgotpassword

Request Email when forgot password

> Body Parameters

```json
{
  "email": "Ad17yakr@ad17yakr.com"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» email|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## POST Login User

POST /api/v1/auth/login

Login user user email and login and get JWT token

> Body Parameters

```json
{
  "email": "Aditya@Ad17yakr.com",
  "password": "secret"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|email|query|string| yes |none|
|body|body|object| no |none|
|» email|body|string| yes |none|
|» password|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## PUT Update Current User Details

PUT /api/v1/auth/updateddetails

update logged in user details

> Body Parameters

```json
{
  "name": "Aditya ingh",
  "email": "Ad17yakr@ad17yakr.com"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» email|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## PUT Update Password 

PUT /api/v1/auth/updatepassword

Update Password by entering current and new password

> Body Parameters

```json
{
  "currentPassword": "secret",
  "newPassword": "12345678"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» currentPassword|body|string| yes |none|
|» newPassword|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## POST Register User

POST /api/v1/auth/register

Register New User Based on

- name
- email
- role
    

and it return the JWT token

> Body Parameters

```json
{
  "name": "Aditya",
  "email": "Aditya@Ad17yakr.com",
  "role": "admin",
  "password": "secret"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» email|body|string| yes |none|
|» role|body|string| yes |none|
|» password|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

# Bootcamps

## GET Get All Bootcamps

GET /api/v1/bootcamps

A get request to get all bootcamp in the database with filtering based on variables.

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## POST Create New Bootcamp

POST /api/v1/bootcamps

A Post Route to create new Boootcamps which can either be published by a publisher or a user an input example is given below

\`

``` json
{
    "name": "ModernTech Bootcamp",
    "description": "ModernTech has one goal, and that is to make you a rockstar developer and/or designer with a six figure salary. We teach both development and UI/UX",
    "website": "https://moderntech.com",
    "phone": "(222) 222-2222",
    "email": "enroll@moderntech.com",
    "address": "220 Pawtucket St, Lowell, MA 01854",
    "careers": [
        "Web Development",
        "UI/UX",
        "Mobile Development"
    ],
    "housing": false,
    "jobAssistance": true,
    "jobGuarantee": false,
    "acceptGi": true
}

```

\`

> Body Parameters

```json
{
  "name": "ModernTech Bootcamp",
  "description": "ModernTech has one goal, and that is to make you a rockstar developer and/or designer with a six figure salary. We teach both development and UI/UX",
  "website": "https://moderntech.com",
  "phone": "(222) 222-2222",
  "email": "enroll@moderntech.com",
  "address": "220 Pawtucket St, Lowell, MA 01854",
  "careers": [
    "Web Development",
    "UI/UX",
    "Mobile Development"
  ],
  "housing": false,
  "jobAssistance": true,
  "jobGuarantee": false,
  "acceptGi": true
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» description|body|string| yes |none|
|» website|body|string| yes |none|
|» phone|body|string| yes |none|
|» email|body|string| yes |none|
|» address|body|string| yes |none|
|» careers|body|[string]| yes |none|
|» housing|body|boolean| yes |none|
|» jobAssistance|body|boolean| yes |none|
|» jobGuarantee|body|boolean| yes |none|
|» acceptGi|body|boolean| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## DELETE Delete Bootcamp by id

DELETE /api/v1/bootcamps/63c3d490665c93845fe16761

Delete request to remove bootcamp by id.

Can only be performed bt the Owner/Creater of the boootcamp

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## GET Get Bootcamp by id

GET /api/v1/bootcamps/63c3d514a091492738e5cbd8

A get request to get bootcamp by its id

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## PUT Update Bootcamp by id

PUT /api/v1/bootcamps/63c3d514a091492738e5cbd8

A put request to update fileds of the bootcamp present in the db.

The fields can only be updated by the creator of the boootcamp.

An example of JSON input is

\`

``` json
{
    "name": "ModernTech Bootcamp",
}

```

\`

> Body Parameters

```json
{
  "name": "Not ModernTech Bootcamp"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## GET Get All Bootcamps by zipcode

GET /api/v1/bootcamps/radius/02881/100

A public route to Get bootcamp based on location search.

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## PUT Update Bootcamp Photo by id

PUT /api/v1/bootcamps/5d725a1b7b292f5f8ceff788/photo

An Put route to update Bootcamp photoby id

> Body Parameters

```yaml
file: string

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» file|body|string(binary)| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

# Courses

## GET Get all courses

GET /api/v1/courses

Get request to fetch all Courses in Bootcamp.

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|select|query|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## GET Get course by id

GET /api/v1/courses/5d725c84c4ded7bcb480eaa0

An public Get route to fetch course detail using courseId.

This support searching based on different variable in the params.

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## POST Create New Course

POST /api/v1/bootcamps/63ebdd95972c18d6ce59cc8d/courses

A Post route to create new Course which can only be created by the owner of the bootcamp

An Example of the Input is

``` json
{
    "title": "Full Stack Web Development + Mobile",
    "description": "In this course you will learn full stack web development, first learning all about the frontend with HTML/CSS/JS/Vue and then the backend with Node.js/Express/MongoDB",
    "weeks": "12",
    "tuition": 10000,
    "minimumSkill": "intermediate",
    "scholarshipAvailable": false
}

```

> Body Parameters

```json
{
  "title": "Full Stack Web Development + Mobile",
  "description": "In this course you will learn full stack web development, first learning all about the frontend with HTML/CSS/JS/Vue and then the backend with Node.js/Express/MongoDB",
  "weeks": "12",
  "tuition": 10000,
  "minimumSkill": "intermediate",
  "scholarshipAvailable": false
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» title|body|string| yes |none|
|» description|body|string| yes |none|
|» weeks|body|string| yes |none|
|» tuition|body|integer| yes |none|
|» minimumSkill|body|string| yes |none|
|» scholarshipAvailable|body|boolean| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## PUT Update Courses by id

PUT /api/v1/courses/63ebdedaf1888727e4d5a997

An Put request to update Course by by courseId.

The Route can only be updated by the owner of the bootcamp.

``` json
{
    "tuition": 13000
}

```

> Body Parameters

```json
{
  "tuition": 13000
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» tuition|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## DELETE Delete Course by id

DELETE /api/v1/courses/5d725cb9c4ded7bcb480eaa1

A Delete request Route to delete the course in the bootcamp by courseId

> Body Parameters

```json
{}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

# Users

## GET Get All Users

GET /api/v1/auth/users

Get all users in the db

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## PUT Update User by id

PUT /api/v1/auth/users/63ed5535af80c2518009cb79

Update a certain user by its id

> Body Parameters

```json
{
  "name": "Manas"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## GET Get Single User by id

GET /api/v1/auth/users/63ed5535af80c2518009cb79

Get user by id

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## DELETE Delete User by id

DELETE /api/v1/auth/users/63ed5535af80c2518009cb79

Delete user from db with help by id

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## POST Create User

POST /api/v1/auth/users/

Create New user with admin account

> Body Parameters

```json
{
  "name": "Manas Swain",
  "email": "ManasSwain@rkmgec.com",
  "role": "admin",
  "password": "87654321"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» email|body|string| yes |none|
|» role|body|string| yes |none|
|» password|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

# Reviews

## GET Get All Reviews

GET /api/v1/reviews

A public route to Get all reviews in different Bootcamps

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## GET Get Reviews For Bootcamp

GET /api/v1/bootcamps/5d713a66ec8f2b88b8f830b8/reviews

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## POST Add Review in bootcamp

POST /api/v1/bootcamps/5d713a66ec8f2b88b8f830b8/reviews

A private route to add review to a bootcamp

> Body Parameters

```json
{
  "title": "Nice Bootcamp",
  "text": "I learned new skills",
  "rating": 8.1
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» title|body|string| yes |none|
|» text|body|string| yes |none|
|» rating|body|number| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## DELETE Delete Review by id

DELETE /api/v1/reviews/5d7a514b5d2c12c7449be022

A private route to Delete a review by its id

> Body Parameters

```json
{
  "rating": 7
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» rating|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## GET Get Single Review by id

GET /api/v1/reviews/5d7a514b5d2c12c7449be022

A public route to Get a review by its id

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

## PUT Update Review by id

PUT /api/v1/reviews/5d7a514b5d2c12c7449be022

A private route to update review.

Route only accesible to admin and the user

> Body Parameters

```json
{
  "rating": 7
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» rating|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

# Data Schema

