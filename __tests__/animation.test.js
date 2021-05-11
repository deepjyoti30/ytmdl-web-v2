import { mount } from "@vue/test-utils";
import App from "./../../src/App.vue";

/* eslint-disable no-undef */
describe("Mounted App", () => {
  const wrapper = mount(App);

  it("shows the correct text", () => {
    expect(wrapper.html()).toContain("Getting the song ready for you");
  });
});
