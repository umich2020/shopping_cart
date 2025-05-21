import userEvent from "@testing-library/user-event";
import { OrderPage } from "./Orderpage";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

describe("Clear button",()=>{
    it("clicks clear button", async ()=>{
        const user = userEvent.setup();

         render(
      <BrowserRouter>
        <OrderPage />
      </BrowserRouter>
    );

        render(<OrderPage/>)
        const button = screen.getByRole("button", {name: "Clear cart"})
        await user.click(button)
        expect(screen.getByRole("button", {name: "Clear cart"}).textContent).toMatch(/Cart is cleared/i)
    })
})