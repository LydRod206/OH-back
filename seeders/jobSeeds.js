
module.exports = {
    up: async (queryInterface, Sequelize) => {
      const categories = await queryInterface.sequelize.query(
        'SELECT id, name FROM JobCategories',
        { type: Sequelize.QueryTypes.SELECT }
      );
  
      const jobsData = [
        {
          category: 'cleaning',
          date: new Date(),
          address: '123 Main St',
          client_name: 'Regina George',
          phone: '123-456-7890',
          price: 50.0,
          notes: 'Need cleaning service for my mansion.',
        },
        {
          category: 'dog walking',
          date: new Date(),
          address: '456 Elm St',
          client_name: 'Cady Heron',
          phone: '987-654-3210',
          price: 30.0,
          notes: 'Walk my dog, please!',
        },
        {
          category: 'cooking',
          date: new Date(),
          address: '789 Oak St',
          client_name: 'Karen Smith',
          phone: '555-555-5555',
          price: 80.0,
          notes: 'Looking for a personal chef.',
        },
        {
          category: 'childcare',
          date: new Date(),
          address: '987 Pine St',
          client_name: 'Gretchen Wieners',
          phone: '111-222-3333',
          price: 60.0,
          notes: 'Need a babysitter for my siblings.',
        },
        {
          category: 'yard-work',
          date: new Date(),
          address: '321 Maple St',
          client_name: 'Janis Ian',
          phone: '444-444-4444',
          price: 40.0,
          notes: 'Help me with my garden.',
        },
      ];
  
      const jobs = jobsData.map((job) => ({
        category_id: categories.find((category) => category.name === job.category).id,
        date: job.date,
        address: job.address,
        client_name: job.client_name,
        phone: job.phone,
        price: job.price,
        notes: job.notes,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
  
      await queryInterface.bulkInsert('Jobs', jobs);
  
      console.log('Job seeds created successfully.');
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Jobs', null, {});
      console.log('Job seeds deleted successfully.');
    }
  };
  