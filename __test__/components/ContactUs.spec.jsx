import { render, screen } from "@testing-library/react"
import ContactUs from "../../src/components/ContactUs";

it("renders ContactUs component", () => {
    render(<ContactUs />); // Render the ContactUs component using js-dom which is like a browser environment or simulates a browser environment

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument(); // Check if the heading is present in the document

})

it("renders ContactUs button", () => {
    render(<ContactUs />); // Render the ContactUs component

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument(); // Check if the button is present in the document

})

it("renders by text button", () => {
    render(<ContactUs />); // Render the ContactUs component

    const button = screen.getByText("Click")

    expect(button).toBeInTheDocument(); // Check if the button is present in the document

})

it("renders input text", () => {
    render(<ContactUs />); // Render the ContactUs component

    const input = screen.getByPlaceholderText("Enter your name")

    expect(input).toBeInTheDocument(); // Check if the input is present in the document

})

it("renders all input texts", () => {

    render(<ContactUs />)


    const inputBoxes = screen.getAllByRole('textbox')

    // console.log(inputBoxes);

    expect(inputBoxes.length).toBe(2); // Check if there are two input boxes present in the document


})

