import { mount } from "@vue/test-utils";
import Animation from "../../src/components/Animation.vue";

/* eslint-disable no-undef */
describe("Mounted Animation", () => {
  const wrapper = mount(Animation);

  it("shows the correct text", () => {
    expect(wrapper.html()).toContain("Getting the song ready for you");
  });

  it("shows the correct prop", async () => {
    await wrapper.setProps({ text: "Loading" });

    expect(wrapper.html()).toContain("Loading");
  });
});
