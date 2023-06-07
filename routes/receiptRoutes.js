const express = require('express');
const router = express.Router();

// Example database of receipts
let receipts = [];

// Get all receipts
router.get('/receipts', (req, res) => {
  res.json(receipts);
});

// Get a specific receipt
router.get('/receipts/:id', (req, res) => {
  const receiptId = req.params.id;
  const receipt = receipts.find((receipt) => receipt.id === receiptId);

  if (!receipt) {
    return res.status(404).json({ error: 'Receipt not found' });
  }

  res.json(receipt);
});

// Create a new receipt
router.post('/receipts', (req, res) => {
  const { client, amount } = req.body;

  if (!client || !amount) {
    return res.status(400).json({ error: 'Client and amount are required' });
  }

  const newReceipt = {
    id: Date.now().toString(),
    client,
    amount,
  };

  receipts.push(newReceipt);
  res.status(201).json(newReceipt);
});

// Update a receipt
router.put('/receipts/:id', (req, res) => {
  const receiptId = req.params.id;
  const { client, amount } = req.body;

  let receipt = receipts.find((receipt) => receipt.id === receiptId);

  if (!receipt) {
    return res.status(404).json({ error: 'Receipt not found' });
  }

  receipt.client = client || receipt.client;
  receipt.amount = amount || receipt.amount;

  res.json(receipt);
});

// Delete a receipt
router.delete('/receipts/:id', (req, res) => {
  const receiptId = req.params.id;
  const index = receipts.findIndex((receipt) => receipt.id === receiptId);

  if (index === -1) {
    return res.status(404).json({ error: 'Receipt not found' });
  }

  receipts.splice(index, 1);
  res.sendStatus(204);
});

module.exports = router;
