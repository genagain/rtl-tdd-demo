import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import Index from "../Index"

describe("The Index component", () => {
  beforeEach(() => {
    render(<BrowserRouter><Index /></BrowserRouter>)
  })

  describe("renders", () => {
    test("the header", () => {
      const header = screen.getByRole('heading', { name: /index/i })
      expect(header).toBeInTheDocument()
    })

    test("the signup link", () => {
      const link = screen.getByRole('link', { name: /sign up/i })
      expect(link).toBeInTheDocument()
    })
  })
})
