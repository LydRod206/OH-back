const invoices = [
    {
      id: 1,
      client: "Regina George",
      date: "2023-05-01",
      address: "123 North Shore High St",
      phone: "555-1234",
      workDescription: "Being fabulous",
      cost: 10000,
      expenses: 500,
      isPaid: false
    },
    {
      id: 2,
      client: "Cady Heron",
      date: "2023-05-05",
      address: "456 Mathletes Ave",
      phone: "555-5678",
      workDescription: "Math tutoring",
      cost: 50,
      expenses: 10,
      isPaid: true
    },
    {
      id: 3,
      client: "Karen Smith",
      date: "2023-05-10",
      address: "789 Plastics Blvd",
      phone: "555-9876",
      workDescription: "Hair styling",
      cost: 200,
      expenses: 20,
      isPaid: false
    },
    {
      id: 4,
      client: "Gretchen Wieners",
      date: "2023-05-15",
      address: "321 Fetch Ln",
      phone: "555-4321",
      workDescription: "Fetching fetch",
      cost: 1000,
      expenses: 100,
      isPaid: true
    }
  ];
  

  // Get all invoices
  const getAllInvoices = (req, res) => {
    res.json({ invoices });
  };
  
  // Get a specific invoice by ID
  const getInvoiceById = (req, res) => {
    const { id } = req.params;
  
    // Find the invoice with the provided ID
    const invoice = invoices.find((inv) => inv.id === parseInt(id));
  
    // Check if the invoice exists
    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }
  
    res.json({ invoice });
  };
  
  // Create a new invoice
  const createInvoice = (req, res) => {
    const { client, date, address, phone, workDescription, cost, expenses, isPaid } = req.body;
  
    // Generate a new ID for the invoice (replace this with your preferred method)
    const id = invoices.length + 1;
  
    // Create the new invoice object
    const newInvoice = {
      id,
      client,
      date,
      address,
      phone,
      workDescription,
      cost,
      expenses,
      isPaid
    };
  
    // Add the new invoice to the list
    invoices.push(newInvoice);
  
    res.status(201).json({ message: "Invoice created successfully", invoice: newInvoice });
  };
  
  // Update an existing invoice
  const updateInvoice = (req, res) => {
    const { id } = req.params;
    const { client, date, address, phone, workDescription, cost, expenses, isPaid } = req.body;
  
    // Find the index of the invoice with the provided ID
    const index = invoices.findIndex((inv) => inv.id === parseInt(id));
  
    // Check if the invoice exists
    if (index === -1) {
      return res.status(404).json({ error: "Invoice not found" });
    }
  
    // Update the invoice object
    invoices[index] = {
      id: parseInt(id),
      client,
      date,
      address,
      phone,
      workDescription,
      cost,
      expenses,
      isPaid
    };
  
    res.json({ message: "Invoice updated successfully", invoice: invoices[index] });
  };
  
  // Delete an existing invoice
  const deleteInvoice = (req, res) => {
    const { id } = req.params;
  
    // Find the index of the invoice with the provided ID
    const index = invoices.findIndex((inv) => inv.id === parseInt(id));
  
    // Check if the invoice exists
    if (index === -1) {
      return res.status(404).json({ error: "Invoice not found" });
    }
  
    // Remove the invoice from the list
    invoices.splice(index, 1);
  
    res.json({ message: "Invoice deleted successfully" });
  };
  
  module.exports = {
    getAllInvoices,
    getInvoiceById,
    createInvoice,
    deleteInvoice,
    updateInvoice
  };
  
  