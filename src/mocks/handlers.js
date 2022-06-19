import { rest } from "msw";

let nextId = 4;

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

const baseUrl = "http://localhost:3050";

export const handlers = [
  rest.get(`${baseUrl}/lists`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tasks));
  }),
  rest.get(`${baseUrl}/lists/:id`, (req, res, ctx) => {
    const [task] = tasks.filter((task) => {
      return task.id === parseInt(req.params.id);
    });
    return res(ctx.status(200), ctx.json(task));
  }),

  rest.post(`${baseUrl}/lists`, (req, res, ctx) => {
    console.log("mock service worker");
    const newTask = {
      id: nextId,
      title: "",
      tasks: [],
      invitedFriends: [],
    };
    tasks.push(newTask);
    nextId++;
    return res(ctx.status(200), ctx.json({ id: newTask.id }));
  }),

  rest.put(`${baseUrl}/lists`, (req, res, ctx) => {
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
