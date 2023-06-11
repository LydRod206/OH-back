const { Client } = require("../models");

const getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.status(200).json({ clients });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getClientById = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Client.findOne({
            where: { id: id }
        });
        if (client) {
            return res.status(200).json({ client });
        }
        res.status(404).json({ message: "Client not found!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createClient = async (req, res) => {
    try {
        const client = await Client.create(req.body);
        res.status(201).json({ client });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Client.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedClient = await Client.findOne({ where: { id: id } });
            return res.status(200).json({ client: updatedClient });
        }
        throw new Error("Client not found");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Client.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("Client deleted");
        }
        throw new Error("Client not found");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllClients,
    getClientById,
    createClient,
    updateClient,
    deleteClient
}