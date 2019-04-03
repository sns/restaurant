import * as express from "express";

const app: express.Application = express.default();

app.get("/fetchMenuItems", (req, res) => {
  const list = [
    { menuItemKey: 1, name: "Barg", price: 17 },
    { menuItemKey: 2, name: "Lamb", price: 18 },
    { menuItemKey: 3, name: "Chicken", price: 16 },
    { menuItemKey: 4, name: "Salmon", price: 22 }
  ];
  res.json(list);
});

app.listen(3456, () => {
  console.log("Server is listening on port 3456");
});
