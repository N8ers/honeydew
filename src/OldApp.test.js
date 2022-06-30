import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import OldApp from "./OldApp"

test("renders learn react link", () => {
  render(<OldApp />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

test("display p tag", () => {
  render(<OldApp message="hi there!" />)

  const pTag = screen.getByTestId("pTag")
  expect(pTag).toContainHTML('<p data-testid="pTag">He is just this big</p>')
  expect(pTag).toContain("hi")
})

test("renders default props", () => {
  render(<OldApp />)

  const messageProp = screen.getByTestId("propMessage")
  expect(messageProp).toContainHTML(
    '<p data-testid="propMessage">default message</p>'
  )
})

test("renders custom prop", () => {
  render(<OldApp message="hi there!" />)

  const messageProp = screen.getByTestId("propMessage")
  expect(messageProp).toContainHTML(
    '<p data-testid="propMessage">hi there!</p>'
  )
})

/*
Next figure out how to 
* make a wrapper 
* do a `find()` 
* snapshots 
* fix the single-quote issues
* test just the text, not the markup as well
 
 */
