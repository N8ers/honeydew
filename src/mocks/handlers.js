import { rest } from "msw"

let nextListId = 4
let nextTaskId = 13

const friends = [
  { id: 1, username: "Goon" },
  { id: 2, username: "Tsuki" },
]

const tasks = [
  {
    id: 1,
    title: "Grocery List",
    tasks: [
      { id: 1, completed: true, title: "Throw rocks" },
      { id: 2, completed: false, title: "Eat socks" },
      { id: 3, completed: true, title: "Shake blocks" },
    ],
    invitedFriends: [friends[0]],
  },
  {
    id: 2,
    title: "Tricks to teach Tsuki",
    tasks: [
      { id: 4, completed: true, title: "Sit" },
      { id: 5, completed: false, title: "Be good" },
      { id: 6, completed: true, title: "Roll over" },
      { id: 7, completed: false, title: "Do taxes" },
      { id: 8, completed: true, title: "Bang Bang!" },
    ],
    invitedFriends: [friends[1]],
  },
  {
    id: 3,
    title: "Weekend Chores",
    tasks: [
      { id: 9, completed: false, title: "Get groceries" },
      { id: 10, completed: false, title: "Trim beard" },
      { id: 11, completed: false, title: "Code" },
      { id: 12, completed: false, title: "Clean" },
    ],
    invitedFriends: [],
  },
]

const baseUrl = "http://localhost:3050"

export const handlers = [
  rest.get(`${baseUrl}/lists`, (req, res, ctx) => {
    return res(ctx.delay(500), ctx.status(200), ctx.json(tasks))
  }),
  rest.get(`${baseUrl}/lists/:id`, (req, res, ctx) => {
    const [task] = tasks.filter((task) => {
      return task.id === parseInt(req.params.id)
    })

    if (task) {
      return res(ctx.delay(500), ctx.status(200), ctx.json(task))
    }
    return res(
      ctx.delay(500),
      ctx.status(400),
      ctx.json({ message: "no task found" })
    )
  }),

  rest.post(`${baseUrl}/lists`, (req, res, ctx) => {
    const newTask = {
      id: nextListId,
      title: "",
      tasks: [],
      invitedFriends: [],
    }
    tasks.push(newTask)
    nextListId++
    return res(ctx.status(200), ctx.json({ id: newTask.id }))
  }),

  rest.post(`${baseUrl}/listItem`, (req, res, ctx) => {
    const newListItem = {
      id: nextTaskId,
      title: req.body.title,
      completed: false,
    }

    tasks.forEach((task) => {
      if (task.id === req.body.listId) {
        task.tasks.push(newListItem)
      }
    })

    nextTaskId++
    return res(ctx.status(200))
  }),

  rest.put(`${baseUrl}/lists`, (req, res, ctx) => {
    tasks.forEach((task) => {
      if (task.id === req.body.id) {
        task.title = req.body.title
      }
    })

    return res(ctx.status(200))
  }),

  rest.put(`${baseUrl}/listItem/:id`, (req, res, ctx) => {
    tasks.forEach((taskList) => {
      taskList.tasks.forEach((task) => {
        if (task.id === parseInt(req.params.id)) {
          if (req.body.hasOwnProperty("title")) {
            task.title = req.body.title
          } else if (req.body.hasOwnProperty("completed")) {
            task.completed = req.body.completed
          }
        }
      })
    })

    return res(ctx.status(200))
  }),

  rest.put(`${baseUrl}/listItem/:id/collaborators`, (req, res, ctx) => {
    tasks.forEach((task) => {
      if (task.id === parseInt(req.params.id)) {
        task.invitedFriends = req.body
      }
    })
    return res(ctx.status(200))
  }),

  rest.delete(`${baseUrl}/listItem/:id`, (req, res, ctx) => {
    tasks.forEach((taskList) => {
      if (taskList.id === req.body.listId) {
        for (let i = 0; i < taskList.tasks.length; i++) {
          if (taskList.tasks[i].id === parseInt(req.params.id)) {
            taskList.tasks.splice(i, 1)
          }
        }
      }
    })
    return res(ctx.status(200))
  }),

  rest.get(`${baseUrl}/friends`, (req, res, ctx) => {
    return res(ctx.delay(500), ctx.status(200), ctx.json(friends))
  }),

  rest.get("http://localhost:3000/favicon.ico", (req, res) => {
    // this request was mocked to fix a stupid console warning
    return res()
  }),
]
