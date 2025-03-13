import React from "react";
import PizzaCard from "./PizzaCard";

const pizzas = [
  { id: 1, name: "Margherita", price: "$10" },
  { id: 2, name: "Pepperoni", price: "$12" },
  { id: 3, name: "BBQ Chicken", price: "$14" },
];

const PizzaList = () => {
  return (
    <div className="mt-4">
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default PizzaList;
