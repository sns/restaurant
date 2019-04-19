import * as express from "express";
import path from "path";

const app: express.Application = express.default();
const port = process.env.PORT || 3456;

// Static file declaration
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Production Mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

// Build Mode
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.get("/fetchMenuItems", (req, res) => {
  const list = [
    { menuItemKey: 1, name: "Barg", price: 17 },
    { menuItemKey: 2, name: "Lamb", price: 18 },
    { menuItemKey: 3, name: "Chicken", price: 16 },
    { menuItemKey: 4, name: "Salmon", price: 22 }
  ];
  res.json(list);
});

app.listen(port, () => {
  console.log("Server is listening on port 3456");
});
