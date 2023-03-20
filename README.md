# Plan-A Headstarter
![logo](https://user-images.githubusercontent.com/91490989/219719756-3a0e7247-13c6-4b8c-8073-bd2e38ea3611.png)

## Contents
- [Description](#description)
- [Download](#download)
- [Install requirements](#install-requirements)
- [Connect to APIs](#connect-to-apis)
- [Start server](#start-server)
- [Host server to public URL using ngrok](#host-server-to-public-url-using-ngrok)
- [Add users to groups](#add-users-to-groups)
- [Demos](#demos)

## Description

__Plan-A Headstarter__ is a group scheduling web application with video calling and calendar sharing all in one place! Schedule events, join meetings, collaborate with your team, and plan ahead[starter] with this easy-to-use dashboard!

#### Created by: Omar Narine, Rafinal Haque, and Jake Enea

### Features:
- [Register and login with email](#login-sign-out-and-sign-up)
- [Calendar](#calendar) - schedule and delete events on the interactive group calendar
- [Video Meet](#video-calling) - video call with your group
- [About](#about) - learn more about the creators of Plan-A Headstarter
- [Help](#help) - submit a help form to the support team


## Download
```
git clone https://github.com/jakeenea51/Plan-A-Headstarter.git
```

## Install requirements
```
npm install
```

## Connect to APIs
To connect to your database, create a firebase project and insert the configuration information into the ```src/services/firebase.js``` file.

To connect to the video calling service, create an Agora project and insert the App ID and a temporary meeting token into the ```src/services/settings.js``` and ```src/pages/components/VideoRoom.js``` files.

## Start server
```
npm start
```

## Host server to public URL using ngrok
Create ngrok account and download ngrok zip folder ([here](https://ngrok.com/download)). Enter ngrok directory in terminal and run the following commands:
```
ngrok config add-authtoken <ngrok auth token>
ngrok http 3000
```

## Add users to groups
Adding users to groups is done manually through the firestore database. To add a user to a group create the following collections:
1. Name the first collection the same as the user's UID (found in the authentication section of your firebase project).
2. Add a new document to this collection titled groupInfo, and add two fields:
- group = {group1, group2, etc...}
- backColor = {hex color code}
3. If not already created, name the second collection the same as the group name assigned in the previous step.

## Demos
### Login, Sign out, and Sign up

https://user-images.githubusercontent.com/91490989/219790664-5f9e3137-890a-40b3-a83b-6c08c3499866.mp4



### Calendar

https://user-images.githubusercontent.com/91490989/219790952-1f9c76da-f260-4ab4-9ff9-bd21e4bb1546.mp4



### Video calling

https://user-images.githubusercontent.com/91490989/219791016-c652cda5-695a-4751-812c-e3e1c0525711.mp4



### About

https://user-images.githubusercontent.com/91490989/219791122-29396950-2836-484a-901f-3df722ff061b.mp4



### Help

https://user-images.githubusercontent.com/91490989/219791054-cd779a03-b53c-451c-9063-4bb3a4777c21.mp4
