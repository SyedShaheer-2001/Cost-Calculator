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
        {text:'Integration' , hour: 2},
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
    // {
    //   id: 'q2',
    //   title: 'Will you allow users to complete a Profile?',
    //   conditional: false,
    //   featuresForMVP: [
    //     { text: 'View Profile', hours: 2.1 },
    //     { text: 'Edit Profile', hours: 3.3 },
    //     { text: 'Change Password', hours: 1.2 },
    //   ],
    //   additionalFeatures: [
    //     { text: 'Online Status', hours: 0.5 },
    //     { text: 'Edit Phone', hours: 2.3 },
    //   ],
    // },
   
  ],
//   Communications: [
//     {
//         title:'Communications'
//     }
//   ],
//   MusicandAudio: [
//     {
//         title:'Music & Audio'
//     }
   
//   ],
//   Shopping: [
//     {
//         title:'Shopping'
//     }
   
//   ],
//   Photos: [
//     {
//         title:'Photos'
//     }
   
//   ],
//   Jobs: [
//     {
//         title:'Jobs'
//     }
//   ],
//   Cars: [
//     {
//         title:'Cars'
//     }
//   ],
//   Health: [
//     {
//         title:'Health'
//     }
   
//   ],
//   Maternity: [
//     {
//         title:'Maternity'
//     }
   
//   ],
//   Video: [
//     {
//         title:'Video'
//     }
   
//   ],
//   Addnewcategory: [
//     {
//         title:'+ Add New Category'
//     }
   
//   ],
};
