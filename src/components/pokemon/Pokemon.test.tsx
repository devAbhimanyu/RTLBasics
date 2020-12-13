import React from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Pokemon: when the user enters a valid Pokemon name", () => {
  test("shows the pokemon abilities", async () => {
    const abilities = [
      {
        ability: {
          name: "Test ability 1",
          url: "https://ability.com/ability1",
        },
      },
      {
        ability: {
          name: "Test ability 2",
          url: "https://ability.com/ability2",
        },
      },
    ];
    mockedAxios.get.mockResolvedValueOnce({ data: { abilities } });
    render(<Pokemon />);
    await userEvent.type(screen.getByRole("textbox"), "pikachu");
    await userEvent.click(screen.getByRole("button"));
    const returnedAbilities = await screen.findAllByRole("listitem");
    expect(returnedAbilities.length).toEqual(2);
  });
});

describe("Pokemon: when the user enters an invalid Pokemon name", () => {
  test("shows the error message", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error());
    render(<Pokemon />);
    await userEvent.type(screen.getByRole("textbox"), "pikachuchu");
    await userEvent.click(screen.getByRole("button"));
    const errMessage = await screen.findByText("Something went wrong...");
    expect(errMessage).toBeInTheDocument();
  });
});
