// data.js
export const data = {

  "Events": [
    {
      "id": "q0",
      "title": "What type of app are you building?",
      "conditional": true,
      "options": [
        { "text": "Android", "AndroidHours": 2, "IOSHours": 1.4, "BothHours": 2.6 },
        { "text": "IOS", "AndroidHours": 4, "IOSHours": 2.8, "BothHours": 5.2 },
        { "text": "Both", "AndroidHours": 3, "IOSHours": 2.1, "BothHours": 3.9 }
      ]
    },
    {
      id: "q1",
      title: "Do you need Registration & Authorization?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "via Email", AndroidHours: 13, IOSHours: 12.7, BothHours: 19.2 },
        { text: "via Phone", AndroidHours: 11, IOSHours: 10.7, BothHours: 17.2 },
        { text: "via Facebook", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "Add payment details", AndroidHours: 12, IOSHours: 11.7, BothHours: 18.6 },
        { text: "Forgot password", AndroidHours: 7, IOSHours: 6.8, BothHours: 10.8 }
      ],
      additionalFeatures: [
        { text: "via Twitter", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "via Google+", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 }
      ]
    },
    {
      "id": "q2",
      "title": "Do you want to let users Invite friends?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 10.3, "IOSHours": 7.21, "BothHours": 13.39 },
        { "text": "Facebook", "AndroidHours": 4.9, "IOSHours": 3.43, "BothHours": 6.37 },
        { "text": "Twitter", "AndroidHours": 6.8, "IOSHours": 4.76, "BothHours": 8.84 }
      ],
      "additionalFeatures": [
        { "text": "Email", "AndroidHours": 6.0, "IOSHours": 4.2, "BothHours": 7.8 },
        { "text": "SMS", "AndroidHours": 6.5, "IOSHours": 4.55, "BothHours": 8.45 }
      ]
    },
    {
      "id": "q3",
      "title": "Will you send Notifications to your users?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 7.5, "IOSHours": 5.25, "BothHours": 9.75 },
        { "text": "Push notifications", "AndroidHours": 36.4, "IOSHours": 25.48, "BothHours": 47.32 },
        { "text": "Pop up notifications", "AndroidHours": 23.6, "IOSHours": 16.52, "BothHours": 30.68 }
      ],
      "additionalFeatures": [
        { "text": "Deep linking", "AndroidHours": 14.5, "IOSHours": 10.15, "BothHours": 18.85 }
      ]
    },
    {
      "id": "q4",
      "title": "Will your app have a Splash screen?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 2.0, "IOSHours": 1.4, "BothHours": 2.6 },
        { "text": "Simple animation", "AndroidHours": 7.8, "IOSHours": 5.46, "BothHours": 10.14 }
      ],
      "additionalFeatures": [
        { "text": "Custom animation effects", "AndroidHours": 11.8, "IOSHours": 8.26, "BothHours": 15.34 }
      ]
    },
    {
      "id": "q5",
      "title": "Will there be a Home screen?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 11.8, "IOSHours": 8.26, "BothHours": 15.34 },
        { "text": "List of events", "AndroidHours": 15.6, "IOSHours": 10.92, "BothHours": 20.28 },
        { "text": "Events details screen", "AndroidHours": 15.6, "IOSHours": 10.92, "BothHours": 20.28 },
        { "text": "Map", "AndroidHours": 31.2, "IOSHours": 21.84, "BothHours": 40.56 },
        { "text": "Location details", "AndroidHours": 13.7, "IOSHours": 9.59, "BothHours": 17.81 }
      ],
      "additionalFeatures": [
        { "text": "Comments", "AndroidHours": 15.6, "IOSHours": 10.92, "BothHours": 20.28 },
        { "text": "Search", "AndroidHours": 13.7, "IOSHours": 9.59, "BothHours": 17.81 },
        { "text": "Historic view", "AndroidHours": 15.6, "IOSHours": 10.92, "BothHours": 20.28 },
        { "text": "List of most popular places", "AndroidHours": 15.6, "IOSHours": 10.92, "BothHours": 20.28 }
      ]
    },
    {
      "id": "q6",
      "title": "Do you need a Locations screen?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 6.8, "IOSHours": 4.76, "BothHours": 8.84 },
        { "text": "Search location", "AndroidHours": 21.6, "IOSHours": 15.12, "BothHours": 28.08 },
        { "text": "Like/dislike", "AndroidHours": 8.4, "IOSHours": 5.88, "BothHours": 10.92 }
      ],
      "additionalFeatures": [
        { "text": "List of locations", "AndroidHours": 36.2, "IOSHours": 25.34, "BothHours": 47.06 },
        { "text": "Add to favorites", "AndroidHours": 9.3, "IOSHours": 6.51, "BothHours": 12.09 },
        { "text": "Get address and phone", "AndroidHours": 9.8, "IOSHours": 6.86, "BothHours": 12.74 },
        { "text": "Send to a friend to rate", "AndroidHours": 23.6, "IOSHours": 16.52, "BothHours": 30.68 }
      ]
    },
    {
      "id": "q7",
      "title": "Will you allow users to complete a profile?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 8.8, "IOSHours": 6.16, "BothHours": 11.44 },
        { "text": "Profile view", "AndroidHours": 26.9, "IOSHours": 18.83, "BothHours": 34.97 },
        { "text": "List of favorite locations", "AndroidHours": 16.3, "IOSHours": 11.41, "BothHours": 21.19 },
        { "text": "Change password", "AndroidHours": 10.3, "IOSHours": 7.21, "BothHours": 13.39 },
        { "text": "Edit email", "AndroidHours": 6.4, "IOSHours": 4.48, "BothHours": 8.32 }
      ],
      "additionalFeatures": [
        { "text": "My album screen", "AndroidHours": 13.7, "IOSHours": 9.59, "BothHours": 17.81 },
        { "text": "Edit profile details", "AndroidHours": 16.1, "IOSHours": 11.27, "BothHours": 20.93 },
        { "text": "Edit photo", "AndroidHours": 16.1, "IOSHours": 11.27, "BothHours": 20.93 },
        { "text": "Edit description", "AndroidHours": 10.8, "IOSHours": 7.56, "BothHours": 14.04 },
        { "text": "Edit profile", "AndroidHours": 18.6, "IOSHours": 13.02, "BothHours": 24.18 },
        { "text": "Edit phone", "AndroidHours": 12.3, "IOSHours": 8.61, "BothHours": 15.99 }
      ]
    },
    {
      "id": "q8",
      "title": "Do you need an Admin Panel in your app?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 0, "IOSHours": 0.0, "BothHours": 0.0 },
        { "text": "Authorization", "AndroidHours": 11, "IOSHours": 7.7, "BothHours": 14.3 },
        { "text": "User management", "AndroidHours": 25, "IOSHours": 17.5, "BothHours": 32.5 }
      ],
      "additionalFeatures": [
        { "text": "Post management", "AndroidHours": 25, "IOSHours": 17.5, "BothHours": 32.5 },
        { "text": "Categories management", "AndroidHours": 9, "IOSHours": 6.3, "BothHours": 11.7 },
        { "text": "Languages management", "AndroidHours": 9, "IOSHours": 6.3, "BothHours": 11.7 },
        { "text": "Payment administration", "AndroidHours": 25, "IOSHours": 17.5, "BothHours": 32.5 }
      ]
    },
    {
      "id": "qn",
      "title": "Do you need a design for your App?",
      "options": [
        { "text": "None", "AndroidHours": 0, "IOSHours": 0.0, "BothHours": 0.0 },
        { "text": "Simple", "AndroidHours": 72, "IOSHours": 50.4, "BothHours": 93.6 },
        { "text": "Custom", "AndroidHours": 216, "IOSHours": 151.2, "BothHours": 280.8 }
      ]
    }
  ],
  'Communications': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', AndroidHours: 2, IOSHours: 1.4, BothHours: 2.6 },
        { text: 'IOS', AndroidHours: 4, IOSHours: 2.8, BothHours: 5.2 },
        { text: 'Both', AndroidHours: 3, IOSHours: 2.1, BothHours: 3.9 }
      ],
    },
    {
      id: "q1",
      title: "Do you need Registration & Authorization?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "via Email", AndroidHours: 13, IOSHours: 12.7, BothHours: 19.2 },
        { text: "via Phone", AndroidHours: 11, IOSHours: 10.7, BothHours: 17.2 },
        { text: "via Facebook", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "Add payment details", AndroidHours: 12, IOSHours: 11.7, BothHours: 18.6 },
        { text: "Forgot password", AndroidHours: 7, IOSHours: 6.8, BothHours: 10.8 }
      ],
      additionalFeatures: [
        { text: "via Twitter", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "via Google+", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 }
      ]
    },
    {
      id: "q2",
      title: "Do you want to let users Invite friends?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 10.3, IOSHours: 7.21, BothHours: 13.39 },
        { text: "Facebook", AndroidHours: 4.9, IOSHours: 3.43, BothHours: 6.37 },
        { text: "Twitter", AndroidHours: 6.8, IOSHours: 4.76, BothHours: 8.84 }
      ],
      additionalFeatures: [
        { text: "Email", AndroidHours: 6, IOSHours: 4.2, BothHours: 7.8 },
        { text: "SMS", AndroidHours: 6.5, IOSHours: 4.55, BothHours: 8.45 }
      ]
    },
    {
      id: "q3",
      title: "Will you allow users to complete a profile?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 8.8, IOSHours: 6.16, BothHours: 11.44 },
        { text: "View profile", AndroidHours: 21.1, IOSHours: 14.77, BothHours: 27.43 },
        { text: "Edit photo", AndroidHours: 13.3, IOSHours: 9.31, BothHours: 17.29 },
        { text: "Edit profile details", AndroidHours: 16.1, IOSHours: 11.27, BothHours: 20.93 },
        { text: "Change password", AndroidHours: 10.3, IOSHours: 7.21, BothHours: 13.39 },
        { text: "Edit email", AndroidHours: 6.4, IOSHours: 4.48, BothHours: 8.32 }
      ],
      additionalFeatures: [
        { text: "Online status", AndroidHours: 6.9, IOSHours: 4.83, BothHours: 8.97 },
        { text: "Edit phone", AndroidHours: 12.3, IOSHours: 8.61, BothHours: 16.03 }
      ]
    },
    {
      id: "q4",
      title: "Do you need a Contacts screen in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 4.9, IOSHours: 3.43, BothHours: 6.37 },
        { text: "List of phone contacts", AndroidHours: 13.8, IOSHours: 9.66, BothHours: 17.94 },
        { text: "Contact details screen", AndroidHours: 9.8, IOSHours: 6.86, BothHours: 12.74 },
        { text: "Edit contact", AndroidHours: 17.1, IOSHours: 11.97, BothHours: 22.23 },
        { text: "Add contact", AndroidHours: 17.1, IOSHours: 11.97, BothHours: 22.23 },
        { text: "Search contacts", AndroidHours: 15.8, IOSHours: 11.06, BothHours: 20.54 }
      ],
      additionalFeatures: [
        { text: "Filter by", AndroidHours: 12.5, IOSHours: 8.75, BothHours: 16.25 },
        { text: "Add to favorites", AndroidHours: 9.3, IOSHours: 6.51, BothHours: 12.09 },
        { text: "Sync contacts", AndroidHours: 38.2, IOSHours: 26.74, BothHours: 49.66 }
      ]
    },
    {
      id: "q5",
      title: "Do you need Chats in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 36, IOSHours: 36.82, BothHours: 68.38 },
        { text: "List of chats", AndroidHours: 15, IOSHours: 11, BothHours: 18 },
        { text: "Delete chats", AndroidHours: 14, IOSHours: 11, BothHours: 19 },
        { text: "Chats detail screen", AndroidHours: 11.5, IOSHours: 7.21, BothHours: 13.39 },
        { text: "Send text", AndroidHours: 47.5, IOSHours: 36.82, BothHours: 68.38 },
        { text: "Send photo", AndroidHours: 15, IOSHours: 7.21, BothHours: 13.39 },
        { text: "Send video", AndroidHours: 17, IOSHours: 7.21, BothHours: 13.39 },
        { text: "Edit name of the chat", AndroidHours: 7, IOSHours: 7.21, BothHours: 13.39 },
        { text: "Read status", AndroidHours: 18, IOSHours: 7.21, BothHours: 13.39 },
        { text: "Send Audio files", AndroidHours: 15.5, IOSHours: 7.21, BothHours: 13.39 },
        { text: "Emoji", AndroidHours: 14.5, IOSHours: 7.21, BothHours: 13.39 },


      ],
      additionalFeatures: [
        { text: "Send location", AndroidHours: 16.5, IOSHours: 13, BothHours: 24 },
        { text: "Send audio record", AndroidHours: 16.5, IOSHours: 13, BothHours: 24.87 },
        { text: "Clear chat", AndroidHours: 14.5, IOSHours: 15.82, BothHours: 29.38 },
        { text: "Delete user from chat", AndroidHours: 8, IOSHours: 7.91, BothHours: 14.69 },
        { text: "Typing status", AndroidHours: 9, IOSHours: 9.31, BothHours: 17.29 },
        { text: "Delivery status", AndroidHours: 15.5, IOSHours: 7.91, BothHours: 14.69 },
        { text: "Send documents", AndroidHours: 8, IOSHours: 7.91, BothHours: 14.69 },
        { text: "Send contact", AndroidHours: 8, IOSHours: 7.91, BothHours: 14.69 },
        { text: "Search in chat", AndroidHours: 8, IOSHours: 7.91, BothHours: 14.69 },
        { text: "Change wallpaper", AndroidHours: 8, IOSHours: 7.91, BothHours: 14.69 },
        { text: "Send chat via email", AndroidHours: 8, IOSHours: 7.91, BothHours: 14.69 },

      ]
    },
    {
      id: "q6",
      title: "Do you need Group Chats in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 26, IOSHours: 22, BothHours: 30 },
        { text: "Select users", AndroidHours: 15.2, IOSHours: 10.64, BothHours: 19.76 },
        { text: "Send invitation to users", AndroidHours: 14.3, IOSHours: 10.01, BothHours: 18.59 }
      ],
      additionalFeatures: []
    },
    {
      id: "q7",
      title: "Will you let users manage the Settings?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 19.5, IOSHours: 13.65, BothHours: 25.35 },
        { text: "Log out", AndroidHours: 5.4, IOSHours: 3.78, BothHours: 7.02 },
        { text: "Deactivate account", AndroidHours: 6.9, IOSHours: 4.83, BothHours: 8.97 },
        { text: "Video settings", AndroidHours: 7.5, IOSHours: 9, BothHours: 12 },
        { text: "Use front camera", AndroidHours: 2, IOSHours: 1.4, BothHours: 3 },
        { text: "Sound settings", AndroidHours: 4, IOSHours: 3, BothHours: 6 }
      ],
      additionalFeatures: [
        { text: "On/off push notifications", AndroidHours: 4, IOSHours: 3.1, BothHours: 6 },
        { text: "On/off pop up notifications", AndroidHours: 4, IOSHours: 3.1, BothHours: 6 },
        { text: "Phone ringtone", AndroidHours: 4, IOSHours: 3.1, BothHours: 6 },
        { text: "SMS ringtone", AndroidHours: 4, IOSHours: 3.1, BothHours: 6 }
      ]
    },
    {
      id: "q8",
      title: "Will you send Notifications to your users?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 7.5, IOSHours: 5.25, BothHours: 9.75 },
        { text: "Push notifications", AndroidHours: 36.4, IOSHours: 25.48, BothHours: 47.32 },
        { text: "Pop up notifications", AndroidHours: 23.6, IOSHours: 16.52, BothHours: 30.68 }
      ],
      additionalFeatures: [
        { text: "Deep linking", AndroidHours: 14.5, IOSHours: 10.15, BothHours: 18.85 }
      ]
    },
    {
      id: "q9",
      title: "Will your app have a Splash screen?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 2, IOSHours: 1.4, BothHours: 2.6 },
        { text: "Simple animation", AndroidHours: 7.8, IOSHours: 5.46, BothHours: 10.14 },
      ],
      additionalFeatures: [
        { text: "Custom animation effects", AndroidHours: 11.8, IOSHours: 8.26, BothHours: 15.34 }
      ]
    },
    {
      id: "q10",
      title: "Do you need an Admin Panel in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "Authorization", AndroidHours: 11, IOSHours: 7.7, BothHours: 14.3 },
        { text: "User management", AndroidHours: 25, IOSHours: 17.5, BothHours: 32.5 }
      ],
      additionalFeatures: [
        { text: "Posts management", AndroidHours: 25, IOSHours: 17.5, BothHours: 32.5 },
        { text: "Categories management", AndroidHours: 9, IOSHours: 6.3, BothHours: 11.7 },
        { text: "Languages management", AndroidHours: 9, IOSHours: 6.3, BothHours: 11.7 },
        { text: "Payment Administration", AndroidHours: 25, IOSHours: 17.5, BothHours: 32.5 }
      ]
    },
    {
      id: "qn",
      title: "Do you need a design for your App?",
      options: [
        { text: "None", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "Simple", AndroidHours: 58, IOSHours: 50.4, BothHours: 83.6 },
        { text: "Custom", AndroidHours: 174, IOSHours: 151.2, BothHours: 210.8 }
      ]
    }
  ],
  'Music & Audio': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', AndroidHours: 2, IOSHours: 1.4, BothHours: 2.6 },
        { text: 'IOS', AndroidHours: 4, IOSHours: 2.8, BothHours: 5.2 },
        { text: 'Both', AndroidHours: 3, IOSHours: 2.1, BothHours: 3.9 },
      ],
    },
    {
      id: "q1",
      title: "Do you need Registration & Authorization?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "via Email", AndroidHours: 13, IOSHours: 12.7, BothHours: 19.2 },
        { text: "via Phone", AndroidHours: 11, IOSHours: 10.7, BothHours: 17.2 },
        { text: "via Facebook", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "Add payment details", AndroidHours: 12, IOSHours: 11.7, BothHours: 18.6 },
        { text: "Forgot password", AndroidHours: 7, IOSHours: 6.8, BothHours: 10.8 }
      ],
      additionalFeatures: [
        { text: "via Twitter", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "via Google+", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 }
      ]
    },
    {
      id: "q2",
      title: "Will you send Notifications to your users?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 7.5, IOSHours: 5.25, BothHours: 9.75 },
        { text: "Push notifications", AndroidHours: 36.4, IOSHours: 25.48, BothHours: 47.32 },
        { text: "Pop up notifications", AndroidHours: 23.6, IOSHours: 16.52, BothHours: 30.68 }
      ],
      additionalFeatures: [
        { text: "Deeplinking", AndroidHours: 14.5, IOSHours: 10.15, BothHours: 18.85 }
      ]
    },
    {
      id: "q3",
      title: "Will your app have a Splash screen?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 1, IOSHours: 1, BothHours: 1.9 },
        { text: "Simple animation", AndroidHours: 4, IOSHours: 3.46, BothHours: 6.14 }
      ],
      additionalFeatures: [
        { text: "Custom animation effects", AndroidHours: 6, IOSHours: 4, BothHours: 9 }
      ]
    },
    {
      id: "q4",
      title: "Will you let users organize Channels in your app?",
      conditional: false,
      featuresForMVP: [
        { "text": "Integration", "AndroidHours": 8, "IOSHours": 7.2, "BothHours": 10.4 },
        { "text": "List of channels", "AndroidHours": 7, "IOSHours": 6.3, "BothHours": 9.1 },
        { "text": "Chanel screen", "AndroidHours": 7, "IOSHours": 6.3, "BothHours": 9.1 },
        { "text": "List of playlists of chanel's genre", "AndroidHours": 7, "IOSHours": 6.3, "BothHours": 9.1 },
        { "text": "List of artist of chanel's genre", "AndroidHours": 6, "IOSHours": 5.4, "BothHours": 7.8 }
      ],
      additionalFeatures: [
        { "text": "list of groups", "AndroidHours": 7, "IOSHours": 6.3, "BothHours": 9.1 },
        { "text": "group details (list of genres in group) screen", "AndroidHours": 7, "IOSHours": 6.3, "BothHours": 9.1 },
        { "text": "group details (list of artists in group) screen", "AndroidHours": 6.5, "IOSHours": 5.85, "BothHours": 8.45 }
      ]

    },
    {
      id: "q5",
      title: "Will users manage tracks in 'Favorites'?",
      conditional: false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 4, "IOSHours": 3.6, "BothHours": 5.2 },
        { "text": "List of favorites tracks", "AndroidHours": 11, "IOSHours": 9.9, "BothHours": 14.3 },
        { "text": "Download selected tracks (download all list)", "AndroidHours": 20, "IOSHours": 18, "BothHours": 26 }
      ],
      "additionalFeatures": [
        { "text": "Share", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 }
      ]
    },
    {
      id: "q6",
      title: "Will you allow users to manage their playlists?",
      conditional: false,

      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 9, "IOSHours": 8.1, "BothHours": 11.7 },
        { "text": "List of playlists", "AndroidHours": 11.5, "IOSHours": 10.35, "BothHours": 14.95 },
        { "text": "Create new playlist", "AndroidHours": 9.8, "IOSHours": 8.82, "BothHours": 12.74 },
        { "text": "Playlist screen", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 },
        { "text": "List of tracks", "AndroidHours": 11.5, "IOSHours": 10.35, "BothHours": 14.95 },
        { "text": "Play playlist", "AndroidHours": 5, "IOSHours": 4.5, "BothHours": 6.5 }
      ],
      "additionalFeatures": [
        { "text": "Share playlist", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 },
        { "text": "Add to favorites", "AndroidHours": 6, "IOSHours": 5.4, "BothHours": 7.8 }
      ]


    },
    {
      id: 'q7',
      title: "Will users have access to other users' pages?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 2.8, IOSHours: 2.1, BothHours: 5.46 },
        { text: "Playlists screen", AndroidHours: 7, IOSHours: 6.59, BothHours: 13 },
        { text: "Albums screen", AndroidHours: 7.5, IOSHours: 7, BothHours: 11.8 },
        { text: "Artists screen", AndroidHours: 7.5, IOSHours: 7, BothHours: 11.8 }
      ],
      additionalFeatures: []
    },
    {
      id: "q8",
      title: "Will there be a Music player screen?",
      conditional: false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 11, "IOSHours": 9.9, "BothHours": 14.3 },
        { "text": "Add to playlist", "AndroidHours": 6.5, "IOSHours": 5.85, "BothHours": 8.45 },
        { "text": "Now playing screen", "AndroidHours": 11.5, "IOSHours": 10.35, "BothHours": 14.95 },
        { "text": "Go to album page", "AndroidHours": 1.5, "IOSHours": 1.35, "BothHours": 1.95 }
      ],
      "additionalFeatures": [
        { "text": "Add to favorites", "AndroidHours": 6, "IOSHours": 5.4, "BothHours": 7.8 },
        { "text": "Go to artist page", "AndroidHours": 1.5, "IOSHours": 1.35, "BothHours": 1.95 },
        { "text": "Remove from favorites", "AndroidHours": 3, "IOSHours": 2.7, "BothHours": 3.9 },
        { "text": "Share", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 }
      ]

    },
    {
      id: "q9",
      title: "Do you need separate pages for Artists?",
      conditional: false,

      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 1.5, "IOSHours": 1.35, "BothHours": 1.95 },
        { "text": "View all Discography screen", "AndroidHours": 9, "IOSHours": 8.1, "BothHours": 11.7 },
        { "text": "View all Playlists screen", "AndroidHours": 9, "IOSHours": 8.1, "BothHours": 11.7 },
        { "text": "Share", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 }
      ],
      "additionalFeatures": [
        { "text": "View all Similar Artists screen", "AndroidHours": 9, "IOSHours": 8.1, "BothHours": 11.7 },
        { "text": "Add to favorites", "AndroidHours": 6, "IOSHours": 5.4, "BothHours": 7.8 }
      ]
    },
    {
      id: 'q10',
      title: "Do you need separate pages for Albums?",
      conditional: false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 1.5, "IOSHours": 1.35, "BothHours": 1.95 },
        { "text": "List of tracks", "AndroidHours": 11.5, "IOSHours": 10.35, "BothHours": 14.95 },
        { "text": "Share", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 },
        { "text": "Play album", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 }
      ],
      "additionalFeatures": [
        { "text": "Add to favorites", "AndroidHours": 6, "IOSHours": 5.4, "BothHours": 7.8 },
        { "text": "Download album", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 }
      ]

    },
    {
      id: "q11",
      title: "Will you let users manage the Settings?",
      conditional: false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 10, "IOSHours": 9, "BothHours": 13 },
        { "text": "Manage account screen", "AndroidHours": 7, "IOSHours": 6.3, "BothHours": 9.1 },
        { "text": "Audio settings screen", "AndroidHours": 7, "IOSHours": 6.3, "BothHours": 9.1 },
        { "text": "About screen", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 },
        { "text": "Terms of Use & Privacy Policy screen", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 }
      ],
      "additionalFeatures": [
        { "text": "Equalizer", "AndroidHours": 23.5, "IOSHours": 21.15, "BothHours": 30.55 }
      ]
    },
    {
      id: "q12",
      title: "Do you need a Home screen in your Music app?",
      conditional: false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 },
        { "text": "Explore channels", "AndroidHours": 7.3, "IOSHours": 6.57, "BothHours": 9.49 },
        { "text": "Explore artists", "AndroidHours": 7.3, "IOSHours": 6.57, "BothHours": 9.49 }
      ],
      "additionalFeatures": [
        { "text": "Popular", "AndroidHours": 4.8, "IOSHours": 4.32, "BothHours": 6.24 },
        { "text": "Top", "AndroidHours": 4.8, "IOSHours": 4.32, "BothHours": 6.24 },
        { "text": "Latest", "AndroidHours": 4.8, "IOSHours": 4.32, "BothHours": 6.24 }
      ]
    },
    {
      id: "q13",
      title: "Do you need an Admin Panel in your app?",
      conditional: false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 0, "IOSHours": 0, "BothHours": 0 },
        { "text": "Authorization", "AndroidHours": 11, "IOSHours": 9.9, "BothHours": 14.3 },
        { "text": "Users management", "AndroidHours": 25, "IOSHours": 22.5, "BothHours": 32.5 }
      ],
      "additionalFeatures": [
        { "text": "Posts management", "AndroidHours": 25, "IOSHours": 22.5, "BothHours": 32.5 },
        { "text": "Categories management", "AndroidHours": 9, "IOSHours": 8.1, "BothHours": 11.7 },
        { "text": "Languages management", "AndroidHours": 9, "IOSHours": 8.1, "BothHours": 11.7 },
        { "text": "Payment Administration", "AndroidHours": 25, "IOSHours": 22.5, "BothHours": 32.5 }
      ]
    },
    {
      id: "qn",
      title: "Do you need a design for your App?",
      options: [
        { text: "None", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "Simple", AndroidHours: 72, IOSHours: 50.4, BothHours: 93.6 },
        { text: "Custom", AndroidHours: 216, IOSHours: 151.2, BothHours: 280.8 }
      ]
    },
  ],
  'Shopping': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', AndroidHours: 2, IOSHours: 1.4, BothHours: 2.6 },
        { text: 'IOS', AndroidHours: 4, IOSHours: 2.8, BothHours: 5.2 },
        { text: 'Both', AndroidHours: 3, IOSHours: 2.1, BothHours: 3.9 }
      ]
    },
    {
      id: "q1",
      title: "Do you need Registration & Authorization?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "via Email", AndroidHours: 13, IOSHours: 12.7, BothHours: 19.2 },
        { text: "via Phone", AndroidHours: 11, IOSHours: 10.7, BothHours: 17.2 },
        { text: "via Facebook", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "Add payment details", AndroidHours: 12, IOSHours: 11.7, BothHours: 18.6 },
        { text: "Forgot password", AndroidHours: 7, IOSHours: 6.8, BothHours: 10.8 }
      ],
      additionalFeatures: [
        { text: "via Twitter", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "via Google+", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 }
      ]
    },
    {
      id: "q2",
      title: "Will you send Notifications to your users?",
      conditional: false,
      featuresForMVP: [
        { "text": "Integration", "AndroidHours": 7.5, "IOSHours": 6, "BothHours": 10 },
        { "text": "Push notifications", "AndroidHours": 24.5, "IOSHours": 23.48, "BothHours": 47.32 },
        { "text": "Pop up notifications", "AndroidHours": 15, "IOSHours": 14.52, "BothHours": 30.68 }
      ],
      additionalFeatures: [
        { "text": "Deep linking", "AndroidHours": 9.3, "IOSHours": 9, "BothHours": 12 }
      ]
    },
    {
      id: "q3",
      title: "Will your app have a Splash screen?",
      conditional: false,
      featuresForMVP: [
        { "text": "Integration", "AndroidHours": 1, "IOSHours": 1, "BothHours": 1 },
        { "text": "Simple animation", "AndroidHours": 4, "IOSHours": 3, "BothHours": 6 }
      ],
      additionalFeatures: [
        { "text": "Custom animation effects", "AndroidHours": 6, "IOSHours": 5.7, "BothHours": 9 }
      ]
    },
    {
      id: "q4",
      title: "Do you need a Home screen in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 4, IOSHours: 3, BothHours: 5 },
        { text: "Watched product horizontal scroll list", AndroidHours: 8.5, IOSHours: 7.21, BothHours: 13.51 },
        { text: "Popular products horizontal scroll list", AndroidHours: 4, IOSHours: 3.8, BothHours: 7 },
        { text: "List of products", AndroidHours: 6, IOSHours: 6, BothHours: 9 },
        { text: "Add product to cart ", AndroidHours: 3.3, IOSHours: 3, BothHours: 5 }
      ],
      additionalFeatures: [
        { "text": "Last purchased products horizontal scroll list", "AndroidHours": 4, "IOSHours": 3.5, "BothHours": 7 },
        { "text": "Search screen", "AndroidHours": 9, "IOSHours": 8.7, "BothHours": 12 }

      ]
    },
    {
      id: "q5",
      title: "Will there be a Product details screen?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 8.8, IOSHours: 8, BothHours: 12 },
        { text: "Photo slider", AndroidHours: 4.8, IOSHours: 4.21, BothHours: 8 },
        { text: "Add review + rate", AndroidHours: 10.8, IOSHours: 10, BothHours: 14 },
      ],
      additionalFeatures: [
        { text: "Share product", AndroidHours: 3.5, IOSHours: 3, BothHours: 5 },
      ]
    },
    {
      id: "q6",
      title: "Will you let users manage a Shopping cart?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 2.8, IOSHours: 2.8, BothHours: 2.8 },
        { text: "List of products", AndroidHours: 6, IOSHours: 6, BothHours: 9 },
        { text: "Delete from cart", AndroidHours: 4, IOSHours: 4, BothHours: 6 },
        { text: "Buy item", AndroidHours: 32.8, IOSHours: 30.8, BothHours: 46.8 },
        { text: "Checkout screen", AndroidHours: 5, IOSHours: 5, BothHours: 5 },
        { text: "Add delivery address", AndroidHours: 10.5, IOSHours: 10.5, BothHours: 10.5 },
        { text: "Enter code", AndroidHours: 6.5, IOSHours: 6, BothHours: 10.5 }
      ],

      additionalFeatures: [
        { text: "Buy all", AndroidHours: 8.3, IOSHours: 8, BothHours: 12 }
      ]
    },
    {
      id: "q7",
      title: "Will you need an Info screen in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 2, IOSHours: 1.8, BothHours: 2.6 },
        { text: "Terms of Use & Privacy Policy screen", AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3.25 },
        { text: "About us screen", AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3.25 }
      ],

      additionalFeatures: [
        { text: "Feedback form", AndroidHours: 8, IOSHours: 7.2, BothHours: 10.4 }
      ]

    },
    {
      id: "q8",
      title: "Will you allow users to complete a profile?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 4.5, IOSHours: 4.05, BothHours: 5.85 },
        { text: "Edit profile", AndroidHours: 12, IOSHours: 10.8, BothHours: 15.6 },
        { text: "My orders", AndroidHours: 10, IOSHours: 9, BothHours: 13 }
      ],

      additionalFeatures: [
        { text: "Repeat order", AndroidHours: 6.5, IOSHours: 5.85, BothHours: 8.45 }
      ]

    },
    {
      id: "q9",
      title: "Will your app accept payments?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "PayPal", AndroidHours: 32, IOSHours: 28.8, BothHours: 41.6 }
      ],

      additionalFeatures: [
        { text: "Braintree", AndroidHours: 35.5, IOSHours: 31.95, BothHours: 46.15 },
        { text: "Stripe", AndroidHours: 29, IOSHours: 26.1, BothHours: 37.7 },
        { text: "Dwolla", AndroidHours: 35.5, IOSHours: 31.95, BothHours: 46.15 },
        { text: "Authorize.net", AndroidHours: 35.5, IOSHours: 31.95, BothHours: 46.15 }
      ]

    },
    {
      id: "q10",
      title: "Do you need an Admin Panel in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "Authorization", AndroidHours: 11, IOSHours: 9.9, BothHours: 14.3 },
        { text: "Users management", AndroidHours: 25, IOSHours: 22.5, BothHours: 32.5 }
      ],

      additionalFeatures: [
        { text: "Posts management", AndroidHours: 25, IOSHours: 22.5, BothHours: 32.5 },
        { text: "Categories management", AndroidHours: 9, IOSHours: 8.1, BothHours: 11.7 },
        { text: "Languages management", AndroidHours: 9, IOSHours: 8.1, BothHours: 11.7 },
        { text: "Payment Administration", AndroidHours: 25, IOSHours: 22.5, BothHours: 32.5 }
      ]

    },
    {
      id: "qn",
      title: "Do you need a design for your App?",
      options: [
        { text: "None", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "Simple", AndroidHours: 72, IOSHours: 50.4, BothHours: 93.6 },
        { text: "Custom", AndroidHours: 216, IOSHours: 151.2, BothHours: 280.8 }
      ]
    }
  ],
  'Photos': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', AndroidHours: 2, IOSHours: 1.4, BothHours: 2.6 },
        { text: 'IOS', AndroidHours: 4, IOSHours: 2.8, BothHours: 5.2 },
        { text: 'Both', AndroidHours: 3, IOSHours: 2.1, BothHours: 3.9 }
      ],
    },
    {
      id: "q1",
      title: "Do you need Registration & Authorization?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "via Email", AndroidHours: 13, IOSHours: 12.7, BothHours: 19.2 },
        { text: "via Phone", AndroidHours: 11, IOSHours: 10.7, BothHours: 17.2 },
        { text: "via Facebook", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "Add payment details", AndroidHours: 12, IOSHours: 11.7, BothHours: 18.6 },
        { text: "Forgot password", AndroidHours: 7, IOSHours: 6.8, BothHours: 10.8 }
      ],
      additionalFeatures: [
        { text: "via Twitter", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "via Google+", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 }
      ]
    },
    {
      id: "q2",
      title: "Do you want to let users Invite friends?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 5.3, IOSHours: 4.77, BothHours: 6.89 },
        { text: "Facebook", AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3.25 },
        { text: "Twitter", AndroidHours: 3.5, IOSHours: 3.15, BothHours: 4.55 }
      ],

      additionalFeatures: [
        { text: "Email", AndroidHours: 5, IOSHours: 4.5, BothHours: 6.5 },
        { text: "SMS", AndroidHours: 5.5, IOSHours: 4.95, BothHours: 7.15 }
      ]

    },
    {
      id: "q3",
      title: "Do you need Chats in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 36, IOSHours: 36.82, BothHours: 68.38 },
        { text: "List of chats", AndroidHours: 15, IOSHours: 11, BothHours: 18 },
        { text: "Delete chats", AndroidHours: 14, IOSHours: 11, BothHours: 19 },
        { text: "Chats detail screen", AndroidHours: 11.5, IOSHours: 7.21, BothHours: 13.39 },
        { text: "Send text", AndroidHours: 47.5, IOSHours: 36.82, BothHours: 68.38 },
        { text: "Send photo", AndroidHours: 15, IOSHours: 7.21, BothHours: 13.39 },
        { text: "Send video", AndroidHours: 17, IOSHours: 7.21, BothHours: 13.39 },
        { text: "Edit name of the chat", AndroidHours: 7, IOSHours: 7.21, BothHours: 13.39 },
        { text: "Read status", AndroidHours: 18, IOSHours: 7.21, BothHours: 13.39 },
        { text: "Send Audio files", AndroidHours: 15.5, IOSHours: 7.21, BothHours: 13.39 },
        { text: "Emoji", AndroidHours: 14.5, IOSHours: 7.21, BothHours: 13.39 },


      ],
      additionalFeatures: [
        { text: "Send location", AndroidHours: 16.5, IOSHours: 13, BothHours: 24 },
        { text: "Send audio record", AndroidHours: 16.5, IOSHours: 13, BothHours: 24.87 },
        { text: "Clear chat", AndroidHours: 14.5, IOSHours: 15.82, BothHours: 29.38 },
        { text: "Delete user from chat", AndroidHours: 8, IOSHours: 7.91, BothHours: 14.69 },
        { text: "Typing status", AndroidHours: 9, IOSHours: 9.31, BothHours: 17.29 },
        { text: "Delivery status", AndroidHours: 11, IOSHours: 10.4, BothHours: 15 },
        { text: "Send documents", AndroidHours: 11, IOSHours: 10.4, BothHours: 14.69 },
        { text: "Send contact", AndroidHours: 11, IOSHours: 10.4, BothHours: 14.69 },
        { text: "Search in chat", AndroidHours: 31, IOSHours: 29, BothHours: 39 },
        { text: "Change wallpaper", AndroidHours: 14.5, IOSHours: 13.4, BothHours: 19 },
        { text: "Send chat via email", AndroidHours: 14.5, IOSHours: 13.4, BothHours: 19 },

      ]
    },
    {
      id: "q4",
      title: "Do you need Group Chats in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 26, IOSHours: 25.5, BothHours: 32 },
        { text: "Select users", AndroidHours: 8.5, IOSHours: 7.21, BothHours: 13.39 },
        { text: "Send invite to users", AndroidHours: 9.5, IOSHours: 8.82, BothHours: 15 }
      ],
      additionalFeatures: [
      ]
    },
    {
      id: "q5",
      title: "Will you send Notifications to your users?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 7.5, IOSHours: 6.75, BothHours: 9.75 },
        { text: "Push notifications", AndroidHours: 24.5, IOSHours: 22.05, BothHours: 31.85 },
        { text: "Pop up notifications", AndroidHours: 15, IOSHours: 13.5, BothHours: 19.5 }
      ],

      additionalFeatures: [
        { text: "Deep linking", AndroidHours: 9.3, IOSHours: 8.37, BothHours: 12.09 }
      ]
    },
    {
      id: "q6",
      title: "Will your app have a Splash screen?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 1, IOSHours: 0.9, BothHours: 1.3 },
        { text: "Simple animation", AndroidHours: 4, IOSHours: 3.6, BothHours: 5.2 }
      ],

      additionalFeatures: [
        { text: "Custom animation effects", AndroidHours: 6, IOSHours: 5.4, BothHours: 7.8 }
      ]

    },
    {
      id: "q7",
      title: "Will you need an Info screen in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 2, IOSHours: 1.8, BothHours: 2.6 },
        { text: "Terms of Use & Privacy Policy screen", AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3.25 },
        { text: "About us screen", AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3.25 }
      ],

      additionalFeatures: [
        { text: "Feedback form", AndroidHours: 8, IOSHours: 7.2, BothHours: 10.4 }
      ]

    },
    {
      id: "q8",
      title: "Will your app accept payments?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "PayPal", AndroidHours: 32, IOSHours: 28.8, BothHours: 41.6 }
      ],

      additionalFeatures: [
        { text: "Braintree", AndroidHours: 35.5, IOSHours: 31.95, BothHours: 46.15 },
        { text: "Stripe", AndroidHours: 29, IOSHours: 26.1, BothHours: 37.7 },
        { text: "Dwolla", AndroidHours: 35.5, IOSHours: 31.95, BothHours: 46.15 },
        { text: "Authorize.net", AndroidHours: 35.5, IOSHours: 31.95, BothHours: 46.15 }
      ]

    },
    {
      id: "q9",
      title: "Do you need an Admin Panel in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "Authorization", AndroidHours: 11, IOSHours: 9.9, BothHours: 14.3 },
        { text: "Users management", AndroidHours: 25, IOSHours: 22.5, BothHours: 32.5 }
      ],

      additionalFeatures: [
        { text: "Posts management", AndroidHours: 25, IOSHours: 22.5, BothHours: 32.5 },
        { text: "Categories management", AndroidHours: 9, IOSHours: 8.1, BothHours: 11.7 },
        { text: "Languages management", AndroidHours: 9, IOSHours: 8.1, BothHours: 11.7 },
        { text: "Payment Administration", AndroidHours: 25, IOSHours: 22.5, BothHours: 32.5 }
      ]

    },
    {
      id: "q10",
      title: "Do you need a Home screen in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 4, IOSHours: 3.6, BothHours: 5.2 },
        { text: "List of posts", AndroidHours: 13, IOSHours: 11.7, BothHours: 16.9 },
        { text: "Like/unlike", AndroidHours: 9, IOSHours: 8.1, BothHours: 11.7 },
        { text: "Post details screen", AndroidHours: 11.2, IOSHours: 10.08, BothHours: 14.56 }
      ],

      additionalFeatures: [
        { text: "Add stars", AndroidHours: 11, IOSHours: 9.9, BothHours: 14.3 },
        { text: "List of comments", AndroidHours: 12, IOSHours: 10.8, BothHours: 15.6 },
        { text: "Add comment", AndroidHours: 11, IOSHours: 9.9, BothHours: 14.3 },
        { text: "Search", AndroidHours: 7, IOSHours: 6.3, BothHours: 9.1 },
        { text: "Search results screen", AndroidHours: 7, IOSHours: 6.3, BothHours: 9.1 }
      ]

    },
    {
      id: "q11",
      title: "Will you allow users to complete a profile?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 4.5, IOSHours: 4.05, BothHours: 5.85 },
        { text: "List of photos", AndroidHours: 20.1, IOSHours: 18.09, BothHours: 26.13 },
        { text: "Followers screen", AndroidHours: 10.9, IOSHours: 9.81, BothHours: 14.17 }
      ],

      additionalFeatures: [
        { text: "Follow/unfollow", AndroidHours: 5, IOSHours: 4.5, BothHours: 6.5 },
        { text: "Share profile", AndroidHours: 11.5, IOSHours: 10.35, BothHours: 14.95 }
      ]

    },
    {
      id: "q12",
      title: "Will you let users manage the Settings?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 10, IOSHours: 9, BothHours: 13 }
      ],

      additionalFeatures: [
        { text: "Edit profile", AndroidHours: 12, IOSHours: 10.8, BothHours: 15.6 },
        { text: "Upload photo", AndroidHours: 12.2, IOSHours: 10.98, BothHours: 15.86 },
        { text: "Datepicker", AndroidHours: 5, IOSHours: 4.5, BothHours: 6.5 }
      ]

    },
    {
      id: "q13",
      title: "What will there be on the Add post screen?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 10, IOSHours: 9, BothHours: 13 },
        { text: "Add picture", AndroidHours: 16, IOSHours: 14.4, BothHours: 20.8 },
        { text: "Upload from storage", AndroidHours: 6, IOSHours: 5.4, BothHours: 7.8 },
        { text: "Take by camera", AndroidHours: 11.5, IOSHours: 10.35, BothHours: 14.95 }
      ],
      additionalFeatures: [
      ]
    },
    {
      id: "q14",
      title: "Will you let users customize their photos?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 7, IOSHours: 6.3, BothHours: 9.1 },
        { text: "Select filter (per 5 filters)", AndroidHours: 28, IOSHours: 25.2, BothHours: 36.4 },
        { text: "Set image parameters", AndroidHours: 5, IOSHours: 4.5, BothHours: 6.5 },
        { text: "Crop", AndroidHours: 10, IOSHours: 9, BothHours: 13 },
        { text: "Brightness", AndroidHours: 5, IOSHours: 4.5, BothHours: 6.5 },
        { text: "Rotate", AndroidHours: 6, IOSHours: 5.4, BothHours: 7.8 }
      ],
      additionalFeatures: [
        { text: "Saturation", AndroidHours: 5, IOSHours: 4.5, BothHours: 6.5 },
        { text: "Invert", AndroidHours: 5, IOSHours: 4.5, BothHours: 6.5 },
        { text: "Add tags", AndroidHours: 9.3, IOSHours: 8.37, BothHours: 12.09 },
        { text: "Set category", AndroidHours: 6.3, IOSHours: 5.67, BothHours: 8.19 }
      ]

    },
    {
      id: "qn",
      title: "Do you need a design for your App?",
      options: [
        { text: "None", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "Simple", AndroidHours: 72, IOSHours: 50.4, BothHours: 93.6 },
        { text: "Custom", AndroidHours: 216, IOSHours: 151.2, BothHours: 280.8 }
      ]
    }
  ],
  'Jobs': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', AndroidHours: 2, IOSHours: 1.4, BothHours: 2.6 },
        { text: 'IOS', AndroidHours: 4, IOSHours: 2.8, BothHours: 5.2 },
        { text: 'Both', AndroidHours: 3, IOSHours: 2.1, BothHours: 3.9 }
      ]
    },
    {
      id: 'q2',
      title: 'Do you need Chats in your app?',
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 36, IOSHours: 32.4, BothHours: 46.8 },
        { text: "List of chats", AndroidHours: 15, IOSHours: 13.5, BothHours: 19.5 },
        { text: "Delete chat", AndroidHours: 14, IOSHours: 12.6, BothHours: 18.2 },
        { text: "Chat details screen", AndroidHours: 11.5, IOSHours: 10.35, BothHours: 14.95 },
        { text: "Send text", AndroidHours: 47.5, IOSHours: 42.75, BothHours: 61.75 },
        { text: "Send photo", AndroidHours: 15, IOSHours: 13.5, BothHours: 19.5 },
        { text: "Send video", AndroidHours: 36, IOSHours: 32.4, BothHours: 46.8 },
        { text: "Edit name of chat", AndroidHours: 36, IOSHours: 32.4, BothHours: 46.8 },
        { text: "Read Status", AndroidHours: 36, IOSHours: 32.4, BothHours: 46.8 },
        { text: "Send Audio file", AndroidHours: 36, IOSHours: 32.4, BothHours: 46.8 },
        { text: "Emoji", AndroidHours: 36, IOSHours: 32.4, BothHours: 46.8 },

      ],

      additionalFeatures: [
        { text: "Send location", AndroidHours: 16.5, IOSHours: 14.85, BothHours: 21.45 },
        { text: "Send audio record", AndroidHours: 16.5, IOSHours: 14.85, BothHours: 21.45 },
        { text: "Clear chat", AndroidHours: 14.5, IOSHours: 13.05, BothHours: 18.85 },
        { text: "Delete user from chat", AndroidHours: 8, IOSHours: 7.2, BothHours: 10.4 },
        { text: "Typing status", AndroidHours: 9, IOSHours: 8.1, BothHours: 11.7 },
        { text: "Delivery Status", AndroidHours: 14.5, IOSHours: 13.05, BothHours: 18.85 },
        { text: "Send Documents", AndroidHours: 11, IOSHours: 11, BothHours: 15  },
        { text: "Send Contact", AndroidHours: 11, IOSHours: 11, BothHours: 15 },
        { text: "Search in Chat", AndroidHours: 31, IOSHours: 30, BothHours: 39 },
        { text: "Change wallpaper",  AndroidHours: 14.5, IOSHours: 14, BothHours: 19 },
        { text: "Send chat via email", AndroidHours: 14.5, IOSHours: 14, BothHours: 19 },
        
      ]

    },
    {
      id: 'q3',
      title: 'Will you send Notifications to your users?',
      conditional: false,
      featuresForMVP: [
        { text: 'Integration', AndroidHours: 7.5, IOSHours: 7, BothHours: 11 },
        { text: 'Push notifications', AndroidHours: 24.5, IOSHours: 24, BothHours: 29 },
        { text: 'Pop up notifications', AndroidHours: 15, IOSHours: 14, BothHours: 19 },
      ],
      additionalFeatures: [
        { text: 'Deep linking', AndroidHours: 9.3, IOSHours: 9, BothHours: 11 },
      ]
    },
    {
  id: 'q4',
  title: 'Will your app have a Splash screen?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 1, IOSHours: 0.9, BothHours: 1.2 },
    { text: 'Simple animation', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 }
  ],
  additionalFeatures: [
    { text: 'Custom animation effects', AndroidHours: 6, IOSHours: 5.4, BothHours: 7.2 }
  ]
},
    {
  id: 'q5',
  title: 'Does your app need a Tutorial?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 1, IOSHours: 0.9, BothHours: 1.2 },
    { text: 'Simple animation', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 }
  ],
  additionalFeatures: [
    { text: 'Custom animation effects', AndroidHours: 6, IOSHours: 5.4, BothHours: 7.2 }
  ]
},
    {
  id: 'q6',
  title: 'Do you need a Home screen in your app?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 },
    { text: 'Search', AndroidHours: 7, IOSHours: 6.3, BothHours: 8.4 },
    { text: 'Filter by category', AndroidHours: 9.5, IOSHours: 8.55, BothHours: 11.4 },
    { text: 'Search results page', AndroidHours: 11, IOSHours: 9.9, BothHours: 13.2 },
    { text: 'Job details screen', AndroidHours: 14, IOSHours: 12.6, BothHours: 16.8 }
  ],
  additionalFeatures: [
    { text: 'List of popular categories', AndroidHours: 6, IOSHours: 5.4, BothHours: 7.2 }
  ]
},
    {
      id: 'q7',
      title: 'Will you let jobseekers complete a Profile?',
      conditional: false,
      featuresForMVP: [
        { text: 'Integration', AndroidHours: 5.4, IOSHours: 4.86, BothHours: 6.48 },
        { text: 'About', AndroidHours: 4.8, IOSHours: 4.32, BothHours: 5.76 },
        { text: 'Experience', AndroidHours: 7.8, IOSHours: 7.02, BothHours: 9.36 },
        { text: 'Upload photo', AndroidHours: 12.2, IOSHours: 10.98, BothHours: 14.64 },
        { text: 'Set region', AndroidHours: 7.3, IOSHours: 6.57, BothHours: 8.76 },
        { text: 'Education', AndroidHours: 7.8, IOSHours: 7.02, BothHours: 9.36 },
        { text: 'Set age', AndroidHours: 4.2, IOSHours: 4.02, BothHours: 7.36 },
        { text: 'Edit additional information', AndroidHours: 4.2, IOSHours: 4.02, BothHours: 7.36 }
      ],
      additionalFeatures: [
        { text: 'Portfolio', AndroidHours: 21.4, IOSHours: 19.26, BothHours: 25.68 },
        { text: 'CV screen', AndroidHours: 10.8, IOSHours: 9.72, BothHours: 12.96 }
      ]
    },
    {
  id: 'q8',
  title: 'Will there be a Job description screen?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 4.5, IOSHours: 4.05, BothHours: 5.4 },
    { text: 'Apply job', AndroidHours: 9.5, IOSHours: 8.55, BothHours: 11.4 }
  ],
  additionalFeatures: [
    { text: 'Hide job', AndroidHours: 9.5, IOSHours: 8.55, BothHours: 11.4 },
    { text: 'Send CV', AndroidHours: 11.3, IOSHours: 10.17, BothHours: 13.56 }
  ]
},
    {
  id: 'q9',
  title: 'Will you let employers complete a profile?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 3.5, IOSHours: 3.15, BothHours: 4.2 },
    { text: 'About company', AndroidHours: 6, IOSHours: 5.4, BothHours: 7.2 },
    { text: 'Set category', AndroidHours: 6.3, IOSHours: 5.67, BothHours: 7.56 },
    { text: 'Set region', AndroidHours: 7.3, IOSHours: 6.57, BothHours: 8.76 },
    { text: 'Upload photo', AndroidHours: 12.2, IOSHours: 10.98, BothHours: 14.64 }
  ],
  additionalFeatures: []
}
,
    {
  id: 'q10',
  title: 'Do you need a Post a Job screen?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 8.4, IOSHours: 7.56, BothHours: 10.08 },
    { text: 'Upload photo', AndroidHours: 12.2, IOSHours: 10.98, BothHours: 14.64 },
    { text: 'Add description', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 },
    { text: 'Set location(map)', AndroidHours: 10.1, IOSHours: 9.09, BothHours: 12.12 },
    { text: 'Set expiration date', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 },
    { text: 'Set category', AndroidHours: 6.3, IOSHours: 5.67, BothHours: 7.56 }
  ],
  additionalFeatures: [
    { text: 'Add tags', AndroidHours: 9.3, IOSHours: 8.37, BothHours: 11.16 }
  ]
}
,
    {
  id: 'q11',
  title: 'Will the app show a list of Applicants to a job?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 3.5, IOSHours: 3.15, BothHours: 4.2 },
    { text: 'List of applicants', AndroidHours: 8.5, IOSHours: 7.65, BothHours: 10.2 },
    { text: 'Applicants details screen', AndroidHours: 6, IOSHours: 5.4, BothHours: 7.2 }
  ],
  additionalFeatures: [
    { text: 'Send message', AndroidHours: 4.8, IOSHours: 4.32, BothHours: 5.76 }
  ]
}
,
    {
  id: 'q12',
  title: 'Do you need an Admin Panel in your app?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 0, IOSHours: 0, BothHours: 0 },
    { text: 'Authorization', AndroidHours: 11, IOSHours: 9.9, BothHours: 13.2 },
    { text: 'Talents management', AndroidHours: 8.5, IOSHours: 7.65, BothHours: 10.2 },
    { text: 'Employers management', AndroidHours: 8.5, IOSHours: 7.65, BothHours: 10.2 },
    { text: 'Jobs management', AndroidHours: 8.5, IOSHours: 7.65, BothHours: 10.2 }
  ],
  additionalFeatures: [
    { text: 'Categories management', AndroidHours: 9, IOSHours: 8.1, BothHours: 10.8 },
    { text: 'Regions management', AndroidHours: 8.5, IOSHours: 7.65, BothHours: 10.2 }
  ]
},
    {
      id: "qn",
      title: "Do you need a design for your App?",
      options: [
        { text: "None", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "Simple", AndroidHours: 72, IOSHours: 50.4, BothHours: 93.6 },
        { text: "Custom", AndroidHours: 216, IOSHours: 151.2, BothHours: 280.8 }
      ]
    }
  ],
  'Cars': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', AndroidHours: 2, IOSHours: 1.4, BothHours: 2.6 },
        { text: 'IOS', AndroidHours: 4, IOSHours: 2.8, BothHours: 5.2 },
        { text: 'Both', AndroidHours: 3, IOSHours: 2.1, BothHours: 3.9 }
      ]
    },
    {
      id: "q1",
      title: "Do you need Registration & Authorization?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "via Email", AndroidHours: 13, IOSHours: 12.7, BothHours: 19.2 },
        { text: "via Phone", AndroidHours: 11, IOSHours: 10.7, BothHours: 17.2 },
        { text: "via Facebook", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "Add payment details", AndroidHours: 12, IOSHours: 11.7, BothHours: 18.6 },
        { text: "Forgot password", AndroidHours: 7, IOSHours: 6.8, BothHours: 10.8 }
      ],
      additionalFeatures: [
        { text: "via Twitter", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "via Google+", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 }
      ]
    },
    {
      id: 'q2',
      title: 'Will you send Notifications to your users?',
      conditional: false,
      featuresForMVP: [
        { text: 'Integration', AndroidHours: 7.5, IOSHours: 7, BothHours: 11 },
        { text: 'Push notifications', AndroidHours: 24.5, IOSHours: 24, BothHours: 29 },
        { text: 'Pop up notifications', AndroidHours: 15, IOSHours: 14, BothHours: 19 },
      ],
      additionalFeatures: [
        { text: 'Deep linking', AndroidHours: 9.3, IOSHours: 9, BothHours: 11 },
      ]
    },
    {
      id: 'q3',
      title: 'Will your app have a Splash screen?',
      conditional: false,
       featuresForMVP: [
    { text: 'Integration', AndroidHours: 1, IOSHours: 0.9, BothHours: 1.2 },
    { text: 'Simple animation', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 }
  ],
  additionalFeatures: [
    { text: 'Custom animation effects', AndroidHours: 6, IOSHours: 5.4, BothHours: 7.2 }
  ]
    },
    {
      id: 'q4',
      title: 'Does your app need a Tutorial?',
      conditional: false,
      featuresForMVP: [
        { text: 'Integration', AndroidHours: 1, IOSHours: 0.9, BothHours: 1.2 },
        { text: 'Simple animation', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 }
      ],
      additionalFeatures: [
        { text: 'Custom animation effects', AndroidHours: 6, IOSHours: 5.4, BothHours: 7.2 }
      ]
    },
{
  id: 'q5',
  title: 'Will you allow Passengers to complete a Profile?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 15, IOSHours: 13.5, BothHours: 18 },
    { text: 'Edit Email', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 },
    { text: 'Edit Phone', AndroidHours: 7, IOSHours: 6.3, BothHours: 8.4 },
    { text: 'Edit Home/work addresses', AndroidHours: 5, IOSHours: 4.5, BothHours: 6 }
  ],
  additionalFeatures: [
    { text: 'Edit Photo', AndroidHours: 8.5, IOSHours: 7.65, BothHours: 10.2 }
  ]
}
,
    {
  id: 'q6',
  title: 'Do you need a Payment screen for a Passenger’s app?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 1.5, IOSHours: 1.35, BothHours: 1.8 },
    { text: 'List of payment methods', AndroidHours: 28, IOSHours: 25.2, BothHours: 33.6 },
    { text: 'Add payment method', AndroidHours: 7, IOSHours: 6.3, BothHours: 8.4 },
    { text: 'Edit payment methods', AndroidHours: 7, IOSHours: 6.3, BothHours: 8.4 }
  ],
  additionalFeatures: []
}
,
    {
  id: 'q7',
  title: 'Do you need a screen with Promotions?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 0, IOSHours: 0, BothHours: 0 },
    { text: 'List of promo codes', AndroidHours: 18.5, IOSHours: 16.65, BothHours: 22.2 },
    { text: 'Add promo code', AndroidHours: 3, IOSHours: 2.7, BothHours: 3.6 }
  ],
  additionalFeatures: []
}
,
    {
  id: 'q8',
  title: 'Will there be a Help section?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 8.5, IOSHours: 7.65, BothHours: 10.2 },
    { text: 'Trips and Fare Review screen', AndroidHours: 8.5, IOSHours: 7.65, BothHours: 10.2 },
    { text: 'Select Trip screen', AndroidHours: 9.5, IOSHours: 8.55, BothHours: 11.4 },
    { text: 'List of trips', AndroidHours: 9.5, IOSHours: 8.55, BothHours: 11.4 },
    { text: 'Select an issue screen', AndroidHours: 4.5, IOSHours: 4.05, BothHours: 5.4 },
    { text: 'Tell us more screen', AndroidHours: 4.5, IOSHours: 4.05, BothHours: 6 }
  ],
  additionalFeatures: [
    { text: 'A guide to uber screen', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 },
    { text: 'Accessibility', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 },
    { text: 'Account and Payment', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 },
    { text: 'Driving with uber screen', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 },
    { text: 'Delivery screen', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 },
    { text: 'Events and Inquiries screen', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 },
    { text: 'Business travel screen', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 },
  ]
}
,
    {
  id: 'q9',
  title: 'Will you track users’ GPS Location?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 0, IOSHours: 0, BothHours: 0 },
    { text: 'Default GPS settings', AndroidHours: 6.5, IOSHours: 5.85, BothHours: 7.8 }
  ],
  additionalFeatures: [
    { text: 'Custom GPS settings', AndroidHours: 6.5, IOSHours: 5.85, BothHours: 7.8 }
  ]
}
,
    {
      id: "qn",
      title: "Do you need a design for your App?",
      options: [
        { text: "None", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "Simple", AndroidHours: 72, IOSHours: 50.4, BothHours: 93.6 },
        { text: "Custom", AndroidHours: 216, IOSHours: 151.2, BothHours: 280.8 }
      ]
    }
  ],
  'Health': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', AndroidHours: 2, IOSHours: 1.4, BothHours: 2.6 },
        { text: 'IOS', AndroidHours: 4, IOSHours: 2.8, BothHours: 5.2 },
        { text: 'Both', AndroidHours: 3, IOSHours: 2.1, BothHours: 3.9 }
      ]
    },
    {
      id: "q1",
      title: "Do you need Registration & Authorization?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "via Email", AndroidHours: 13, IOSHours: 12.7, BothHours: 19.2 },
        { text: "via Phone", AndroidHours: 11, IOSHours: 10.7, BothHours: 17.2 },
        { text: "via Facebook", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "Add payment details", AndroidHours: 12, IOSHours: 11.7, BothHours: 18.6 },
        { text: "Forgot password", AndroidHours: 7, IOSHours: 6.8, BothHours: 10.8 }
      ],
      additionalFeatures: [
        { text: "via Twitter", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "via Google+", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 }
      ]
    },
    {
      id: 'q2',
      title: 'Will your app accept payments?',
      conditional: false,
      featuresForMVP: [
        { text: 'Integration', AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: 'Paypal', AndroidHours: 32, IOSHours: 30, BothHours: 49.1 }
      ],
      additionalFeatures: [
        { text: 'Braintree', AndroidHours: 35.5, IOSHours: 35, BothHours: 52.6 },
        { text: 'Stripe', AndroidHours: 29, IOSHours: 28.2, BothHours: 46.1 },
        { text: 'Dwolla', AndroidHours: 35.5, IOSHours: 35, BothHours: 52.6 },
        { text: 'Authorize.net', AndroidHours: 35.5, IOSHours: 35, BothHours: 52.6 }
      ]
    },
   {
  id: 'q3',
  title: 'Will there be a Posts Feed in your app?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 11.5, IOSHours: 10.35, BothHours: 13.8 },
    { text: 'List of posts', AndroidHours: 13, IOSHours: 11.7, BothHours: 15.6 },
    { text: 'Hide posts from certain users', AndroidHours: 6.5, IOSHours: 5.85, BothHours: 7.8 },
    { text: 'Like/unlike post', AndroidHours: 5.8, IOSHours: 5.22, BothHours: 6.96 },
  ],
  additionalFeatures: [
    { text: 'Report post', AndroidHours: 8.5, IOSHours: 7.65, BothHours: 10.2 },
    { text: 'Add/remove to favorites', AndroidHours: 5, IOSHours: 4.5, BothHours: 6 },
  ]
},
{
  id: 'q4',
  title: 'Will you let Users create their Posts?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3 },
    { text: 'Select post category', AndroidHours: 8.5, IOSHours: 7.65, BothHours: 10.2 },
    { text: 'Add photo', AndroidHours: 11.5, IOSHours: 10.35, BothHours: 13.8 },
  ],
  additionalFeatures: [
    { text: 'Comment post', AndroidHours: 14, IOSHours: 12.6, BothHours: 16.8 },
    { text: 'Share post', AndroidHours: 9.3, IOSHours: 8.37, BothHours: 11.16 },
  ]
},
{
  id: 'q5',
  title: 'Will Users be able to Tab Friends?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 6.5, IOSHours: 5.85, BothHours: 7.8 },
    { text: 'List of users', AndroidHours: 9.5, IOSHours: 8.55, BothHours: 11.4 },
    { text: 'Delete user', AndroidHours: 6.5, IOSHours: 5.85, BothHours: 7.8 },
  ],
  additionalFeatures: [
    { text: 'Add/remove to favorites', AndroidHours: 5, IOSHours: 4.5, BothHours: 6 },
  ]
},
{
  id: 'q6',
  title: 'Do you need an Articles Feed in your app?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 5.5, IOSHours: 4.95, BothHours: 6.6 },
    { text: 'Article details screen', AndroidHours: 6.5, IOSHours: 5.85, BothHours: 7.8 },
    { text: 'Share', AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3 },
  ],
  additionalFeatures: [
    { text: 'Rate article', AndroidHours: 5.5, IOSHours: 4.95, BothHours: 6.6 },
    { text: 'Add/remove to favorites', AndroidHours: 5, IOSHours: 4.5, BothHours: 6 },
  ]
},
{
  id: 'q7',
  title: "Do you need a User's Profile Screen?",
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3 },
    { text: 'Edit profile', AndroidHours: 12, IOSHours: 10.8, BothHours: 14.4 },
    { text: 'Edit photo', AndroidHours: 8.5, IOSHours: 7.65, BothHours: 10.2 },
  ],
  additionalFeatures: [
    { text: 'Edit Questionnaires Tab', AndroidHours: 6.3, IOSHours: 5.67, BothHours: 7.56 },
    { text: 'Edit Privacy Tab', AndroidHours: 6.3, IOSHours: 5.67, BothHours: 7.56 },
  ]
},
{
  id: 'q8',
  title: 'Will you let Users edit their own posts?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3 },
    { text: 'List of posts', AndroidHours: 13, IOSHours: 11.7, BothHours: 15.6 },
    { text: 'Delete post', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 },
    { text: 'Edit post', AndroidHours: 8, IOSHours: 7.2, BothHours: 9.6 },
  ],
  additionalFeatures: []
},
{
  id: 'q9',
  title: 'Will there be a Following feature in your app?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 2, IOSHours: 1.8, BothHours: 2.4 },
    { text: 'List of following', AndroidHours: 8.5, IOSHours: 7.65, BothHours: 10.2 },
    { text: 'Followers screen', AndroidHours: 10.9, IOSHours: 9.81, BothHours: 13.08 },
    { text: 'Follow', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 },
    { text: 'Send message', AndroidHours: 4.8, IOSHours: 4.32, BothHours: 5.76 },
  ],
  additionalFeatures: [
    { text: 'List of followers', AndroidHours: 16, IOSHours: 14.4, BothHours: 19.2 },
    { text: 'Block user', AndroidHours: 5.5, IOSHours: 4.95, BothHours: 6.6 },
    { text: 'Report user', AndroidHours: 8, IOSHours: 7.2, BothHours: 9.6 },
  ]
},
{
  id: 'q10',
  title: 'Do you need an Progress Calculators in your app?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 4.8, IOSHours: 4.32, BothHours: 5.76 },
    { text: 'Saved money', AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3 },
    { text: 'Non-smoking days', AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3 },
    { text: 'Non-drinking days', AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3 },
  ],
  additionalFeatures: [
    { text: 'Excess cigarettes', AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3 },
  ]
},
{
  id: 'q11',
  title: 'Will there be a List of Trainings in your app?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3 },
    { text: 'Cards Horizontal scroll lists', AndroidHours: 14, IOSHours: 12.6, BothHours: 16.8 },
    { text: 'List of categories', AndroidHours: 16, IOSHours: 14.4, BothHours: 19.2 },
    { text: 'List of cards', AndroidHours: 7, IOSHours: 6.3, BothHours: 8.4 },
  ],
  additionalFeatures: [
    { text: 'Category details screen', AndroidHours: 7.5, IOSHours: 6.75, BothHours: 9 },
    { text: 'Card details screen', AndroidHours: 4.5, IOSHours: 4.05, BothHours: 5.4 },
  ]
},
{
  id: 'q12',
  title: 'Will you let users create and manage a Training Plan?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 },
    { text: 'Setup plan flow', AndroidHours: 10.5, IOSHours: 9.45, BothHours: 12.6 },
    { text: 'Upload photo', AndroidHours: 12.2, IOSHours: 10.98, BothHours: 14.64 },
    { text: 'Upload video', AndroidHours: 5, IOSHours: 4.5, BothHours: 6 },
    { text: 'Upload audio', AndroidHours: 5, IOSHours: 4.5, BothHours: 6 },
    { text: 'Add text', AndroidHours: 7.3, IOSHours: 6.57, BothHours: 8.76 },
  ],
  additionalFeatures: [
    { text: 'List of badges', AndroidHours: 7, IOSHours: 6.3, BothHours: 8.4 },
    { text: 'Setup triggers', AndroidHours: 9, IOSHours: 8.1, BothHours: 10.8 },
    { text: 'List of switches', AndroidHours: 9, IOSHours: 8.1, BothHours: 10.8 },
  ]
},
{
  id: 'q13',
  title: 'Will there be an Award Screen in your app?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3 },
    { text: 'List of received awards', AndroidHours: 8.5, IOSHours: 7.65, BothHours: 10.2 },
    { text: 'Motivation screen', AndroidHours: 9.3, IOSHours: 8.37, BothHours: 11.16 },
    { text: 'Congrats screen', AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3 },
  ],
  additionalFeatures: [
    { text: 'List of next to receive awards', AndroidHours: 5.5, IOSHours: 4.95, BothHours: 6.6 },
    { text: 'Share result', AndroidHours: 5, IOSHours: 4.5, BothHours: 6 },
  ]
},
    {
  id: 'q14',
  title: 'Do you need a Notifications screen in your app?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3 },
    { text: 'List of notifications', AndroidHours: 10.5, IOSHours: 9.45, BothHours: 12.6 },
    { text: 'Clean', AndroidHours: 4, IOSHours: 3.6, BothHours: 4.8 }
  ],
  additionalFeatures: []
},
{
  id: 'q15',
  title: 'Do you need a Messages screen in your app?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3 },
    { text: 'Search', AndroidHours: 7, IOSHours: 6.3, BothHours: 8.4 },
    { text: 'Chats tab', AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3 },
    { text: 'List of chats', AndroidHours: 15, IOSHours: 13.5, BothHours: 18 },
    { text: 'Send text', AndroidHours: 47.5, IOSHours: 42.75, BothHours: 57 },
    { text: 'Send photo', AndroidHours: 15, IOSHours: 13.5, BothHours: 18 }
  ],
  additionalFeatures: [
    { text: 'Search results screen', AndroidHours: 7, IOSHours: 6.3, BothHours: 8.4 },
    { text: 'Chat details screen', AndroidHours: 11.5, IOSHours: 10.35, BothHours: 13.8 },
    { text: 'Contacts tab', AndroidHours: 6, IOSHours: 5.4, BothHours: 7.2 }
  ]
},
{
  id: 'q16',
  title: 'Will there be a screen with app details in your app?',
  conditional: false,
  featuresForMVP: [
    { text: 'Integration', AndroidHours: 8, IOSHours: 7.2, BothHours: 9.6 },
    { text: 'Invite friends', AndroidHours: 5, IOSHours: 4.5, BothHours: 6 },
    { text: 'About screen', AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3 },
    { text: 'Logout', AndroidHours: 5, IOSHours: 4.5, BothHours: 6 },
    { text: 'Delete account', AndroidHours: 6.5, IOSHours: 5.85, BothHours: 7.8 }
  ],
  additionalFeatures: [
    { text: 'Terms and conditions screen', AndroidHours: 2.5, IOSHours: 2.25, BothHours: 3 },
    { text: 'Privacy policy screen', AndroidHours: 3, IOSHours: 2.7, BothHours: 3.6 }
  ]
},
    {
      id: 'qn',
      title: 'Do you need a design for your App?',
      options: [
        { text: 'None', AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: 'Simple', AndroidHours: 72, IOSHours: 50.4, BothHours: 93.6 },
        { text: 'Custom', AndroidHours: 216, IOSHours: 151.2, BothHours: 280.8 }
      ]
    }
  ],
  'Maternity': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', AndroidHours: 2, IOSHours: 1.4, BothHours: 2.6 },
        { text: 'IOS', AndroidHours: 4, IOSHours: 2.8, BothHours: 5.2 },
        { text: 'Both', AndroidHours: 3, IOSHours: 2.1, BothHours: 3.9 }
      ]
    },
    {
      id: "q1",
      title: "Do you need Registration & Authorization?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "via Email", AndroidHours: 13, IOSHours: 12.7, BothHours: 19.2 },
        { text: "via Phone", AndroidHours: 11, IOSHours: 10.7, BothHours: 17.2 },
        { text: "via Facebook", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "Add payment details", AndroidHours: 12, IOSHours: 11.7, BothHours: 18.6 },
        { text: "Forgot password", AndroidHours: 7, IOSHours: 6.8, BothHours: 10.8 }
      ],
      additionalFeatures: [
        { text: "via Twitter", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "via Google+", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 }
      ]
    },
    {
      id: 'q2',
      title: 'Will you send Notifications to your users?',
      conditional: false,
      featuresForMVP: [
        { "text": "Integration", "AndroidHours": 7.5, "IOSHours": 6, "BothHours": 10 },
        { "text": "Push notifications", "AndroidHours": 24.5, "IOSHours": 23.48, "BothHours": 47.32 },
        { "text": "Pop up notifications", "AndroidHours": 15, "IOSHours": 14.52, "BothHours": 30.68 }
      ],
      additionalFeatures: [
        { "text": "Deep linking", "AndroidHours": 9.3, "IOSHours": 9, "BothHours": 12 }
      ]
    },
    {
      id: 'q3',
      title: 'Will your app need a User Profile screen?',
      conditional: false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 3, "IOSHours": 2.7, "BothHours": 3.9 },
        { "text": "Edit profile", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 },
        { "text": "Upload avatar", "AndroidHours": 10.3, "IOSHours": 9.27, "BothHours": 13.39 },
        { "text": "Messages screen", "AndroidHours": 7.5, "IOSHours": 6.75, "BothHours": 9.75 },
        { "text": "List of chats", "AndroidHours": 15, "IOSHours": 13.5, "BothHours": 19.5 },
        { "text": "Send text", "AndroidHours": 47.5, "IOSHours": 42.75, "BothHours": 61.75 },
        { "text": "Gallery", "AndroidHours": 7, "IOSHours": 6.3, "BothHours": 9.1 },
        { "text": "Add to friends", "AndroidHours": 4.5, "IOSHours": 4.05, "BothHours": 5.85 }
      ],
      "additionalFeatures": [
        { "text": "Chat details screen", "AndroidHours": 11.5, "IOSHours": 10.35, "BothHours": 14.95 },
        { "text": "Send emoji", "AndroidHours": 3, "IOSHours": 2.7, "BothHours": 3.9 },
        { "text": "Send photo", "AndroidHours": 15, "IOSHours": 13.5, "BothHours": 19.5 },
        { "text": "Maternity photo-shoots", "AndroidHours": 23, "IOSHours": 20.7, "BothHours": 29.9 },
        { "text": "Open photo", "AndroidHours": 3, "IOSHours": 2.7, "BothHours": 3.9 },
        { "text": "Bookmarks screen", "AndroidHours": 15, "IOSHours": 13.5, "BothHours": 19.5 }
      ]

    },
    {
      id: 'q4',
      title: 'Will you let users manage the Settings?',
      conditional: false,
      featuresForMVP: [
        { text: 'Integration', AndroidHours: 52.6, IOSHours: 36.82, BothHours: 68.38 },
        { text: 'Terms and conditions screen', AndroidHours: 2.5, IOSHours: 2.1, BothHours: 5 },
        { text: 'Change metrics', AndroidHours: 6, IOSHours: 5.5, BothHours: 9.7 }
      ],
      additionalFeatures: [
      ]
    },
    {
      id: 'q5',
      title: 'Will there be a Pregnancy Tracking screen?',
      conditional: false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 3.8, "IOSHours": 3.42, "BothHours": 4.94 },
        { "text": "Measurements", "AndroidHours": 18, "IOSHours": 16.2, "BothHours": 23.4 },
        { "text": "Graph", "AndroidHours": 9, "IOSHours": 8.1, "BothHours": 11.7 }
      ],
      additionalFeatures: [
      ]
    },
    {
      id: 'q6',
      title: 'Will your app have a Shopping screen?',
      conditional: false,
      featuresForMVP: [
        { "text": "Integration", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 },
        { "text": "List of categories", "AndroidHours": 16, "IOSHours": 14.4, "BothHours": 20.8 },
        { "text": "Category details screen", "AndroidHours": 7.5, "IOSHours": 6.75, "BothHours": 9.75 },
        { "text": "Add to order list", "AndroidHours": 6.3, "IOSHours": 5.67, "BothHours": 8.19 },
        { "text": "Rate", "AndroidHours": 8.3, "IOSHours": 7.47, "BothHours": 10.79 }
      ],
      additionalFeatures: [
        { "text": "List of items", "AndroidHours": 13, "IOSHours": 11.7, "BothHours": 16.9 },
        { "text": "Item details screen", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 }
      ]

    },
    {
      id: 'q7',
      title: 'Do you need an Order screen?',
      conditional: false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 },
        { "text": "List of items", "AndroidHours": 13, "IOSHours": 11.7, "BothHours": 16.9 },
        { "text": "Delete item", "AndroidHours": 5.5, "IOSHours": 4.95, "BothHours": 7.15 },
        { "text": "List of Order", "AndroidHours": 11.8, "IOSHours": 10.62, "BothHours": 15.34 },
        { "text": "Order detail screen", "AndroidHours": 7, "IOSHours": 6.3, "BothHours": 9.1 }
      ],
      "additionalFeatures": [
        { "text": "Set number of items", "AndroidHours": 4.5, "IOSHours": 4.05, "BothHours": 5.85 },
        { "text": "Send request to admin", "AndroidHours": 6.3, "IOSHours": 5.67, "BothHours": 8.19 },
        { "text": "History of orders", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 }
      ]

    },
    {
      id: 'q8',
      title: 'Will there be a Blog in your app?',
      conditional: false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 },
        { "text": "List of posts", "AndroidHours": 13, "IOSHours": 11.7, "BothHours": 16.9 },
        { "text": "Post details screen", "AndroidHours": 11.2, "IOSHours": 10.08, "BothHours": 14.56 },
        { "text": "Like/unlike post", "AndroidHours": 5.8, "IOSHours": 5.22, "BothHours": 7.54 },
        { "text": "Add comment", "AndroidHours": 11, "IOSHours": 9.9, "BothHours": 14.3 }
      ],
      "additionalFeatures": [
        { "text": "List of comments", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 },
        { "text": "Add/remove to bookmarks", "AndroidHours": 5.5, "IOSHours": 4.95, "BothHours": 7.15 }
      ]

    },
    {
      id: 'q9',
      title: 'Do you need a Doctors’ side?',
      conditional: false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 },
        { "text": "Login screen", "AndroidHours": 9.5, "IOSHours": 8.55, "BothHours": 12.35 },
        { "text": "List of patients", "AndroidHours": 14, "IOSHours": 12.6, "BothHours": 18.2 },
        { "text": "Select date range", "AndroidHours": 7.5, "IOSHours": 6.75, "BothHours": 9.75 }
      ],
      "additionalFeatures": [
        { "text": "Patient details screen", "AndroidHours": 13, "IOSHours": 11.7, "BothHours": 16.9 },
        { "text": "Reports", "AndroidHours": 13.5, "IOSHours": 12.15, "BothHours": 17.55 }
      ]
    },
    {
      id: 'q10',
      title: 'Do you need an Admin Panel in your app?',
      conditional: false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 0, "IOSHours": 0, "BothHours": 0 },
        { "text": "Authorization", "AndroidHours": 11, "IOSHours": 9.9, "BothHours": 14.3 },
        { "text": "Users management", "AndroidHours": 25, "IOSHours": 22.5, "BothHours": 32.5 },
        { "text": "Requests management", "AndroidHours": 14, "IOSHours": 12.6, "BothHours": 18.2 }
      ],
      "additionalFeatures": [
        { "text": "Blog management", "AndroidHours": 10, "IOSHours": 9, "BothHours": 13 },
        { "text": "Comments management", "AndroidHours": 6.5, "IOSHours": 5.85, "BothHours": 8.45 },
        { "text": "Shop management", "AndroidHours": 14.5, "IOSHours": 13.05, "BothHours": 18.85 },
        { "text": "Doctors management", "AndroidHours": 15.5, "IOSHours": 13.95, "BothHours": 20.15 }
      ]
    },
    {
      id: 'qn',
      title: 'Do you need a design for your App?',
      options: [
        { text: 'None', AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: 'Simple', AndroidHours: 72, IOSHours: 50.4, BothHours: 93.6 },
        { text: 'Custom', AndroidHours: 216, IOSHours: 151.2, BothHours: 280.8 }
      ]
    }
  ],
  "Video": [
    {
      "id": "q0",
      "title": "What type of app are you building?",
      "conditional": true,
      "options": [
        { "text": "Android", "AndroidHours": 2, "IOSHours": 1.4, "BothHours": 2.6 },
        { "text": "IOS", "AndroidHours": 4, "IOSHours": 2.8, "BothHours": 5.2 },
        { "text": "Both", "AndroidHours": 3, "IOSHours": 2.1, "BothHours": 3.9 }
      ]
    },
    {
      id: "q1",
      title: "Do you need Registration & Authorization?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", AndroidHours: 0, IOSHours: 0, BothHours: 0 },
        { text: "via Email", AndroidHours: 13, IOSHours: 12.7, BothHours: 19.2 },
        { text: "via Phone", AndroidHours: 11, IOSHours: 10.7, BothHours: 17.2 },
        { text: "via Facebook", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "Add payment details", AndroidHours: 12, IOSHours: 11.7, BothHours: 18.6 },
        { text: "Forgot password", AndroidHours: 7, IOSHours: 6.8, BothHours: 10.8 }
      ],
      additionalFeatures: [
        { text: "via Twitter", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 },
        { text: "via Google+", AndroidHours: 9, IOSHours: 8.8, BothHours: 13.8 }
      ]
    },
    {
      "id": "q2",
      "title": "Will you let users Add Friends automatically?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 10.8, "IOSHours": 9.72, "BothHours": 14.04 },
        { "text": "from Facebook", "AndroidHours": 6.5, "IOSHours": 5.85, "BothHours": 8.45 },
        { "text": "from Twitter", "AndroidHours": 11.5, "IOSHours": 10.35, "BothHours": 14.95 }
      ],
      "additionalFeatures": [
        { "text": "from Google+", "AndroidHours": 9.5, "IOSHours": 8.55, "BothHours": 12.35 },
        { "text": "Skip Button", "AndroidHours": 1.5, "IOSHours": 1.35, "BothHours": 1.95 }
      ]

    },
    {
      "id": "q3",
      "title": "Does your app need a Main Screen?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 14.3, "IOSHours": 12.87, "BothHours": 18.59 },
        { "text": "Popular Broadcasts", "AndroidHours": 15, "IOSHours": 13.5, "BothHours": 19.5 },
        { "text": "Recent Broadcasts", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 },
        { "text": "Start Broadcasting Button", "AndroidHours": 8.5, "IOSHours": 7.65, "BothHours": 11.05 }
      ],
      "additionalFeatures": [
        { "text": "Online Broadcast in a Feed", "AndroidHours": 28.5, "IOSHours": 25.65, "BothHours": 37.05 },
        { "text": "Random Broadcast", "AndroidHours": 9.5, "IOSHours": 8.55, "BothHours": 12.35 }
      ]

    },
    {
      "id": "q4",
      "title": "Will users be able to Broadcast?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 280, "IOSHours": 252, "BothHours": 364 },
        { "text": "Broadcast Headline", "AndroidHours": 4, "IOSHours": 3.6, "BothHours": 5.2 },
        { "text": "Show Location", "AndroidHours": 31, "IOSHours": 27.9, "BothHours": 40.3 },
        { "text": "Hearts setting", "AndroidHours": 15.5, "IOSHours": 13.95, "BothHours": 20.15 },
        { "text": "Camera Change with Button", "AndroidHours": 10, "IOSHours": 9, "BothHours": 13 },
        { "text": "Broadcast Details", "AndroidHours": 12.5, "IOSHours": 11.8, "BothHours": 16 },
        { "text": "Send Follow me request", "AndroidHours": 12, "IOSHours": 11, "BothHours": 16 },
        { "text": "Stop Broadcast", "AndroidHours": 5.5, "IOSHours": 4.8, "BothHours": 8.2 },

      ],
      "additionalFeatures": [
        { "text": "Followers-only Chat", "AndroidHours": 140, "IOSHours": 126, "BothHours": 182 },
        { "text": "Live on Twitter", "AndroidHours": 46, "IOSHours": 41.4, "BothHours": 59.8 },
        { "text": "Live on Facebook", "AndroidHours": 46, "IOSHours": 41.4, "BothHours": 59.8 },
        { "text": "Double-tap Camera Change", "AndroidHours": 10, "IOSHours": 9, "BothHours": 13 },
        { "text": "Send Share Broadcast request", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 },
        { "text": "Write a message in broadcast", "AndroidHours": 18, "IOSHours": 17.5, "BothHours": 26 },
        { "text": "Share Broadcast", "AndroidHours": 12, "IOSHours": 11, "BothHours": 16 },
        { "text": "Integration", "AndroidHours": 2.5, "IOSHours": 2, "BothHours": 5 },

      ]

    },
    {
      "id": "q5",
      "title": "Will you show users Broadcast Statistics?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 6.8, "IOSHours": 6.12, "BothHours": 8.84 },
        { "text": "Number of Live Viewers", "AndroidHours": 9, "IOSHours": 8.1, "BothHours": 11.7 },
        { "text": "Number of Replay Viewers", "AndroidHours": 7, "IOSHours": 6.3, "BothHours": 9.1 },
        { "text": "Total View time", "AndroidHours": 16, "IOSHours": 14.4, "BothHours": 20.8 },
        { "text": "Hide Broadcast", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 },
        { "text": "Delete Broadcast", "AndroidHours": 8, "IOSHours": 7.2, "BothHours": 10.4 }
      ],
      "additionalFeatures": [
        { "text": "View time per Viewer", "AndroidHours": 15, "IOSHours": 13.5, "BothHours": 19.5 },
        { "text": "Duration", "AndroidHours": 4.5, "IOSHours": 4.05, "BothHours": 5.85 },
        { "text": "Number of stars", "AndroidHours": 10, "IOSHours": 9, "BothHours": 13 },
        { "text": "Save to Gallery", "AndroidHours": 8, "IOSHours": 7.2, "BothHours": 10.4 }
      ]
    },
    {
      "id": "q6",
      "title": "Will you allow Group Broadcasts?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 95, "IOSHours": 85.5, "BothHours": 123.5 },
        { "text": "Group name", "AndroidHours": 6, "IOSHours": 5.4, "BothHours": 7.8 },
        { "text": "Add Members", "AndroidHours": 13.5, "IOSHours": 12.15, "BothHours": 17.55 }
      ],
      "additionalFeatures": [
        { "text": "Private group", "AndroidHours": 7, "IOSHours": 6.3, "BothHours": 9.1 }
      ]

    },
    {
      "id": "q7",
      "title": "Will Users be able to watch Broadcasts?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 95, "IOSHours": 85.5, "BothHours": 123.5 },
        { "text": "Send a message", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 },
        { "text": "Subscribe to Broadcaster", "AndroidHours": 11.5, "IOSHours": 10.35, "BothHours": 14.95 },
        { "text": "Viewers", "AndroidHours": 14, "IOSHours": 12.6, "BothHours": 18.2 },
        { "text": "Hide / Show Chat", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 },
        { "text": "Number of viewers online", "AndroidHours": 10.5, "IOSHours": 10, "BothHours": 15 },

      ],
      "additionalFeatures": [
        { "text": "Broadcast Summary", "AndroidHours": 11, "IOSHours": 9.9, "BothHours": 14.3 },
        { "text": "See Viewer Profile", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 },
        { "text": "Share Broadcast", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 },
        { "text": "Report a broadcast", "AndroidHours": 7, "IOSHours": 6.3, "BothHours": 9.1 },
        { "text": "Animation of likes", "AndroidHours": 3, "IOSHours": 2.7, "BothHours": 3.9 }
      ]

    },
    {
      "id": "q8",
      "title": "Will Users be able to watch Replays?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 3.8, "IOSHours": 3.42, "BothHours": 4.94 },
        { "text": "Rewind videos", "AndroidHours": 7, "IOSHours": 6.3, "BothHours": 9.1 },
        { "text": "Share specific Broadcast moment", "AndroidHours": 15, "IOSHours": 13.5, "BothHours": 19.5 }
      ],
      "additionalFeatures": [
        { "text": "Hide / show chat", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 }
      ]

    },
    {
      "id": "q9",
      "title": "Will you show the list of Live Broadcasts?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 9.8, "IOSHours": 8.82, "BothHours": 12.74 },
        { "text": "Number of Live Viewers", "AndroidHours": 9, "IOSHours": 8.1, "BothHours": 11.7 },
        { "text": "Broadcast Name", "AndroidHours": 5.5, "IOSHours": 4.95, "BothHours": 7.15 },
        { "text": "Broadcaster's Name", "AndroidHours": 5.5, "IOSHours": 4.95, "BothHours": 7.15 },
        { "text": "Sorting by Recent", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 }
      ],
      "additionalFeatures": [
        { "text": "Updated Broadcast Cover", "AndroidHours": 21.5, "IOSHours": 19.35, "BothHours": 27.95 },
        { "text": "Sort by Recommended", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 }
      ]
    },
    {
      "id": "q10",
      "title": "Will you allow Location-based Broadcasts?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 9.8, "IOSHours": 8.82, "BothHours": 12.74 },
        { "text": "Online Broadcasts", "AndroidHours": 18, "IOSHours": 16.2, "BothHours": 23.4 },
        { "text": "Offline Broadcasts", "AndroidHours": 18, "IOSHours": 16.2, "BothHours": 23.4 }
      ],
      "additionalFeatures": []
    },
    {
      "id": "q11",
      "title": "Will there be a Notification Screen?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 9.8, "IOSHours": 8.82, "BothHours": 12.74 },
        { "text": "New Follower", "AndroidHours": 12.5, "IOSHours": 11.25, "BothHours": 16.25 },
        { "text": "Offline Broadcast Watched", "AndroidHours": 11.5, "IOSHours": 10.35, "BothHours": 14.95 }
      ],
      "additionalFeatures": [
        { "text": "Offline Broadcast Watched", "AndroidHours": 11.5, "IOSHours": 10.35, "BothHours": 14.95 },
        { "text": "Someone goes Live", "AndroidHours": 11.5, "IOSHours": 10.35, "BothHours": 14.95 }
      ]
    },
    {
      "id": "q12",
      "title": "Do you need a Screen that shows Users?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 3.8, "IOSHours": 3.42, "BothHours": 4.94 },
        { "text": "List of Popular Users", "AndroidHours": 16, "IOSHours": 14.4, "BothHours": 20.8 },
        { "text": "List of Followers", "AndroidHours": 16, "IOSHours": 14.4, "BothHours": 20.8 },
        { "text": "List of Facebook friends", "AndroidHours": 18, "IOSHours": 16.2, "BothHours": 23.4 },
        { "text": "Add Friends from Address book", "AndroidHours": 16.5, "IOSHours": 14.85, "BothHours": 21.45 }
      ],
      "additionalFeatures": [
        { "text": "List of Twitter followers", "AndroidHours": 19.5, "IOSHours": 17.55, "BothHours": 25.35 },
        { "text": "List of Google+ friends", "AndroidHours": 19.5, "IOSHours": 17.55, "BothHours": 25.35 }
      ]

    },
    {
      "id": "q13",
      "title": "Will you show brief User Details?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 3.8, "IOSHours": 3.42, "BothHours": 4.94 },
        { "text": "User Photo", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 },
        { "text": "List of Followers", "AndroidHours": 16, "IOSHours": 14.4, "BothHours": 20.8 },
        { "text": "Follow Button", "AndroidHours": 6.5, "IOSHours": 5.85, "BothHours": 8.45 },
        { "text": "Add to Black List", "AndroidHours": 8, "IOSHours": 7.2, "BothHours": 10.4 }
      ],
      "additionalFeatures": [
        { "text": "List of Followed Users", "AndroidHours": 15, "IOSHours": 13.5, "BothHours": 19.5 },
        { "text": "User Location", "AndroidHours": 17, "IOSHours": 15.3, "BothHours": 22.1 },
        { "text": "List of Recent Broadcasts", "AndroidHours": 13, "IOSHours": 11.7, "BothHours": 16.9 },
        { "text": "Go to Twitter Profile", "AndroidHours": 2.5, "IOSHours": 2.25, "BothHours": 3.25 }
      ]

    },
    {
      "id": "q14",
      "title": "Will there be Search in you app?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 3.8, "IOSHours": 3.42, "BothHours": 4.94 },
        { "text": "User Search", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 },
        { "text": "Broadcast Search", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 }
      ],
      "additionalFeatures": [
        { "text": "Search by GEO", "AndroidHours": 25, "IOSHours": 22.5, "BothHours": 32.5 }
      ]
    },
    {
      "id": "q15",
      "title": "Do you need a User Profile Screen?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 3.8, "IOSHours": 3.42, "BothHours": 4.94 },
        { "text": "User Photo", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 },
        { "text": "List of Groups", "AndroidHours": 7, "IOSHours": 6.3, "BothHours": 9.1 },
        { "text": "List of Followers", "AndroidHours": 16, "IOSHours": 14.4, "BothHours": 20.8 },
        { "text": "List of Personal Broadcasts", "AndroidHours": 13.5, "IOSHours": 12.15, "BothHours": 17.55 },
        { "text": "Share a Profile", "AndroidHours": 4.5, "IOSHours": 4.05, "BothHours": 5.85 },
        { "text": "Write feedback", "AndroidHours": 7, "IOSHours": 6.4, "BothHours": 11 },
        { "text": "Legal information", "AndroidHours": 5.5, "IOSHours": 5, "BothHours": 8 },
        { "text": "Log out", "AndroidHours": 3.8, "IOSHours": 3.42, "BothHours": 4.94 },

      ],
      "additionalFeatures": [
        { "text": "List of Followed Users", "AndroidHours": 15, "IOSHours": 13.5, "BothHours": 19.5 },
        { "text": "Black List", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 },
        { "text": "List of Recently Viewed", "AndroidHours": 15, "IOSHours": 13.5, "BothHours": 19.5 },
        { "text": "List of Connected Accounts", "AndroidHours": 15, "IOSHours": 13.5, "BothHours": 19.5 },
        { "text": "Help Center", "AndroidHours": 16, "IOSHours": 14.4, "BothHours": 20.8 }
      ]

    },
    {
      "id": "q16",
      "title": "Will you allow users to edit a Profile?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 20, "IOSHours": 18, "BothHours": 26 },
        { "text": "User Photo", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 },
        { "text": "Name", "AndroidHours": 3.5, "IOSHours": 3.15, "BothHours": 4.55 },
        { "text": "Login", "AndroidHours": 12.5, "IOSHours": 11.25, "BothHours": 16.25 }
      ],
      "additionalFeatures": [
        { "text": "Intro", "AndroidHours": 3, "IOSHours": 2.7, "BothHours": 3.9 }
      ]

    },
    {
      "id": "q17",
      "title": "Will users manage the Notification Settings?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 3.8, "IOSHours": 3.42, "BothHours": 4.94 },
        { "text": "Notification sound", "AndroidHours": 8.5, "IOSHours": 7.65, "BothHours": 11.05 },
        { "text": "Followed User is Live", "AndroidHours": 4.5, "IOSHours": 4.05, "BothHours": 5.85 },
        { "text": "Add to Group", "AndroidHours": 4.5, "IOSHours": 4.05, "BothHours": 5.85 }
      ],
      "additionalFeatures": [
        { "text": "Encouraged Broadcast", "AndroidHours": 4.5, "IOSHours": 4.05, "BothHours": 5.85 },
        { "text": "Recommended Broadcast", "AndroidHours": 4.5, "IOSHours": 4.05, "BothHours": 5.85 },
        { "text": "New Follower", "AndroidHours": 12.5, "IOSHours": 11.25, "BothHours": 16.25 }
      ]

    },
    {
      "id": "q18",
      "title": "Will users manage the Broadcast Settings?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 18.8, "IOSHours": 16.92, "BothHours": 24.44 },
        { "text": "Auto Save", "AndroidHours": 21, "IOSHours": 18.9, "BothHours": 27.3 },
        { "text": "Auto Delete after 24hr", "AndroidHours": 17.5, "IOSHours": 15.75, "BothHours": 22.75 },
        { "text": "Moderate Comments", "AndroidHours": 27, "IOSHours": 24.3, "BothHours": 35.1 }
      ],
      "additionalFeatures": [
        { "text": "Get Super Hearts", "AndroidHours": 28, "IOSHours": 25.2, "BothHours": 36.4 },
        { "text": "Moderate Broadcasts", "AndroidHours": 27, "IOSHours": 24.3, "BothHours": 35.1 },
        { "text": "Periscope-producer", "AndroidHours": 140, "IOSHours": 126, "BothHours": 182 }
      ]
    },
    {
      "id": "q19",
      "title": "Will you let users manage the Settings?",
      "conditional": false,
      "featuresForMVP": [
        { "text": "Integration", "AndroidHours": 10, "IOSHours": 9, "BothHours": 13 },
        { "text": "Automatically Accept Group Invites", "AndroidHours": 12, "IOSHours": 10.8, "BothHours": 15.6 },
        { "text": "Preferred Language", "AndroidHours": 9.5, "IOSHours": 8.55, "BothHours": 12.35 },
        { "text": "Log Out of all Devices", "AndroidHours": 11, "IOSHours": 9.9, "BothHours": 14.3 },
        { "text": "Deactivate Account", "AndroidHours": 5.3, "IOSHours": 4.77, "BothHours": 6.89 }
      ],
      "additionalFeatures": [
        { "text": "Night Mode", "AndroidHours": 11, "IOSHours": 9.9, "BothHours": 14.3 },
        { "text": "Video Autoplay", "AndroidHours": 5, "IOSHours": 4.5, "BothHours": 6.5 }
      ]
    },
    {
      "id": "qn",
      "title": "Do you need a design for your App?",
      "options": [
        { "text": "None", "AndroidHours": 0, "IOSHours": 0, "BothHours": 0 },
        { "text": "Simple", "AndroidHours": 72, "IOSHours": 50.4, "BothHours": 93.6 },
        { "text": "Custom", "AndroidHours": 216, "IOSHours": 151.2, "BothHours": 280.8 }
      ]
    }
  ],
  '+ Add': [
    {
      id: 'q0',
      final: true,
      title: 'What type of app are you building?',
      conditional: true,

    }
  ],
};
