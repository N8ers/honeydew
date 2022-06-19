import { rest } from "msw";

const tasks = [
  {
    id: 1,
    title: "Grocery List",
    tasks: [
      { id: 1, completed: true, title: "Throw rocks" },
      { id: 2, completed: false, title: "Eat socks" },
      { id: 3, completed: true, title: "Shake blocks" },
    ],
    invitedFriends: [{ id: 1, username: "Goon" }],
  },
  {
    id: 2,
    title: "Tricks to teach Tsuki",
    tasks: [
      { id: 1, completed: true, title: "Sit" },
      { id: 2, completed: false, title: "Be good" },
      { id: 3, completed: true, title: "Roll over" },
      { id: 4, completed: false, title: "Do taxes" },
      { id: 5, completed: true, title: "Bang Bang!" },
    ],
    invitedFriends: [],
  },
  {
    id: 3,
    title: "Weekend Chores",
    tasks: [
      { id: 1, completed: false, title: "Get groceries" },
      { id: 2, completed: false, title: "Trim beard" },
      { id: 3, completed: false, title: "Code" },
      { id: 4, completed: false, title: "Clean" },
    ],
    invitedFriends: [],
  },
];

export const handlers = [
  rest.get("http://localhost:3050/lists", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tasks));
  }),
  rest.get("http://localhost:3050/lists/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tasks[0]));
  }),
  rest.get("http://localhost:3050/lists/2", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tasks[1]));
  }),
  rest.get("http://localhost:3050/lists/3", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tasks[2]));
  }),

  rest.put("http://localhost:3050/lists/", (req, res, ctx) => {
    tasks.forEach((task) => {
      if (task.id === req.body.id) {
        task.title = req.body.title;
      }
    });

    return res(ctx.status(200));
  }),

  rest.get("http://localhost:3000/favicon.ico", (req, res, ctx) => {
    // this request was mocked to fix a stupid console warning
    return res();
  }),
];
