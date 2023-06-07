const receipts = [
    {
      id: 1,
      client: "Alice Cullen",
      date: "2023-05-15",
      address: "123 Main St, Forks",
      phone: "555-123-4567",
      workDescription: "Shopping",
      cost: 200,
      expenses: 30,
      isPaid: false
    },
    {
      id: 2,
      client: "Emmett Cullen",
      date: "2023-05-20",
      address: "456 Elm St, Forks",
      phone: "555-987-6543",
      workDescription: "Tree chopping",
      cost: 150,
      expenses: 20,
      isPaid: true
    }
  ];
  
  // Get all receipts
  const getAllReceipts = (req, res) => {
    res.json({ receipts });
  };
  
  // Get a specific receipt by ID
  const getReceiptById = (req, res) => {
    const { id } = req.params;
  
    // Find the receipt with the provided ID
    const receipt = receipts.find((receipt) => receipt.id === parseInt(id));
  
    // Check if the receipt exists
    if (!receipt) {
      return res.status(404).json({ error: "Receipt not found" });
    }
  
    res.json({ receipt });
  };
  
  // Create a new receipt
  const createReceipt = (req, res) => {
    const { client, date, address, phone, workDescription, cost, expenses } = req.body;
  
    // Generate a unique ID for the new receipt
    const newReceiptId = receipts.length + 1;
  
    // Create a new receipt object
    const newReceipt = {
      id: newReceiptId,
      client,
      date,
      address,
      phone,
      workDescription,
      cost,
      expenses,
      isPaid: false
    };
  
    // Add the new receipt to the list of receipts
    receipts.push(newReceipt);
  
    res.status(201).json({ message: "Receipt created successfully", receipt: newReceipt });
  };
  
  // Update a receipt by ID
  const updateReceipt = (req, res) => {
    const { id } = req.params;
    const { client, date, address, phone, workDescription, cost, expenses, isPaid } = req.body;
  
    // Find the receipt with the provided ID
    const receipt = receipts.find((receipt) => receipt.id === parseInt(id));
  
    // Check if the receipt exists
    if (!receipt) {
      return res.status(404).json({ error: "Receipt not found" });
    }
  
    // Update the receipt properties
    receipt.client = client;
    receipt.date = date;
    receipt.address = address;
    receipt.phone = phone;
    receipt.workDescription = workDescription;
    receipt.cost = cost;
    receipt.expenses = expenses;
    receipt.isPaid = isPaid;
  
    res.json({ message: "Receipt updated successfully", receipt });
  };
  
  // Delete a receipt by ID
  const deleteReceipt = (req, res) => {
    const { id } = req.params;
  
    // Find the index of the receipt with the provided ID
    const index = receipts.findIndex((receipt) => receipt.id === parseInt(id));
  
    // Check if the receipt exists
    if (index === -1) {
      return res.status(404).json({ error: "Receipt not found" });
    }
  
    // Remove the receipt from the list
    receipts.splice(index, 1);

    res.json({ message: "Receipt deleted successfully" });
};

module.exports = {
  getAllReceipts,
  getReceiptById,
  createReceipt,
  updateReceipt,
  deleteReceipt
};
  

  