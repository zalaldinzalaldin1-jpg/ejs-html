import { fileURLToPath } from "node:url";
import * as path from "node:path";
import express from "express";
import ejs from "ejs";

const PORT = parseInt(process.env.PORT || 3_000);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    imgURL: "/images/pic01.jpg",
  },
  {
    imgURL: "/images/pic02.jpg",
  },
  {
    imgURL: "/images/pic03.jpg",
  },
  {
    imgURL: "/images/pic04.jpg",
  },
  {
    imgURL: "/images/pic05.jpg",
  },
  {
    imgURL: "/images/pic06.jpg",
  },
  {
    imgURL: "/images/pic07.jpg",
  },
  {
    imgURL: "/images/pic08.jpg",
  },
  {
    imgURL: "/images/pic09.jpg",
  },
  // {
  //   imgURL: "/images/pic10.jpg",
  // },
  // {
  //   imgURL: "/images/pic11.jpg",
  // },
];

const array = [
  {
    name: "Item1",
    description: "Ante turpis integer aliquet porttitor.",
    price: 29.99,
  },
  {
    name: "Item2",
    description: "Vis ac commodo adipiscing arcu aliquet.",
    price: 19.99,
  },
  {
    name: "Item3",
    description: "Morbi faucibus arcu accumsan lorem.",
    price: 29.99,
  },
  {
    name: "Item4",
    description: "Vitae integer tempus condimentum.",
    price: 19.99,
  },
  {
    name: "Item5",
    description: "Ante turpis integer aliquet porttitor.",
    price: 29.99,
  },
];

let sum = 0;
for (const i of array) {
  sum += i.price;
}

const array2 = [
  {
    name: "Item1",
    description: "Ante turpis integer aliquet porttitor.",
    price: 29.99,
  },
  {
    name: "Item2",
    description: "Vis ac commodo adipiscing arcu aliquet.",
    price: 19.99,
  },
  {
    name: "Item3",
    description: "Morbi faucibus arcu accumsan lorem.",
    price: 29.99,
  },
  {
    name: "Item4",
    description: "Vitae integer tempus condimentum.",
    price: 19.99,
  },
  {
    name: "Item5",
    description: "Ante turpis integer aliquet porttitor.",
    price: 49.99,
  },
];

let sum2 = 0;
for (const i of array2) {
  sum2 += i.price;
}

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.engine("html", ejs.renderFile);
app.set("view engine", "html");

app.set("views", path.join(__dirname, "views"));

app.get("/", (_, res) => res.render("index"));
app.get("/elements", (_, res) =>
  res.render("elements", { images, array, sum, array2, sum2 }),
);
app.get("/generic", (_, res) => res.render("generic"));
//

app.listen(PORT, () => {
  console.info(`Server ready at: ${PORT}`);
});
