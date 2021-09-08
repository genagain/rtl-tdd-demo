import { render, screen } from "@testing-library/react"

import Signup from "../Signup"

describe("The Signup component", () => {
  beforeEach(() => {
    render(<Signup />)
  })

  describe("renders", () => {
    test("the header", () => {
      const header = screen.getByRole('heading', { name: /Sign Up/ })
      expect(header).toBeInTheDocument()
    })

    test("the username", () => {
      const username = screen.getByLabelText('Username')
      expect(username.type).toEqual("text")
    })

    test("the email", () => {
      const email = screen.getByLabelText('Email')
      expect(email.type).toEqual("text")
    })

    test("the password", () => {
      const password = screen.getByLabelText('Password')
      expect(password.type).toEqual("password")
    })

    test("the password confirmation", () => {
      const passwordConfirmation = screen.getByLabelText('Confirm Password')
      expect(passwordConfirmation.type).toEqual("password")
    })

    test("the sign up button", () => {
      const button = screen.getByRole('button', { name: /Sign Up/ })
      expect(button.type).toEqual("submit")
    })
  })
})
