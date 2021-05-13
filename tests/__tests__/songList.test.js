import { shallowMount } from "@vue/test-utils";
import SongList from "../../src/components/SongList.vue";
import fetchMock from "jest-fetch-mock";

/* eslint-disable no-undef */
fetchMock.enableMocks();
beforeEach(() => {
  fetch.resetMocks();
});

describe("Mounted SongList", () => {
  fetch.mockResponseOnce(JSON.stringify([{}]));

  const wrapper = shallowMount(SongList, {
    propsData: {
      query: "test"
    }
  });

  it("should be able to fetch data", () => {
    expect(Array.isArray(wrapper.vm.fetchedData)).toBeTruthy();
  });
});
