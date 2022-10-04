import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

describe('Greet', () => {
  it('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello Guest')
    expect(textElement).toBeInTheDocument()
  })
})

describe('Nested', () => {
  it('renders with a name', () => {
    render(<Greet name='Bharath' />)
    const textElement = screen.getByText('Hello Bharath')
    expect(textElement).toBeInTheDocument()
  })
})