import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import NewListItem from "./NewListItem"

describe("NewListItem.js", () => {
  test("Renders default contnet", async () => {
    const mock_addListItem = jest.fn()
    render(<NewListItem addListItem={mock_addListItem} />)
    const wrapper = screen.getByTestId("newListItemForm")
    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toMatchSnapshot()
  })

  test("Add and submit a new item", () => {
    const mock_addListItem = jest.fn()
    render(<NewListItem addListItem={mock_addListItem} />)

    const inputField = screen.getByTestId("textField").querySelector("input")
    expect(inputField).toBeInTheDocument()

    fireEvent.change(inputField, { target: { value: "hi" } })
    expect(inputField.value).toBe("hi")

    const addButton = screen.getByTestId("addButton")
    fireEvent.click(addButton)

    expect(mock_addListItem).toHaveBeenCalledTimes(1)
    expect(mock_addListItem).toHaveBeenCalledWith("hi")

    expect(inputField.value).toBe("")
  })
})
