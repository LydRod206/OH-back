const { Job } = require('../models'); // Import the Job model

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const receiptsData = [
      {
        date: '2023-05-31',
        address: '123 Main St, City',
        client_name: 'Cady Heron',
        phone: '123-456-7890',
        price: 100.0,
        notes: 'Payment for tutoring in math.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: '2023-06-01',
        address: '456 Elm St, City',
        client_name: 'Regina George',
        phone: '987-654-3210',
        price: 150.0,
        notes: 'Payment for personal styling advice.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: '2023-06-05',
        address: '789 Oak Ave, City',
        client_name: 'Karen Smith',
        phone: '555-555-5555',
        price: 75.0,
        notes: 'Payment for dog walking services.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: '2023-06-10',
        address: '321 Pine Rd, City',
        client_name: 'Gretchen Wieners',
        phone: '111-222-3333',
        price: 200.0,
        notes: 'Payment for social media consulting.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: '2023-06-15',
        address: '987 Cedar Ln, City',
        client_name: 'Janis Ian',
        phone: '444-444-4444',
        price: 120.0,
        notes: 'Payment for art lessons.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // await queryInterface.bulkInsert('Receipts', receiptsData);
    // console.log('Receipts seeded successfully!');
    try {
      await queryInterface.bulkInsert('Receipts', receiptsData);
      console.log('Receipts seeded successfully!');
    } catch (error) {
      console.error('Validation error:', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Receipts', null, {});
    console.log('Receipts seeds deleted successfully!');
  }
};

