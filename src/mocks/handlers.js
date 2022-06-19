import { rest } from "msw";

const groceryTasks = [
  { id: 1, completed: true, title: "Throw rocks" },
  { id: 2, completed: false, title: "Eat socks" },
  { id: 3, completed: true, title: "Shake blocks" },
];

const tsukiTasks = [
  { id: 1, completed: true, title: "Sit" },
  { id: 2, completed: false, title: "Be good" },
  { id: 3, completed: true, title: "Roll over" },
  { id: 4, completed: false, title: "Do taxes" },
  { id: 5, completed: true, title: "Bang Bang!" },
];

const weekendTasks = [
  { id: 1, completed: false, title: "Get groceries" },
  { id: 2, completed: false, title: "Trim beard" },
  { id: 3, completed: false, title: "Code" },
  { id: 4, completed: false, title: "Clean" },
];

export const handlers = [
  rest.get("http://localhost:3050/lists", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "Grocery List",
          tasks: [...groceryTasks],
          invitedFriends: [{ id: 1, username: "Goon" }],
        },
        {
          id: 2,
          title: "Tricks to teach Tsuki",
          tasks: [...tsukiTasks],
          invitedFriends: [],
        },
        {
          id: 3,
          title: "Weekend Chores",
          tasks: [...weekendTasks],
          invitedFriends: [],
        },
      ])
    );
  }),
  rest.get("http://localhost:3050/lists/1", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        title: "Grocery List",
        tasks: [...groceryTasks],
      })
    );
  }),
  rest.get("http://localhost:3050/lists/2", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 2,
        title: "Tricks to teach Tsuki",
        tasks: [...tsukiTasks],
      })
    );
  }),
  rest.get("http://localhost:3050/lists/3", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 3,
        title: "Weekend Chores",
        tasks: [...weekendTasks],
      })
    );
  }),

  rest.get("http://localhost:3000/favicon.ico", (req, res, ctx) => {
    // this request was mocked to fix a stupid console warning
    return res();
  }),
];
