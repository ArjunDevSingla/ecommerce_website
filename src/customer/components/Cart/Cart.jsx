import React from "react";
import CartItem from "./CartItem";
import { Divider, Button } from "@mui/material";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className=" col-span-2">
          {[1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>

        <div className="px-5 sticky top-0 h-[100rem] mt-5 lg:mt-0">
          <div className="border p-3">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-2 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹5000</span>
              </div>

              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-700">-₹3500</span>
              </div>

              <div className="flex justify-between pt-3 ">
                <span>Delivery Charges</span>
                <span className="text-green-700">Free</span>
              </div>

              <div className="flex justify-between pt-3 text-green-700">
                <span>Total Price</span>
                <span>₹1600</span>
              </div>
            </div>

            <Button
              variant="contained"
              className="w-full"
              sx={{
                px: "2.5rem",
                py: "0.7rem",
                bgcolor: "#9155fd",
                mt: "1rem",
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
