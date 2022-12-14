const express = require("express");
const router = new express.Router();
const test = require("../controllers/test");
const auth = require("../controllers/auth");
const user = require("../controllers/user");
const stripe = require("../controllers/stripe");

// Test GET API
router.get("/test-api", test.index);

// Test POST API
router.post("/test-post-api", test.indexPost);

// Auth
router.post("/login", auth.login);
router.post("/sign-up", auth.signUp);

//User
router.post("/get-user", user.findUser);
router.post("/change-password", user.changePassword);

// Stripe
router.post("/create-stripe-checkout", stripe.createCheckout);
router.post("/customer-payment-method", stripe.customerPaymentMethod);
router.post("/customer-invoices", stripe.customerInvoices);
router.post("/cancel-subscription", stripe.cancelSubscription);
router.post("/setup-intent", stripe.setupIntent);
router.post("/update-payment-method", stripe.updatePaymentMethod);
router.post(
  "/checkout-complete",
  express.raw({ type: "application/json" }),
  stripe.checkoutComplete
);
router.post(
  "/subscription-deleted",
  express.raw({ type: "application/json" }),
  stripe.subscriptionDeleted
);

module.exports = router;
