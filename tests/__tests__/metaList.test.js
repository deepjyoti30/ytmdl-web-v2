import { shallowMount } from "@vue/test-utils";
import MetaList from "../../src/components/MetaList.vue";
import fetchMock from "jest-fetch-mock";

/* eslint-disable no-undef */
// Mock fetch
fetchMock.enableMocks();
beforeEach(() => {
  fetch.resetMocks();
});

describe("Mounted MetaList", () => {
  fetch.mockResponseOnce(JSON.stringify([{}]));

  const $route = {
    query: "test"
  };
  const wrapper = shallowMount(MetaList, {
    propsData: {
      query: "test"
    },
    mocks: {
      $route
    }
  });

  it("should fetch a list", async () => {
    // /await wrapper.vm.searchMetadata();
    expect(Array.isArray(wrapper.vm.fetchedData)).toBeTruthy();
  });
});
