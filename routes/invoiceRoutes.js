const express = require('express');
const router = express.Router();

// Example database of invoices
let invoices = [];

// Get all invoices
router.get('/invoices', (req, res) => {
  res.json(invoices);
});

// Get a specific invoice
router.get('/invoices/:id', (req, res) => {
  const invoiceId = req.params.id;
  const invoice = invoices.find((invoice) => invoice.id === invoiceId);

  if (!invoice) {
    return res.status(404).json({ error: 'Invoice not found' });
  }

  res.json(invoice);
});

// Create a new invoice
router.post('/invoices', (req, res) => {
  const { client, amount } = req.body;

  if (!client || !amount) {
    return res.status(400).json({ error: 'Client and amount are required' });
  }

  const newInvoice = {
    id: Date.now().toString(),
    client,
    amount,
    paid: false,
  };

  invoices.push(newInvoice);
  res.status(201).json(newInvoice);
});

// Update an invoice
router.put('/invoices/:id', (req, res) => {
  const invoiceId = req.params.id;
  const { client, amount, paid } = req.body;

  let invoice = invoices.find((invoice) => invoice.id === invoiceId);

  if (!invoice) {
    return res.status(404).json({ error: 'Invoice not found' });
  }

  invoice.client = client || invoice.client;
  invoice.amount = amount || invoice.amount;
  invoice.paid = paid || invoice.paid;

  res.json(invoice);
});

// Delete an invoice
router.delete('/invoices/:id', (req, res) => {
  const invoiceId = req.params.id;
  const index = invoices.findIndex((invoice) => invoice.id === invoiceId);

  if (index === -1) {
    return res.status(404).json({ error: 'Invoice not found' });
  }

  invoices.splice(index, 1);
  res.sendStatus(204);
});

