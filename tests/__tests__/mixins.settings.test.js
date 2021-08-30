import MockComponent from "../utils/mockComponent.vue";
import { shallowMount } from "@vue/test-utils";
import { settings } from "@/components/mixins/settings";

/* eslint-disable no-undef */
describe("Mounted Settings Mixin", () => {
  const wrapper = shallowMount(MockComponent, {
    mixins: [settings]
  });

  it("should return proper boolean from value", () => {
    expect(wrapper.vm.getBoolFromValue("on")).toBeTruthy();
    expect(wrapper.vm.getBoolFromValue("off")).toBeFalsy();
  });

  it("should throw error if invalid value is passed", () => {
    expect.assertions(1);

    try {
      wrapper.vm.getBoolFromValue("test");
    } catch (e) {
      expect(e).toContain("not a valid value");
    }
  });

  it("should return proper value from boolean", () => {
    expect(wrapper.vm.getValueFromBool(true)).toBe("on");
    expect(wrapper.vm.getValueFromBool(false)).toBe("off");
  });
});
