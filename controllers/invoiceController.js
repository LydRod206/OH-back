const { Invoice } = require('../models');

const getAllInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.findAll();
        res.status(200).json({ invoices });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getInvoiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findOne({
      where: { id: id }
    });
    if (invoice) {
      return res.status(200).json({ invoice });
    }
    res.status(404).json({ message: 'Invoice not found!' });
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const createInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);
    res.status(201).json({ invoice });
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Invoice.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedInvoice = await Invoice.findOne({ where: { id: id } });
      return res.status(200).json({ invoice: updatedInvoice });
    }
    throw new Error('Invoice not found');
  }
  catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Invoice.destroy({
      where: { id: id }
    });
    if (deleted) {
      return res.status(204).send('Invoice deleted');
    }
    throw new Error('Invoice not found');
  }
  catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllInvoices,
  getInvoiceById,
  createInvoice,
  updateInvoice,
  deleteInvoice
}