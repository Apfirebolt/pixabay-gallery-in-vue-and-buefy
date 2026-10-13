import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Dinosaur from "../screens/Dinosaur.vue";
import axios from "axios";

vi.mock("axios");

describe("Dinosaur.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Dinosaur, {
      global: {
        stubs: {
          Loader: true,
          "ag-grid-vue": true,
        },
      },
    });
  });

  it("renders the header correctly", () => {
    expect(wrapper.find("h1").text()).toBe("Dinosaurs");
  });

  it("fetches dinosaur data on mount", async () => {
    const mockData = {
      data: {
        results: [{ id: 1, name: "Tyrannosaurus Rex" }],
        next: null,
        previous: null,
      },
    };
    axios.get.mockResolvedValueOnce(mockData);

    await wrapper.vm.getDinosaurData();

    expect(axios.get).toHaveBeenCalledWith(
      "https://softgenie.org/api/dinosaur?page=1"
    );
    expect(wrapper.vm.dinosaurData).toEqual(mockData.data);
  });
});
