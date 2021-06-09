import { v4 as uuidv4 } from "uuid";

export const items = [
  {
    name: "Toiletries",
    id: uuidv4(),
    items: [
      {
        name: "Toothbrush",
        id: uuidv4(),
        distance: 1,
        quantity: 1,
      },
      {
        name: "Tootpaste",
        id: uuidv4(),
        distance: 1,
        quantity: 1,
      },
      {
        name: "Shaver",
        id: uuidv4(),
        distance: 20,
        quantity: 1,
      },
      {
        name: "Shaving Gel",
        id: uuidv4(),
        distance: 20,
        quantity: 1,
      },
    ],
  },
  {
    name: "Beach",
    id: uuidv4(),
    items: [
      {
        name: "Swimsuit",
        id: uuidv4(),
        distance: 1,
        quantity: 1,
      },
      {
        name: "Sunglasses",
        id: uuidv4(),
        distance: 1,
        quantity: 1,
      },
    ],
  },
  {
    name: "Essentials",
    id: uuidv4(),
    items: [
      {
        name: "Hand Sanitizer",
        id: uuidv4(),
        distance: 1,
        quantity: 1,
      },
      {
        name: "Extra Battery For Cell Phone",
        id: uuidv4(),
        distance: 10,
        quantity: 1,
      },
      {
        name: "Vitamins",
        id: uuidv4(),
        distance: 25,
        quantity: 1,
      },
    ],
  },
  {
    name: "Camping",
    id: uuidv4(),
    items: [
      {
        name: "Hand Sanitizer",
        id: uuidv4(),
        distance: 1,
        quantity: 1,
      },
      {
        name: "Tent",
        id: uuidv4(),
        distance: 1,
        quantity: 1,
      },
      {
        name: "Sleeping Bag",
        id: uuidv4(),
        distance: 1,
        quantity: 1,
      },
      {
        name: "Eating Utensils",
        id: uuidv4(),
        distance: 15,
        quantity: 1,
      },
    ],
  },
];
