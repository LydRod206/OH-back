const express = require("express");
const userController = require("./userController");
const jobController = require("./jobController");
const receiptController = require("./receiptController");
const invoiceController = require("./invoiceController");
const jobCategoryController = require("./jobCategoryController");

const router = express.Router();

// Route for /api
router.get("/api", (req, res) => {
  res.send("This is the /api route");
});

// User routes
router.get("/api/users", userController.getUsers);
router.get("/api/users/:id", userController.getUser);
router.post("/api/users", userController.createUser);
router.put("/api/users/:id", userController.updateUser);
router.delete("/api/users/:id", userController.deleteUser);

// Job routes
router.get("/api/jobs", jobController.getAllJobs);
router.get("/api/jobs/:id", jobController.getJobById);
router.post("/api/jobs", jobController.createJob);
router.put("/api/jobs/:id", jobController.updateJob);
router.delete("/api/jobs/:id", jobController.deleteJob);

// Receipt routes
router.get("/api/receipts", receiptController.getAllReceipts);
router.get("/api/receipts/:id", receiptController.getReceiptById);
router.post("/api/receipts", receiptController.createReceipt);
router.put("/api/receipts/:id", receiptController.updateReceipt);
router.delete("/api/receipts/:id", receiptController.deleteReceipt);

// Invoice routes
router.get("/api/invoices", invoiceController.getAllInvoices);
router.get("/api/invoices/:id", invoiceController.getInvoiceById);
router.post("/api/invoices", invoiceController.createInvoice);
router.put("/api/invoices/:id", invoiceController.updateInvoice);
router.delete("/api/invoices/:id", invoiceController.deleteInvoice);

// Job category routes
router.get("/api/job-categories", jobCategoryController.getAllJobCategories);
router.get("/api/job-categories/:id", jobCategoryController.getJobCategoryById);
// router.post("/api/job-categories", jobCategoryController.createJobCategory);
// router.put("/api/job-categories/:id", jobCategoryController.updateJobCategory);
// router.delete("/api/job-categories/:id", jobCategoryController.deleteJobCategory);

module.exports = router;




// const express = require("express");
// const userController = require("./userController");
// const jobController = require("./jobController");
// const receiptController = require("./receiptController");
// const invoiceController = require("./invoiceController");
// const jobCategoryController = require("./jobCategoryController");

// const router = express.Router();


// // User routes
// router.get("/users", userController.getUsers);
// router.get("/users/:id", userController.getUser);
// router.post("/users", userController.createUser);
// router.put("/users/:id", userController.updateUser);
// router.delete("/users/:id", userController.deleteUser);

// // Job routes
// router.get("/jobs", jobController.getAllJobs);
// router.get("/jobs/:id", jobController.getJobById);
// router.post("/jobs", jobController.createJob);
// router.put("/jobs/:id", jobController.updateJob);
// router.delete("/jobs/:id", jobController.deleteJob);

// // Receipt routes
// router.get("/receipts", receiptController.getAllReceipts);
// router.get("/receipts/:id", receiptController.getReceiptById);
// router.post("/receipts", receiptController.createReceipt);
// router.put("/receipts/:id", receiptController.updateReceipt);
// router.delete("/receipts/:id", receiptController.deleteReceipt);

// // Invoice routes
// router.get("/invoices", invoiceController.getAllInvoices);
// router.get("/invoices/:id", invoiceController.getInvoiceById);
// router.post("/invoices", invoiceController.createInvoice);
// router.put("/invoices/:id", invoiceController.updateInvoice);
// router.delete("/invoices/:id", invoiceController.deleteInvoice);

// // Job category routes
// router.get("/job-categories", jobCategoryController.getAllJobCategories);
// router.get("/job-categories/:id", jobCategoryController.getJobCategoryById);
// // router.post("/job-categories", jobCategoryController.createJobCategory);
// // router.put("/job-categories/:id", jobCategoryController.updateJobCategory);
// // router.delete("/job-categories/:id", jobCategoryController.deleteJobCategory);

// module.exports = router;
