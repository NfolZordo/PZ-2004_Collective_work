export const overlay: Record<
  string,
  {
    sourceLink: string;
    contentTitle: string;
    contentText: string;
    imageSource: string;
    technologies: string[];
  }
> = {
  shop: {
    contentTitle: 'Mobile Grocery Project',
    contentText:
      'The mobile groceries application introduces a convenient and efficient way to shop for groceries. It provides a user-friendly interface with features like personalized shopping lists, real-time inventory updates, secure payment options, and order tracking. The app aims to streamline the grocery shopping process and make it more convenient for users.',
    sourceLink: 'https://github.com/Vitaly2233/Mobile.Online-Groceries',
    imageSource: './../../../assets/ryabchich/project 1.png',
    technologies: [
      'react-native',
      'nest-js',
      'my-sql',
      'typeorm',
      'aws',
      's3-bucket',
    ],
  },
  'memory-app': {
    contentTitle: 'Soulo Project',
    contentText:
      'The Memory app is a user-friendly platform that allows you to create personalized accounts for individuals you want to remember. With this app, you can store important details about people who have passed away, preserving their memories and ensuring their legacies live on. It serves as a dedicated space to cherish and honor the lives of your loved ones, providing a convenient way to store and access their information for future reference. The Memory app aims to help you keep their memories alive in a meaningful and organized manner.',
    sourceLink: 'https://github.com/vreal-soft/Node.Soulo',
    imageSource: './../../../assets/ryabchich/project 2.jpg',
    technologies: [
      'nest-js',
      'my-sql',
      'typeorm',
      'aws',
      's3-bucket',
      'rabbit-mq',
      'whatsapp-api',
    ],
  },

  'mobile-chat': {
    contentTitle: 'Mobile Chat',
    contentText:
      'The Social Media project is a dynamic platform that connects individuals from around the world. It offers a user-friendly interface with features like profile creation, social networking, content sharing, and real-time interactions. The project aims to foster connections, facilitate communication, and enhance the social experience for users',
    sourceLink: 'https://github.com/Vitaly2233/mobile-chat-frontend',
    imageSource: './../../../assets/ryabchich/project 3.png',
    technologies: [
      'react-native',
      'nest-js',
      'my-sql',
      'typeorm',
      'aws',
      's3-bucket',
      'web-sockets',
    ],
  },
};
