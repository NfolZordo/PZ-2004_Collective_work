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
    contentText: 'The mobile groceries application introduces a convenient and efficient way to shop for groceries. It provides a user-friendly interface with features like personalized shopping lists, real-time inventory updates, secure payment options, and order tracking. The app aims to streamline the grocery shopping process and make it more convenient for users.',
    sourceLink: 'https://github.com/Vitaly2233/Mobile.Online-Groceries',
    imageSource: "./../../../assets/ryabchich/project 1.png",
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
    contentText: 'some text',
    sourceLink: 'https://github.com/vreal-soft/Node.Soulo',
    imageSource: "./../../../assets/ryabchich/project 2.jpg",
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
    contentText: 'some text',
    sourceLink: 'https://github.com/Vitaly2233/mobile-chat-frontend',
    imageSource: "./../../../assets/ryabchich/project 3.png",
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
