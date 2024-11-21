# User Notification API

**Deployment Link:** [https://zigmentai.vercel.app/](https://zigmentai.vercel.app/)

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

---

## Description

This is a **User Notification API** built with [NestJS](https://github.com/nestjs/nest). It allows you to manage user preferences and send notifications via different channels like email, SMS, and push notifications.

## Base URL

The base URL for the API is: https://zigmentai.vercel.app/



---

## API Endpoints

### 1. **Create User Preferences** (`POST /api/preferences`)

**Description:** Create or update user preferences.

**Endpoint:**

POST https://zigmentai.vercel.app/api/preferences

json

**Request Body:**

```json
{
  "userId": "user456",
  "email": "user456@example.com",
  "preferences": {
    "marketing": true,
    "newsletter": false,
    "updates": true,
    "frequency": "weekly",
    "channels": {
      "email": true,
      "sms": false,
      "push": true
    }
  },
  "timezone": "America/New_York"
}
Response:-
{
  "message": "User preferences created successfully"
}


2. Get User Preferences (GET /api/preferences/:userId)
Description: Retrieve the preferences of a user.

Endpoint:

ruby
Copy code
GET https://zigmentai.vercel.app/api/preferences/:userId
For example, to get preferences of user456:

ruby
Copy code
GET https://zigmentai.vercel.app/api/preferences/user456
Response:

json
Copy code
{
  "_id": {"$oid": "673ecb35f0bb96f1f66bc6c9"},
  "userId": "user456",
  "email": "user456@example.com",
  "preferences": {
    "marketing": true,
    "newsletter": false,
    "updates": true,
    "frequency": "weekly",
    "channels": {
      "email": true,
      "sms": false,
      "push": true
    }
  },
  "timezone": "America/New_York",
  "createdAt": {"$date": {"$numberLong": "1732168501571"}},
  "updatedAt": {"$date": {"$numberLong": "1732168501571"}},
  "__v": {"$numberInt": "0"}
}
3. Update User Preferences (PATCH /api/preferences/:userId)
Description: Update the preferences of a specific user.

Endpoint:

ruby
Copy code
PATCH https://zigmentai.vercel.app/api/preferences/:userId
For example, to update preferences for user456:

ruby
Copy code
PATCH https://zigmentai.vercel.app/api/preferences/user456
Request Body:

json
Copy code
{
  "preferences": {
    "marketing": false,
    "newsletter": true,
    "updates": false,
    "frequency": "monthly",
    "channels": {
      "email": false,
      "sms": true,
      "push": false
    }
  }
}
Response:

json
Copy code
{
  "message": "User preferences updated successfully"
}
4. Delete User Preferences (DELETE /api/preferences/:userId)
Description: Delete the preferences for a user.

Endpoint:

ruby
Copy code
DELETE https://zigmentai.vercel.app/api/preferences/:userId
For example, to delete preferences for user456:

ruby
Copy code
DELETE https://zigmentai.vercel.app/api/preferences/user456
Response:

json
Copy code
{
  "message": "User preferences deleted successfully"
}
5. Send Notification (POST /api/notifications/send)
Description: Send a notification to a user.

Endpoint:

perl
Copy code
POST https://zigmentai.vercel.app/api/notifications/send
Request Body:

json
Copy code
{
  "userId": "user456",
  "type": "marketing",
  "channel": "email",
  "content": {
    "subject": "Exclusive Offer Just for You!",
    "body": "Don't miss out on our special offers tailored to your interests. Check them out now!"
  }
}
Response:

json
Copy code
{
  "status": "sent",
  "sentAt": "2024-11-21T12:00:00Z",
  "type": "marketing",
  "channel": "email",
  "metadata": {
    "subject": "Exclusive Offer Just for You!",
    "body": "Don't miss out on our special offers tailored to your interests. Check them out now!"
  }
}
6. Get Notification Logs for User (GET /api/notifications/:userId/logs)
Description: Retrieve the notification logs for a specific user.

Endpoint:

ruby
Copy code
GET https://zigmentai.vercel.app/api/notifications/:userId/logs
For example, to get logs for user456:

bash
Copy code
GET https://zigmentai.vercel.app/api/notifications/user456/logs
Response:

json
Copy code
{
  "logs": [
    {
      "type": "marketing",
      "channel": "email",
      "status": "sent",
      "sentAt": "2024-11-21T12:00:00Z",
      "metadata": {
        "subject": "Exclusive Offer Just for You!",
        "body": "Don't miss out on our special offers tailored to your interests. Check them out now!"
      }
    }
  ]
}
7. Get Notification Stats (GET /api/notifications/stats)
Description: Get statistics on notifications sent, failed, and pending.

Endpoint:

ruby
Copy code
GET https://zigmentai.vercel.app/api/notifications/stats
Response:

json
Copy code
{
  "stats": {
    "sent": 10,
    "failed": 2,
    "pending": 3
  }
}
User Guide
Authentication
The API does not require authentication at this time. You can interact with it directly via the endpoints mentioned above.

Handling Responses
Success Responses: When an action is successful, the API will typically return a JSON object containing a success message or the requested data.

Error Responses: If there is an issue with the request (e.g., invalid data, missing parameters), the API will return a 4xx or 5xx status code with an error message.

Example Usage
Here is an example of how you can interact with the API using Postman or curl:

Creating a User Preference:
bash
Copy code
curl -X POST https://zigmentai.vercel.app/api/preferences -H "Content-Type: application/json" -d '{
  "userId": "user123",
  "email": "user123@example.com",
  "preferences": {
    "marketing": true,
    "newsletter": false,
    "updates": true,
    "frequency": "weekly",
    "channels": {
      "email": true,
      "sms": false,
      "push": true
    }
  },
  "timezone": "America/New_York"
}'
