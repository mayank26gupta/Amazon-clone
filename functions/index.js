const functions = require("firebase-functions");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JGIaYSDPJyq500n2vQJkaPUoZgdfJxdWdyjqHhFcoPFVUKRg3Qd3aP41h1wE7Cq5L3aKPL0IkQxWxVlLyrcReCj00TdaIaAx3"
);

// - API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json()); // this will allow us to send data and pass it in JSON format

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

// app.get("/mayank", (request, response) =>
//   response.status(200).send("hey Mayank")
// );

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Received BOOM!!! for this total amount>>>>", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total, // subunits of currency
    currency: "usd",
  });

  //OK- Created

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//API endpoint: http://localhost:5001/clone-5cf51/us-central1/api
