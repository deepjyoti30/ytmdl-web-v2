import { shallowMount } from "@vue/test-utils";
import Navbar from "../../src/components/Navbar.vue";

/* eslint-disable no-undef */
describe("Mounted Navbar", () => {
  const wrapper = shallowMount(Navbar);
  const toggleButton = wrapper.find(".menu-btn").find("button");

  it("should toggle the bar when the menu button is clicked", async () => {
    await toggleButton.trigger("click");

    expect(wrapper.vm.expandNavbar).toBeTruthy();
  });

  it("should toggle the bar back to hidden on another click", async () => {
    await toggleButton.trigger("click");

    expect(wrapper.vm.expandNavbar).toBeFalsy();
  });

  it("should enable dark mode on btn click", async () => {
    // Select the first theme-toggle-btn class and select the
    // button from there.
    const expandedThemeBtn = wrapper
      .findAll(".theme-toggle-btn")
      .at(1)
      .find("button");
    await expandedThemeBtn.trigger("click");

    expect(wrapper.emitted().themeChange[0][0]).toBe("dark");
  });

  it("should disable dark mode on btn click again", async () => {
    // Set the isDark variable to true
    wrapper.setProps({
      isDark: true
    });
    await wrapper.vm.$nextTick();
    // Select the second theme toggle btn. This will be the collapsed
    // one.
    await wrapper
      .findAll(".theme-toggle-btn")
      .at(1)
      .find("div")
      .find("button")
      .trigger("click");

    expect(wrapper.emitted().themeChange[1][0]).toBe("light");
  });
});
