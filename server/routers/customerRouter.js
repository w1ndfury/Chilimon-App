const router = require("express").Router();
const Customer = require("../models/customerModel");
const auth = require("../middleware/auth");

// create a customer

router.post("/", auth, async (req, res) => {        //auth ---> middleware function  (first runs auth, after the request)
    try {
      const { name } = req.body;
           
      const newCustomer = new Customer({
        name,
      });
  
      const savedCustomer = await newCustomer.save();
  
      res.json(savedCustomer);
      
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });

// delete a customer
router.delete("/:id", auth, async (req, res) => {        // auth ---> middleware function  (first runs auth, after the request)
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) throw Error('No customer found');

    const removed = await customer.remove();
    if (!removed)
      throw Error('Something went wrong while trying to delete the customer');

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

// get all customers
router.get("/", auth, async (req, res) => {
try {
    const customers = await Customer.find();
    res.json(customers);
} catch (err) {
    console.error(err);
    res.status(500).send();
}
});

module.exports = router;