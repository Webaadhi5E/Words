import { ReactiveFormComponent } from "./reactive-form.component"

describe('reactiveForm', () => {
  it("should Multiply two numbers", () => {
    const multiply = new ReactiveFormComponent;
    const result = multiply.multiply(5, 5);
    expect(result).toBe(25);
  })
})
