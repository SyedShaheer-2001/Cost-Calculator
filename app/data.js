// data.js
export const data = {
  'Dating': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', hours: 2 },
        { text: 'IOS', hours: 4 },
        { text: 'Both', hours: 3 },
      ],
    },
    {
      id: 'q1',
      title: 'Do you need Registration & Authorization?',
      conditional: true,
      featuresForMVP: [
        { text: 'Integration', hours: 0 },
        { text: 'via Email', hours: 19.2 },
        { text: 'via Phone', hours: 17.2 },
        { text: 'via Facebook', hours: 13.8 },
        { text: 'Add payment details', hours: 18.6 }
      ],
      additionalFeatures: [
        { text: 'via Twitter', hours: 13.8 },
        { text: 'via Google+', hours: 13.8 },
      ],
    },
    {
      id: 'q2',
      title: 'Will you allow users to complete a profile?',
      conditional: false,
      featuresForMVP: [
        { text: 'Integration', hours: 8.8 },
        { text: 'View Profile', hours: 21.1 },
        { text: 'Edit Profile', hours: 13.3 },
        { text: 'Edit profile details', hours: 16.1 },
        { text: 'Change Password', hours: 10.3 },
      ],
      additionalFeatures: [
        { text: 'Online Status', hours: 6.9 },
        { text: 'Edit Phone', hours: 12.3 },
      ],
    },
    {
      id: 'q3',
      title: 'Do you need Chats in your app?',
      conditional: false,
      featuresForMVP: [
        { text: 'Integration', hours: 59.8 },
        { text: 'List of chats', hours: 25 },
        { text: 'Delete chat', hours: 24 },
        { text: 'Chat details screen', hours: 18.1 },
        { text: 'Send text', hours: 71.3 },
      ],
      additionalFeatures: [
        { text: 'Send location', hours: 26.9 },
        { text: 'Send audio record', hours: 26.9 },
        { text: 'Clear chat', hours: 22.6 },
        { text: 'Delete user from chat', hours: 11.3 },
        { text: 'Typing status', hours: 13.3 },
      ],
    },
    {
      id: 'q4',
      title: 'Do you need Group Chats in your app?',
      conditional: false,
      featuresForMVP: [
        { text: 'Integration', hours: 40.3 },
        { text: 'Select users', hours: 15.2 },
        { text: 'Send invitation to users', hours: 24 },
      ],
      additionalFeatures: [],
    },
    {
      id: 'q5',
      title: 'Will you send Notifications to your users?',
      conditional: false,
      featuresForMVP: [
        { text: 'Integration', hours: 7.5 },
        { text: 'Push notifications', hours: 36.4 },
        { text: 'Pop up notifications', hours: 23.6 },
      ],
      additionalFeatures: [
        { text: 'Deep linking', hours: 14.5 },
      ],
    },
    {
      id: 'q6',
      title: 'Will your app have a Splash screen?',
      conditional: false,
      featuresForMVP: [
        { text: 'Integration', hours: 2 },
        { text: 'Simple animation', hours: 7.8 },
      ],
      additionalFeatures: [
        { text: 'Custom animation effects', hours: 11.8 },
      ],
    },
    {
      id: 'q7',
      title: 'Will you need an Info screen in your app?',
      conditional: false,
      featuresForMVP: [
        { text: 'Integration', hours: 3.9 },
        { text: 'Terms of Use & Privacy Policy', hours: 4.9 },
        { text: 'About us screen', hours: 4.9 },

      ],
      additionalFeatures: [
        { text: 'Feedback form', hours: 11.3 },
      ],
    },
    {
      id: 'q8',
      title: 'Will your app accept payments?',
      conditional: false,
      featuresForMVP: [
        { text: 'Integration', hours: 0 },
        { text: 'Paypal', hours: 49.1 },
      ],
      additionalFeatures: [
        { text: 'Braintree', hours: 52.6 },
        { text: 'Stripe', hours: 46.1 },
        { text: 'Dwolla', hours: 52.6 },
        { text: 'Authorize.net', hours: 52.6 },
      ],
    },
    {
      id: "q9",
      title: "Do you need an Admin Panel in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 0 },
        { text: "Authorization", hours: 11 },
        { text: "User management", hours: 25 }
      ],
      additionalFeatures: [
        { text: "Posts management", hours: 25 },
        { text: "Categories management", hours: 9 },
        { text: "Languages management", hours: 9 },
        { text: "Payment administration", hours: 25 }
      ]
    },
    {
      id: "q10",
      title: "Will your app have the Events screen?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 5.8 },
        { text: "List of events by category", hours: 15.7 },
        { text: "Join event", hours: 9.8 },
        { text: "Create event screen", hours: 15.3 },
        { text: "Add details of event", hours: 12.3 }
      ],
      additionalFeatures: [
        { text: "Category details screen", hours: 12.8 },
        { text: "Add users for event", hours: 26.5 },
        { text: "Multiselect users from friends list", hours: 10.8 }
      ]
    },
    {
      id: "q11",
      title: "Do you need a Home screen in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 7.8 },
        { text: "Friends posts in feed", hours: 14.3 },
        { text: "Invites in feed", hours: 15.3 }
      ],
      additionalFeatures: []
    },
    {
      id: "q12",
      title: "Will there be a screen to manage the Matches?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 6.8 },
        { text: "List of profiles", hours: 28.4 },
        { text: "Add to friends", hours: 6.9 },
        { text: "Start chat", hours: 5.9 }
      ],
      additionalFeatures: [
        { text: "Invite to friend", hours: 6.9 },
        { text: "Filter screen", hours: 14.3 },
        { text: "Swipe navigation", hours: 29.3 }
      ]
    },
    {
      id: "q13",
      title: "Does your app need a Tutorial?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 0 },
        { text: "Simple animation", hours: 7.8 }
      ],
      additionalFeatures: [
        { text: "Custom animation effects", hours: 11.8 }
      ]
    },
    {
      id: "q14",
      title: "Will you let users manage the Settings?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 19.5 },
        { text: "Payment method screen", hours: 32.8 },
        { text: "On/off calendar sync", hours: 11.5 },
        { text: "Terms of service screen", hours: 5.8 },
        { text: "Privacy policy screen", hours: 5.8 }
      ],
      additionalFeatures: [
        { text: "On/off notification", hours: 11.5 },
        { text: "On/off sounds/vibration", hours: 9.8 },
        { text: "Feedback screen", hours: 16.4 }
      ]
    },
    {
      id: "qn",
      title: "Do you need a design for your App?",
      options: [
        { text: "None", hours: 0 },
        { text: "Simple", hours: 72 },
        { text: "Custom", hours: 216 }
      ]
    },

  ],
  'Events': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', hours: 2 },
        { text: 'IOS', hours: 4 },
        { text: 'Both', hours: 3 },
      ],
    },
    {
      id: "q1",
      title: "Do you need Registration & Authorization?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 0 },
        { text: "via Email", hours: 19.2 },
        { text: "via Phone", hours: 17.2 },
        { text: "via Facebook", hours: 13.8 },
        { text: "Add payment details", hours: 18.6 },
        { text: "Forgot password", hours: 10.8 }
      ],
      additionalFeatures: [
        { text: "via Twitter", hours: 13.8 },
        { text: "via Google+", hours: 13.8 }
      ]
    },
    {
      id: "q2",
      title: "Do you want to let users Invite friends?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 10.3 },
        { text: "Facebook", hours: 4.9 },
        { text: "Twitter", hours: 6.8 }
      ],
      additionalFeatures: [
        { text: "Email", hours: 6 },
        { text: "SMS", hours: 6.5 }
      ]
    },
    {
      id: "q3",
      title: "Will you send Notifications to your users?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 7.5 },
        { text: "Push notifications", hours: 36.4 },
        { text: "Pop up notifications", hours: 23.6 }
      ],
      additionalFeatures: [
        { text: "Deep linking", hours: 14.5 }
      ]
    },
    {
      id: "q4",
      title: "Will your app have a Splash screen?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 2 },
        { text: "Simple animation", hours: 7.8 }
      ],
      additionalFeatures: [
        { text: "Custom animation effects", hours: 11.8 }
      ]
    },
    {
      id: "q5",
      title: "Will there be a Home screen?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 11.8 },
        { text: "List of events", hours: 15.6 },
        { text: "Events details screen", hours: 15.6 },
        { text: "Map", hours: 31.2 },
        { text: "Location details", hours: 13.7 }
      ],
      additionalFeatures: [
        { text: "Comments", hours: 15.6 },
        { text: "Search", hours: 13.7 },
        { text: "Historic view", hours: 15.6 },
        { text: "List of most popular places", hours: 15.6 }
      ]
    },
    {
      id: "q6",
      title: "Do you need a Locations screen?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 6.8 },
        { text: "Search location", hours: 21.6 },
        { text: "Like/dislike", hours: 8.4 }
      ],
      additionalFeatures: [
        { text: "List of locations", hours: 36.2 },
        { text: "Add to favorites", hours: 9.3 },
        { text: "Get address and phone", hours: 9.8 },
        { text: "Send to a friend to rate", hours: 23.6 }
      ]
    },
    {
      id: "q7",
      title: "Do you want to let users Invite friends?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 10.3 },
        { text: "Invite parameters screen", hours: 31.2 },
        { text: "List of invites", hours: 22.3 }
      ],
      additionalFeatures: [
        { text: "Invite details screen", hours: 13.7 },
        { text: "Edit event", hours: 18.6 }
      ]
    },
    {
      id: "q8",
      title: "Will you allow users to complete a profile?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 8.8 },
        { text: "Profile view", hours: 26.9 },
        { text: "List of favorite locations", hours: 16.3 },
        { text: "Change password", hours: 10.3 },
        { text: "Edit email", hours: 6.4 }
      ],
      additionalFeatures: [
        { text: "My album screen", hours: 13.7 },
        { text: "Edit profile details", hours: 16.1 },
        { text: "Edit photo", hours: 0 },
        { text: "Edit description", hours: 10.8 },
        { text: "Edit profile", hours: 18.6 },
        { text: "Edit phone", hours: 12.3 }
      ]
    },
    {
      id: "q9",
      title: "Do you need an Admin Panel in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 0 },
        { text: "Authorization", hours: 11 },
        { text: "User management", hours: 25 }
      ],
      additionalFeatures: [
        { text: "Post management", hours: 25 },
        { text: "Categories management", hours: 9 },
        { text: "Languages management", hours: 9 },
        { text: "Payment administration", hours: 25 }
      ]
    },
    {
      id: "qn",
      title: "Do you need a design for your App?",
      options: [
        { text: "None", hours: 0 },
        { text: "Simple", hours: 72 },
        { text: "Custom", hours: 216 }
      ]
    },

  ],
  'Communications': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', hours: 2 },
        { text: 'IOS', hours: 4 },
        { text: 'Both', hours: 3 },
      ],
    },
    {
      id: "q1",
      title: "Do you need Registration & Authorization?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 0 },
        { text: "via Email", hours: 19.2 },
        { text: "via Phone", hours: 17.2 },
        { text: "via Facebook", hours: 13.8 },
        { text: "Add payment details", hours: 18.6 },
        { text: "Forgot password", hours: 10.8 }
      ],
      additionalFeatures: [
        { text: "via Twitter", hours: 13.8 },
        { text: "via Google+", hours: 13.8 }
      ]
    },
    {
      id: "q2",
      title: "Do you want to let users Invite friends?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 10.3 },
        { text: "Facebook", hours: 4.9 },
        { text: "Twitter", hours: 6.8 }
      ],
      additionalFeatures: [
        { text: "Email", hours: 6 },
        { text: "SMS", hours: 6.5 }
      ]
    },
    {
      id: "q3",
      title: "Will you allow users to complete a profile?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 8.8 },
        { text: "View profile", hours: 21.1 },
        { text: "Edit photo", hours: 13.3 },
        { text: "Edit profile details", hours: 16.1 },
        { text: "Change password", hours: 10.3 },
        { text: "Edit email", hours: 6.4 }
      ],
      additionalFeatures: [
        { text: "Online status", hours: 6.9 },
        { text: "Edit phone", hours: 12.3 }
      ]
    },
    {
      id: "q4",
      title: "Do you need a Contacts screen in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 4.9 },
        { text: "List of phone contacts", hours: 13.8 },
        { text: "Contact details screen", hours: 9.8 },
        { text: "Edit contact", hours: 17.1 },
        { text: "Add contact", hours: 17.1 },
        { text: "Search contacts", hours: 15.8 }
      ],
      additionalFeatures: [
        { text: "Filter by", hours: 12.5 },
        { text: "Add to favorites", hours: 9.3 },
        { text: "Sync contacts", hours: 38.2 }
      ]
    },
    {
      id: "q5",
      title: "Do you need Chats in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 52.6 },
        { text: "List of chats", hours: 10.3 },
        { text: "Delete chats", hours: 52.6 },
        { text: "Chats detail screen", hours: 10.3 },
        { text: "Send text", hours: 52.6 }
      ],
      additionalFeatures: [
        { text: "Send location", hours: 26.9 },
        { text: "Send audio record", hours: 26.9 },
        { text: "Clear chat", hours: 22.6 },
        { text: "Delete user from chat", hours: 11.3 },
        { text: "Typing status", hours: 13.3 }
      ]
    },
    {
      id: "q6",
      title: "Do you need Group Chats in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 40.3 },
        { text: "Select users", hours: 15.2 },
        { text: "Send invitation to users", hours: 14.3 }
      ],
      additionalFeatures: []
    },
    {
      id: "q7",
      title: "Will you let users manage the Settings?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 19.5 },
        { text: "Log out", hours: 5.4 },
        { text: "Deactivate account", hours: 6.9 },
        { text: "Video settings", hours: 52.6 },
        { text: "Use front camera", hours: 10.3 },
        { text: "Sound settings", hours: 52.6 }
      ],
      additionalFeatures: [
        { text: "On/off push notifications", hours: 6.2 },
        { text: "On/off pop up notifications", hours: 6.2 },
        { text: "Phone ringtone", hours: 7.8 },
        { text: "SMS ringtone", hours: 7.8 }
      ]
    },
    {
      id: "q8",
      title: "Will you send Notifications to your users?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 7.5 },
        { text: "Push notifications", hours: 36.4 },
        { text: "Pop up notifications", hours: 23.6 }
      ],
      additionalFeatures: [
        { text: "Deep linking", hours: 14.5 }
      ]
    },
    {
      id: "q9",
      title: "Will your app have a Splash screen?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 2 },
        { text: "Simple animation", hours: 7.8 },
        { text: "Delete user", hours: 52.6 }
      ],
      additionalFeatures: [
        { text: "Custom animation effects", hours: 11.8 }
      ]
    },
    {
      id: "q10",
      title: "Do you need an Admin Panel in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 0 },
        { text: "Authorization", hours: 11 },
        { text: "User management", hours: 25 }
      ],
      additionalFeatures: [
        { text: "Posts management", hours: 25 },
        { text: "Categories management", hours: 9 },
        { text: "Languages management", hours: 9 },
        { text: "Payment Administration", hours: 25 }
      ]
    }, {
      id: "qn",
      title: "Do you need a design for your App?",
      options: [
        { text: "None", hours: 0 },
        { text: "Simple", hours: 72 },
        { text: "Custom", hours: 216 }
      ]
    }

  ],
  'Music And Audio': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', hours: 2 },
        { text: 'IOS', hours: 4 },
        { text: 'Both', hours: 3 },
      ],
    },
    {
      id: "q1",
      title: "Do you need Registration & Authorization?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 0 },
        { text: "via Email", hours: 19.2 },
        { text: "via Phone", hours: 17.2 },
        { text: "via Facebook", hours: 13.8 },
        { text: "Add payment details", hours: 18.6 },
        { text: "Forgot password", hours: 10.8 }
      ],
      additionalFeatures: [
        { text: "via Twitter", hours: 13.8 },
        { text: "via Google+", hours: 13.8 }
      ]
    },
    {
      id: "q2",
      title: "Will you send Notifications to your users?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 7.5 },
        { text: "Push notifications", hours: 36.4 },
        { text: "Pop up notifications", hours: 23.6 }
      ],
      additionalFeatures: [
        { text: "Deeplinking", hours: 14.5 }
      ]
    },
    {
      id: "q3",
      title: "Will your app have a Splash screen?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 2 },
        { text: "Simple animation", hours: 7.8 }
      ],
      additionalFeatures: [
        { text: "Custom animation effects", hours: 11.8 }
      ]
    },
    {
      id: "q4",
      title: "Will you let users organize Channels in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 15.6 },
        { text: "List of channels", hours: 13.7 },
        { text: "Channel screen", hours: 13.7 },
        { text: "List of playlists of channel's genre", hours: 13.7 },
        { text: "List of artist of channel's genre", hours: 11.8 }
      ],
      additionalFeatures: [
        { text: "list of groups", hours: 13.7 },
        { text: "Group Details", hours: 13.7 }
      ]
    },
    {
      id: "q5",
      title: "Will users manage tracks in “Favorites”?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 7.8 },
        { text: "List of favorites tracks", hours: 17.2 },
        { text: "Download selected tracks", hours: 31.4 }
      ],
      additionalFeatures: [
        { text: "Share", hours: 4.9 }
      ]
    },
    {
      id: "q6",
      title: "Will you allow users to manage their playlists?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 17.6 },
        { text: "List of playlists", hours: 18.1 },
        { text: "Create new playlist", hours: 14.5 },
        { text: "Playlist screen", hours: 4.9 },
        { text: "List of tracks", hours: 18.1 }
      ],
      additionalFeatures: [
        { text: "Play playlist", hours: 9.8 },
        { text: "Share playlist", hours: 4.9 },
        { text: "Add to favorites", hours: 9.3 }
      ]
    },
    {
      id: 'q7',
      title: "Will users have access to other users pages?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 4.2 },
        { text: "Playlists screen", hours: 13.7 },
        { text: "Albums screen", hours: 14.7 },
        { text: "Artists screen", hours: 14.7 }
      ],
      additionalFeatures: []
    },
    {
      id: "q8",
      title: "Will there be a Music player screen?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 21.4 },
        { text: "Add to playlist", hours: 9.3 },
        { text: "Now playing screen", hours: 22.4 },
        { text: "Go to album page", hours: 3.0 }
      ],
      additionalFeatures: [
        { text: "Add to favorites", hours: 9.3 },
        { text: "Go to artist page", hours: 3.0 },
        { text: "Remove from favorites", hours: 4.5 },
        { text: "Share", hours: 4.9 }
      ]
    },
    {
      id: "q9",
      title: "Do you need separate pages for Artists?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 3.0 },
        { text: "View all Discography screen", hours: 17.6 },
        { text: "View all Playlists screen", hours: 17.6 },
        { text: "Share", hours: 4.9 }
      ],
      additionalFeatures: [
        { text: "View all Similar Artists", hours: 17.6 },
        { text: "Add to favorites", hours: 9.3 }
      ]
    },
    {
      id: 'q10',
      title: "Do you need separate pages for Albums?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 3.0 },
        { text: "List of tracks", hours: 18.1 },
        { text: "Share", hours: 4.9 },
        { text: "Play album", hours: 4.9 },
      ],
      additionalFeatures: [
        { text: "Add/remove to favourites", hours: 9.3 },
        { text: "Download album", hours: 17.8 }
      ]
    },
    {
      id: "q11",
      title: "Will you let users manage the Settings?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 19.5 },
        { text: "Manage account screen", hours: 13.7 },
        { text: "Audio settings screen", hours: 13.7 },
        { text: "About screen", hours: 4.9 },
        { text: "Terms of Use & Privacy Policy", hours: 4.9 }
      ],
      additionalFeatures: [
        { text: "Equalizer", hours: 41.5 }
      ]
    },
    {
      id: "q12",
      title: "Do you need a Home screen in your Music app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 4.9 },
        { text: "Explore channels", hours: 14.2 },
        { text: "Explore artists", hours: 14.2 }
      ],
      additionalFeatures: [
        { text: "Popular", hours: 9.3 },
        { text: "Top", hours: 9.3 },
        { text: "Latest", hours: 9.3 }
      ]
    },
    {
      id: "q13",
      title: "Do you need an Admin Panel in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 0 },
        { text: "Authorization", hours: 11 },
        { text: "Users management", hours: 25 }
      ],
      additionalFeatures: [
        { text: "Posts management", hours: 25 },
        { text: "Categories management", hours: 9 },
        { text: "Languages management", hours: 9 },
        { text: "Payment management", hours: 25 }
      ]
    },
    {
      id: "qn",
      title: "Do you need a design for your App?",
      options: [
        { text: "None", hours: 0 },
        { text: "Simple", hours: 72 },
        { text: "Custom", hours: 216 }
      ]
    },
  ],
  'Shopping': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', hours: 2 },
        { text: 'IOS', hours: 4 },
        { text: 'Both', hours: 3 },
      ],
    },
    {
      id: "q1",
      title: "Do you need Registration & Authorization?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 0 },
        { text: "via Email", hours: 19.2 },
        { text: "via Phone", hours: 17.2 },
        { text: "via Facebook", hours: 13.8 },
        { text: "Add payment details", hours: 18.6 },
        { text: "Forgot password", hours: 10.8 }
      ],
      additionalFeatures: [
        { text: "via Twitter", hours: 13.8 },
        { text: "via Google+", hours: 13.8 }
      ]
    },
    {
      id: "q2",
      title: "Will you send Notifications to your users?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 0 },
        { text: "Paypal", hours: 49.1 }
      ],
      additionalFeatures: [
        { text: "Braintree", hours: 52.6 },
        { text: "Stripe", hours: 46.1 },
        { text: "Dwolla", hours: 52.6 },
        { text: "Authorize.net", hours: 52.6 }
      ]
    },
    {
      id: "q3",
      title: "Will your app have a Splash screen?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 52.6 },
        { text: "List of posts", hours: 46.1 },
        { text: "Hide posts from certain users", hours: 10.3 },
        { text: "Like/unlike post", hours: 52.6 },
        { text: "Paypal", hours: 49.1 }
      ],
      additionalFeatures: []
    },
    {
      id: "q4",
      title: "Do you need a Home screen in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 52.6 },
        { text: "Select post category", hours: 10.3 },
        { text: "Add photo", hours: 52.6 },
        { text: "Comment Post", hours: 0 },
        { text: "Share post", hours: 49.1 }
      ],
      additionalFeatures: []
    },
    {
      id: "q5",
      title: "Will there be a Product details screen?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 52.6 },
        { text: "List of users", hours: 10.3 },
        { text: "Delete user", hours: 52.6 },
        { text: "Add/remove to favourites", hours: 0 }
      ],
      additionalFeatures: []
    },
    {
      id: "q6",
      title: "Will you let users manage a Shopping cart?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 52.6 },
        { text: "List of users", hours: 10.3 },
        { text: "Delete user", hours: 52.6 },
        { text: "Add/remove to favourites", hours: 0 }
      ],
      additionalFeatures: []
    },
    {
      id: "q7",
      title: "Will you need an Info screen in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 52.6 },
        { text: "List of users", hours: 10.3 },
        { text: "Delete user", hours: 52.6 },
        { text: "Add/remove to favourites", hours: 0 }
      ],
      additionalFeatures: []
    },
    {
      id: "q8",
      title: "Will you allow users to complete a profile?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 52.6 },
        { text: "List of users", hours: 10.3 },
        { text: "Delete user", hours: 52.6 },
        { text: "Add/remove to favourites", hours: 0 }
      ],
      additionalFeatures: []
    },
    {
      id: "q9",
      title: "Will your app accept payments?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 52.6 },
        { text: "List of users", hours: 10.3 },
        { text: "Delete user", hours: 52.6 },
        { text: "Add/remove to favourites", hours: 0 }
      ],
      additionalFeatures: []
    },
    {
      id: "q10",
      title: "Do you need an Admin Panel in your app?",
      conditional: false,
      featuresForMVP: [
        { text: "Integration", hours: 52.6 },
        { text: "List of users", hours: 10.3 },
        { text: "Delete user", hours: 52.6 },
        { text: "Add/remove to favourites", hours: 0 }
      ],
      additionalFeatures: []
    },
    {
      id: "qn",
      title: "Do you need a design for your App?",
      options: [
        { text: "None", hours: 0 },
        { text: "Simple", hours: 72 },
        { text: "Custom", hours: 216 }
      ]
    }


  ],
  'Photos': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', hours: 2 },
        { text: 'IOS', hours: 4 },
        { text: 'Both', hours: 3 },
      ],
    },
    {
  id: "q1",
  title: "Do you need Registration & Authorization?",
  conditional: false,
  featuresForMVP: [
    { text: "Integration", hours: 0 },
    { text: "via Email", hours: 19.2 },
    { text: "via Phone", hours: 17.2 },
    { text: "via Facebook", hours: 13.8 },
    { text: "Add payment details", hours: 18.6 },
    { text: "Forgot password", hours: 10.8 }
  ],
  additionalFeatures: [
    { text: "via Twitter", hours: 13.8 },
    { text: "via Google+", hours: 13.8 }
  ]
},
{
  id: "q2",
  title: "Do you want to let users Invite friends?",
  conditional: false,
  featuresForMVP: [
    { text: "Integration", hours: 0 },
    { text: "Paypal", hours: 49.1 }
  ],
  additionalFeatures: [
    { text: "Braintree", hours: 52.6 },
    { text: "Stripe", hours: 46.1 },
    { text: "Dwolla", hours: 52.6 },
    { text: "Authorize.net", hours: 52.6 }
  ]
},
{
  id: "q3",
  title: "Do you need Chats in your app?",
  conditional: false,
  featuresForMVP: [
    { text: "Integration", hours: 52.6 },
    { text: "List of posts", hours: 46.1 },
    { text: "Hide posts from certain users", hours: 10.3 },
    { text: "Like/unlike post", hours: 52.6 }
  ],
  additionalFeatures: [
    { text: "Integration", hours: 0 },
    { text: "Paypal", hours: 49.1 }
  ]
},
{
  id: "q4",
  title: "Do you need Group Chats in your app?",
  conditional: false,
  featuresForMVP: [
    { text: "Integration", hours: 52.6 },
    { text: "Select post category", hours: 10.3 },
    { text: "Add photo", hours: 52.6 },
    
  ],
  additionalFeatures: [
    { text: "Comment Post", hours: 0 },
    { text: "Share post", hours: 49.1 }
  ]
},
{
  id: "q5",
  title: "Will you send Notifications to your users?",
  conditional: false,
  featuresForMVP: [
    { text: "Integration", hours: 52.6 },
    { text: "List of users", hours: 10.3 },
    { text: "Delete user", hours: 52.6 },
  ],
  additionalFeatures: [
    { text: "Add/remove to favourites", hours: 0 }
  ]
},
{
  id: "q6",
  title: "Will your app have a Splash screen?",
  conditional: false,
  featuresForMVP: [
    { text: "Integration", hours: 52.6 },
    { text: "List of users", hours: 10.3 },
    { text: "Delete user", hours: 52.6 },
  ],
  additionalFeatures: [
    { text: "Add/remove to favourites", hours: 0 }
  ]
},
{
  id: "q7",
  title: "Will you need an Info screen in your app?",
  conditional: false,
  featuresForMVP: [
    { text: "Integration", hours: 52.6 },
    { text: "List of users", hours: 10.3 },
    { text: "Delete user", hours: 52.6 },
  ],
  additionalFeatures: [
    { text: "Add/remove to favourites", hours: 0 }
  ]
},
{
  id: "q8",
  title: "Will your app accept payments?",
  conditional: false,
  featuresForMVP: [
    { text: "Integration", hours: 52.6 },
    { text: "List of users", hours: 10.3 },
    { text: "Delete user", hours: 52.6 },
  ],
  additionalFeatures: [
    { text: "Add/remove to favourites", hours: 0 }
  ]
},
{
  id: "q9",
  title: "Do you need an Admin Panel in your app?",
  conditional: false,
  featuresForMVP: [
    { text: "Integration", hours: 52.6 },
    { text: "List of users", hours: 10.3 },
    { text: "Delete user", hours: 52.6 },
  ],
  additionalFeatures: [
    { text: "Add/remove to favourites", hours: 0 }
  ]
},
{
  id: "q10",
  title: "Do you need a Home screen in your app?",
  conditional: false,
  featuresForMVP: [
    { text: "Integration", hours: 52.6 },
    { text: "List of users", hours: 10.3 },
    { text: "Delete user", hours: 52.6 },
  ],
  additionalFeatures: [
    { text: "Add/remove to favourites", hours: 0 }
  ]
},
{
  id: "q11",
  title: "Will you allow users to complete a profile?",
  conditional: false,
  featuresForMVP: [
    { text: "Integration", hours: 52.6 },
    { text: "List of users", hours: 10.3 },
    { text: "Delete user", hours: 52.6 },
  ],
  additionalFeatures: [
    { text: "Add/remove to favourites", hours: 0 }
  ]
},
{
  id: "q12",
  title: "Will you let users manage the Settings?",
  conditional: false,
  featuresForMVP: [
    { text: "Integration", hours: 52.6 },
    { text: "List of users", hours: 10.3 },
    { text: "Delete user", hours: 52.6 },
  ],
  additionalFeatures: [
    { text: "Add/remove to favourites", hours: 0 }
  ]
},
{
  id: "q13",
  title: "What will there be on the Add post screen?",
  conditional: false,
  featuresForMVP: [
    { text: "Integration", hours: 52.6 },
    { text: "List of users", hours: 10.3 },
    { text: "Delete user", hours: 52.6 },
  ],
  additionalFeatures: [
    { text: "Add/remove to favourites", hours: 0 }

  ]
},
{
  id: "q14",
  title: "Will you let users customize their photos?",
  conditional: false,
  featuresForMVP: [
    { text: "Integration", hours: 52.6 },
    { text: "List of users", hours: 10.3 },
    { text: "Delete user", hours: 52.6 },
  ],
  additionalFeatures: [
    { text: "Add/remove to favourites", hours: 0 }
  ]
},
{
      id: "qn",
      title: "Do you need a design for your App?",
      options: [
        { text: "None", hours: 0 },
        { text: "Simple", hours: 72 },
        { text: "Custom", hours: 216 }
      ]
    }

  ],
  'Jobs': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', hours: 2 },
        { text: 'IOS', hours: 4 },
        { text: 'Both', hours: 3 },
      ],
    },
    {
      id: 'q1',
      title: 'Do you need Registration & Authorization?',
      conditional: true,
      featuresForMVP: [
        { text: 'via Email', hours: 2 },
        { text: 'via Phone', hours: 4 },
        { text: 'via Facebook', hours: 3 },
      ],
      additionalFeatures: [
        { text: 'via Twitter', hours: 3 },
        { text: 'via Google+', hours: 5 },
      ],
    },
    {
      id: 'q2',
      title: 'Will you allow users to complete a profile?',
      conditional: false,
      featuresForMVP: [
        { text: 'View Profile', hours: 2.1 },
        { text: 'Edit Profile', hours: 3.3 },
        { text: 'Change Password', hours: 1.2 },
      ],
      additionalFeatures: [
        { text: 'Online Status', hours: 0.5 },
        { text: 'Edit Phone', hours: 2.3 },
      ],
    },
    {
      id: "qn",
      title: "Do you need a design for your App?",
      options: [
        { text: "None", hours: 0 },
        { text: "Simple", hours: 72 },
        { text: "Custom", hours: 216 }
      ]
    }
  ],
  'Cars': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', hours: 2 },
        { text: 'IOS', hours: 4 },
        { text: 'Both', hours: 3 },
      ],
    },
    {
      id: "qn",
      title: "Do you need a design for your App?",
      options: [
        { text: "None", hours: 0 },
        { text: "Simple", hours: 72 },
        { text: "Custom", hours: 216 }
      ]
    }
  ],
  'Health': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', hours: 2 },
        { text: 'IOS', hours: 4 },
        { text: 'Both', hours: 3 },
      ],
    },
    {
      id: 'q1',
      title: 'Do you need Registration & Authorization?',
      conditional: true,
      featuresForMVP: [
        { text: 'via Email', hours: 2 },
        { text: 'via Phone', hours: 4 },
        { text: 'via Facebook', hours: 3 },
      ],
      additionalFeatures: [
        { text: 'via Twitter', hours: 3 },
        { text: 'via Google+', hours: 5 },
      ],
    },
    {
      id: 'q2',
      title: 'Will you allow users to complete a profile?',
      conditional: false,
      featuresForMVP: [
        { text: 'View Profile', hours: 2.1 },
        { text: 'Edit Profile', hours: 3.3 },
        { text: 'Change Password', hours: 1.2 },
      ],
      additionalFeatures: [
        { text: 'Online Status', hours: 0.5 },
        { text: 'Edit Phone', hours: 2.3 },
      ],
    },

  ],
  'Maternity': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', hours: 2 },
        { text: 'IOS', hours: 4 },
        { text: 'Both', hours: 3 },
      ],
    },
    {
      id: 'q1',
      title: 'Do you need Registration & Authorization?',
      conditional: true,
      featuresForMVP: [
        { text: 'via Email', hours: 2 },
        { text: 'via Phone', hours: 4 },
        { text: 'via Facebook', hours: 3 },
      ],
      additionalFeatures: [
        { text: 'via Twitter', hours: 3 },
        { text: 'via Google+', hours: 5 },
      ],
    },
    {
      id: 'q2',
      title: 'Will you allow users to complete a profile?',
      conditional: false,
      featuresForMVP: [
        { text: 'View Profile', hours: 2.1 },
        { text: 'Edit Profile', hours: 3.3 },
        { text: 'Change Password', hours: 1.2 },
      ],
      additionalFeatures: [
        { text: 'Online Status', hours: 0.5 },
        { text: 'Edit Phone', hours: 2.3 },
      ],
    },
  ],
  'Video': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', hours: 2 },
        { text: 'IOS', hours: 4 },
        { text: 'Both', hours: 3 },
      ],
    },
    {
      id: 'q1',
      title: 'Do you need Registration & Authorization?',
      conditional: true,
      featuresForMVP: [
        { text: 'via Email', hours: 2 },
        { text: 'via Phone', hours: 4 },
        { text: 'via Facebook', hours: 3 },
      ],
      additionalFeatures: [],
    },
    {
      id: 'q2',
      title: 'Will you allow users to complete a profile?',
      conditional: false,
      featuresForMVP: [
        { text: 'View Profile', hours: 2.1 },
        { text: 'Edit Profile', hours: 3.3 },
        { text: 'Change Password', hours: 1.2 },
      ],
      additionalFeatures: [
        { text: 'Online Status', hours: 0.5 },
        { text: 'Edit Phone', hours: 2.3 },
      ],
    },
    {
      id: "qn",
      title: "Do you need a design for your App?",
      options: [
        { text: "None", hours: 0 },
        { text: "Simple", hours: 72 },
        { text: "Custom", hours: 216 }
      ]
    },

  ],
  '+ Add New Category': [
    {
      id: 'q0',
      final:true,
      title: 'What type of app are you building?',
      conditional: true,
     
    }
  ],
};
