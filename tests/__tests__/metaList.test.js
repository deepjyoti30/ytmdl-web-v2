import { shallowMount } from "@vue/test-utils";
import MetaList from "../../src/components/MetaList.vue";

/* eslint-disable no-undef */
describe("Mounted MetaList", () => {
  const wrapper = shallowMount(MetaList, {
    propsData: {
      query: "Test"
    }
  });

  it("should fetch a list", async () => {
    expect(Array.isArray(wrapper.vm.fetchedData)).toBeTruthy();
  });
});
