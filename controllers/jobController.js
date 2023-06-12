const { Job } = require("../models");

const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.findAll();
        res.status(200).json({ jobs });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getJobById = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findOne({
            where: { id: id }
        });
        if (job) {
            return res.status(200).json({ job });
        }
        res.status(404).json({ message: "Job not found!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createJob = async (req, res) => {
    try {
        const job = await Job.create(req.body);
        res.status(201).json({ job });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Job.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedJob = await Job.findOne({ where: { id: id } });
            return res.status(200).json({ job: updatedJob });
        }
        throw new Error("Job not found");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Job.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(200).json({message: 'Job deleted'});
        }
        throw new Error("Job not found");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob
}