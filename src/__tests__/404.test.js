import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import NotFoundPage from "../screens/404.vue";

describe("NotFoundPage", () => {
    it("renders the 404 message", () => {
        const wrapper = mount(NotFoundPage);
        expect(wrapper.find("h1").text()).toBe("404");
    });

    it("renders the 'Page Not Found' message", () => {
        const wrapper = mount(NotFoundPage);
        expect(wrapper.find("p").text()).toBe("Page Not Found");
    });

    it("applies the correct classes to the main container", () => {
        const wrapper = mount(NotFoundPage);
        expect(wrapper.classes()).toContain("flex");
        expect(wrapper.classes()).toContain("flex-col");
        expect(wrapper.classes()).toContain("items-center");
        expect(wrapper.classes()).toContain("justify-center");
    });
});