
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('JobCategories', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  
      const jobCategoriesData = [
        { name: 'childcare', createdAt: new Date(), updatedAt: new Date() },
        { name: 'cleaning', createdAt: new Date(), updatedAt: new Date() },
        { name: 'cooking', createdAt: new Date(), updatedAt: new Date() },
        { name: 'dog walking', createdAt: new Date(), updatedAt: new Date() },
        { name: 'yard-work', createdAt: new Date(), updatedAt: new Date() },
        { name: 'handy-work', createdAt: new Date(), updatedAt: new Date() },
      ];
  
      await queryInterface.bulkInsert('JobCategories', jobCategoriesData);
  
      console.log('JobCategory table created successfully.');
      console.log('Job categories seeded successfully.');
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('JobCategories');
      console.log('JobCategory table dropped successfully.');
    }
  };
  