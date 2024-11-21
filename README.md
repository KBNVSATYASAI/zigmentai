
# User Notification API

**Deployment Link:** [https://zigmentai.vercel.app/](https://zigmentai.vercel.app/)

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

---

## Description

This is a **User Notification API** built with [NestJS](https://github.com/nestjs/nest). It allows you to manage user preferences and send notifications via different channels like email, SMS, and push notifications.

## Base URL

The base URL for the API is:

```
https://zigmentai.vercel.app/
```

---

## API Endpoints

### 1. **Create User Preferences** (`POST /api/preferences`)

**Description:** Create or update user preferences.

**Endpoint:**

```
POST https://zigmentai.vercel.app/api/preferences
```

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
```

**Response:**

```json
{
  "message": "User preferences created successfully"
}
```

---

### 2. **Get User Preferences** (`GET /api/preferences/:userId`)

**Description:** Retrieve the preferences of a user.

**Endpoint:**

```
GET https://zigmentai.vercel.app/api/preferences/:userId
```

For example, to get preferences of `user456`:

```
GET https://zigmentai.vercel.app/api/preferences/user456
```

**Response:**

```json
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
```

---

### 3. **Update User Preferences** (`PATCH /api/preferences/:userId`)

**Description:** Update the preferences of a specific user.

**Endpoint:**

```
PATCH https://zigmentai.vercel.app/api/preferences/:userId
```

For example, to update preferences for `user456`:

```
PATCH https://zigmentai.vercel.app/api/preferences/user456
```

**Request Body:**

```json
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
```

**Response:**

```json
{
  "message": "User preferences updated successfully"
}
```

---

### 4. **Delete User Preferences** (`DELETE /api/preferences/:userId`)

**Description:** Delete the preferences for a user.

**Endpoint:**

```
DELETE https://zigmentai.vercel.app/api/preferences/:userId
```

For example, to delete preferences for `user456`:

```
DELETE https://zigmentai.vercel.app/api/preferences/user456
```

**Response:**

```json
{
  "message": "User preferences deleted successfully"
}
```

---

### 5. **Send Notification** (`POST /api/notifications/send`)

**Description:** Send a notification to a user.

**Endpoint:**

```
POST https://zigmentai.vercel.app/api/notifications/send
```

**Request Body:**

```json
{
  "userId": "user456",
  "type": "marketing",
  "channel": "email",
  "content": {
    "subject": "Exclusive Offer Just for You!",
    "body": "Don't miss out on our special offers tailored to your interests. Check them out now!"
  }
}
```

**Response:**

```json
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
```

---

### 6. **Get Notification Logs for User** (`GET /api/notifications/:userId/logs`)

**Description:** Retrieve the notification logs for a specific user.

**Endpoint:**

```
GET https://zigmentai.vercel.app/api/notifications/:userId/logs
```

For example, to get logs for `user456`:

```
GET https://zigmentai.vercel.app/api/notifications/user456/logs
```

**Response:**

```json
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
```

---

### 7. **Get Notification Stats** (`GET /api/notifications/stats`)

**Description:** Get statistics on notifications sent, failed, and pending.

**Endpoint:**

```
GET https://zigmentai.vercel.app/api/notifications/stats
```

**Response:**

```json
{
  "stats": {
    "sent": 10,
    "failed": 2,
    "pending": 3
  }
}
```

---

## User Guide

### Authentication

The API does not require authentication at this time. You can interact with it directly via the endpoints mentioned above.

### Handling Responses

- **Success Responses**: When an action is successful, the API will typically return a JSON object containing a success message or the requested data.
  
- **Error Responses**: If there is an issue with the request (e.g., invalid data, missing parameters), the API will return a 4xx or 5xx status code with an error message.

---

## Example Usage

### Creating a User Preference

Using `curl`:

```bash
curl -X POST https://zigmentai.vercel.app/api/preferences   -H "Content-Type: application/json"   -d '{
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
```

This will create the user preferences and return a success message.

---

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/nestjs/nest/blob/master/LICENSE) file for details.
