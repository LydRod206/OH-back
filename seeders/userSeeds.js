module.exports = {
    up: async (queryInterface, Sequelize) => {
      const usersData = [
        {
          username: "Edward Cullen",
          email: 'edwardcullen@example.com',
          password: 'vampirelove',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Bella Swan",
          email: 'bellaswan@example.com',
          password: 'edwardforever',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Jacob Black",
          email: 'jacobblack@example.com',
          password: 'werewolf123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Alice Cullen",
          email: 'alicecullen@example.com',
          password: 'futureseer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Emmett Cullen",
          email: 'emmettcullen@example.com',
          password: 'strongvampire',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
  
      await queryInterface.bulkInsert('Users', usersData);
      console.log('User seeds created successfully');
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});
      console.log('User seeds deleted successfully');
    },
  };
  






// module.exports = {
//     up: async (queryInterface, Sequelize) => {
//       const usersData = [
//         {
//           first_name: 'Edward',
//           last_name: 'Cullen',
//           email: 'edwardcullen@example.com',
//           password: 'vampirelove',
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           first_name: 'Bella',
//           last_name: 'Swan',
//           email: 'bellaswan@example.com',
//           password: 'edwardforever',
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           first_name: 'Jacob',
//           last_name: 'Black',
//           email: 'jacobblack@example.com',
//           password: 'werewolf123',
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           first_name: 'Alice',
//           last_name: 'Cullen',
//           email: 'alicecullen@example.com',
//           password: 'futureseer',
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           first_name: 'Emmett',
//           last_name: 'Cullen',
//           email: 'emmettcullen@example.com',
//           password: 'strongvampire',
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//       ];
  
//       await queryInterface.bulkInsert('Users', usersData);
//       console.log('User seeds created successfully');
//     },
  
//     down: async (queryInterface, Sequelize) => {
//       await queryInterface.bulkDelete('Users', null, {});
//       console.log('User seeds deleted successfully');
//     },
//   };
  