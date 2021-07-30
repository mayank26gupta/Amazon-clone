import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  console.log("User is>>>>>", user);
  useEffect(() => {
    if (user) {
      console.log("Inside IF");
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log(orders);
  return (
    <div className="orders">
      <h2>Your Orders</h2>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
