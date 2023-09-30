interface Video {
  id: string;
  channelName: string;
  channelId: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  duration:string;
  description:string;
}

// {
//       kind: 'youtube#searchResult',
//       id: { kind: 'youtube#video', videoId: 'RLzC55ai0eo' },
//       snippet: {
//         publishedAt: '2023-07-25T07:41:09Z',
//         channelId: 'UCmkWj7Sft1lt1VHX43BbAfA',
//         title:
//           'Heeriye (Official Video) Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir',
//         description:
//           'Heeriye #JasleenRoyal #ArijitSingh #DulquerSalmaan We re-wrote our forever - HEERIYE - is all yours now! ❤️ Out Now on all ...',
//         thumbnails: {
//           default: {
//             url: 'https://i.ytimg.com/vi/RLzC55ai0eo/default.jpg',
//             width: 120,
//             height: 90
//           },
//           medium: {
//             url: 'https://i.ytimg.com/vi/RLzC55ai0eo/mqdefault.jpg',
//             width: 320,
//             height: 180
//           },
//           high: {
//             url: 'https://i.ytimg.com/vi/RLzC55ai0eo/hqdefault.jpg',
//             width: 480,
//             height: 360
//           }
//         },
//         channelTitle: 'Jasleen Royal',
//         liveBroadcastContent: 'none',
//         publishTime: '2023-07-25T07:41:09Z'
//       }
//     },
