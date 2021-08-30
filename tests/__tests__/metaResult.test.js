import { shallowMount } from "@vue/test-utils";
import MetaResult from "../../src/components/MetaResult.vue";

/* eslint-disable no-undef */

describe("Mounted MetaResult", () => {
  const $route = {
    query: "test"
  };
  const wrapper = shallowMount(MetaResult, {
    propsData: {
      meta: {
        time: 221446,
        release_date: "2018-02-23T08:00:00Z",
        cover: ""
      }
    },
    mocks: {
      $route
    }
  });

  it("should convert millis to Minutes and seconds", () => {
    expect(wrapper.vm.getDuration).toBe("3:41");
  });

  it("should return proper release date", () => {
    expect(wrapper.vm.getRelease).toBe("Feb 23, 2018");
  });

  it("should be able to handle release dates without a T", async () => {
    wrapper.setProps({ meta: { release_date: "2021-02-27" } });
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.getRelease).toBe("Feb 27, 2021");
  });
});
