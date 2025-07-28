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
        {text:'Integration' , hours: 2.23},
        { text: 'via Email', hours: 2 },
        { text: 'via Phone', hours: 4 },
        { text: 'via Facebook', hours: 3 },
        { text: 'Add payment details', hours: 3 }
      ],
      additionalFeatures: [
        { text: 'via Twitter', hours: 3 },
        { text: 'via Google+', hours: 5 },
      ],
    },
    {
      id: 'q2',
      title: 'Will you allow users to complete a Profile?',
      conditional: false,
      featuresForMVP: [
        { text: 'Integration', hours: 3.3 },
        { text: 'View Profile', hours: 2.1 },
        { text: 'Edit Profile', hours: 3.3 },
        { text: 'Edit profile details', hours: 4.3 },
        { text: 'Change Password', hours: 1.2 },
      ],
      additionalFeatures: [
        { text: 'Online Status', hours: 6.5 },
        { text: 'Edit Phone', hours: 12.3 },
      ],
    },
    {
      id: 'q3',
      title: 'Do you need Chats in your app?',
      conditional: false,
      featuresForMVP: [
        { text: 'Integration', hours: 3.3 },
        { text: 'View Profile', hours: 2.1 },
        { text: 'Edit Profile', hours: 3.3 },
        { text: 'Edit profile details', hours: 4.3 },
        { text: 'Change Password', hours: 1.2 },
      ],
      additionalFeatures: [
        { text: 'Online Status', hours: 6.5 },
        { text: 'Edit Phone', hours: 12.3 },
      ],
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
      title: 'Will you allow users to complete a Profile?',
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
      id: 'q3',
      title: 'Do you need Chats in your app?',
      conditional: false,
      featuresForMVP: [
        { text: 'Integration', hours: 2.1 },
        { text: 'List of chats', hours: 2.1 },
        { text: 'Delete chat', hours: 3.3 },
        { text: 'Chat details screen', hours: 1.2 },
        { text: 'Send text', hours: 1.2 },

      ],
      additionalFeatures: [
        { text: 'Send location', hours: 0.5 },
        { text: 'Send audio record', hours: 2.3 },
        { text: 'Clear chat', hours: 2.3 },
        { text: 'Delete user from chat', hours: 2.3 },
        { text: 'Typing status', hours: 2.3 },

      ],
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
      title: 'Will you allow users to complete a Profile?',
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
      id: 'q2',
      title: 'Will you allow users to Call?',
      conditional: false,
      featuresForMVP: [
        { text: 'Video Call', hours: 2.1 },
        { text: 'Audio call', hours: 3.3 },
      ],
      additionalFeatures: [
        { text: 'Group Call', hours: 0.5 },
      ],
    },
   
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
      title: 'Will you allow users to complete a Profile?',
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
      id: 'q1',
      title: 'Will you allow users to complete a Profile?',
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
      title: 'Will you allow users to complete a Profile?',
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
      title: 'Will you allow users to complete a Profile?',
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
      title: 'Will you allow users to complete a Profile?',
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
      title: 'Will you allow users to complete a Profile?',
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
      title: 'Will you allow users to complete a Profile?',
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
      additionalFeatures: [
        { text: 'via Twitter', hours: 3 },
        { text: 'via Google+', hours: 5 },
      ],
    },
    {
      id: 'q2',
      title: 'Will you allow users to complete a Profile?',
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
  '+ Add New Category': [
    {
      id: 'q0',
      title: 'What type of app are you building?',
      conditional: true,
      options: [
        { text: 'Android', hours: 2 },
        { text: 'IOS', hours: 4 },
        { text: 'Both', hours: 3 },
      ],
    }
  ],
};
