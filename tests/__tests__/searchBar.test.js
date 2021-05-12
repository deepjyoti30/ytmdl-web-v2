import { shallowMount } from "@vue/test-utils";
import SearchBar from "../../src/components/SearchBar.vue";

/* eslint-disable no-undef */
describe("Mounted SearchBar", () => {
  const $route = {
    query: {
      query: "test"
    }
  };
  const $router = "";
  const wrapper = shallowMount(SearchBar, {
    propsData: {
      disableAutoSearch: true
    },
    mocks: {
      $route,
      $router
    }
  });

  it("should extract query", () => {
    expect(wrapper.vm.songEntered).toBe("test");
  });

  it("should detect URL's", async () => {
    wrapper.setData({
      $route: {
        query: {
          query: "https://test.testsites.com"
        }
      }
    });

    expect(wrapper.vm.isUrl).toBeTruthy();
  });

  it("should detecth YouTube URL's", async () => {
    wrapper.setData({
      $route: {
        query: {
          query: "https://youtube.com/watch?v=test"
        }
      }
    });

    expect(wrapper.vm.isYoutubeUrl).toBeTruthy();

    wrapper.setData({
      $route: {
        query: {
          query: "https://deepjyoti30.dev"
        }
      }
    });

    expect(wrapper.vm.isYoutubeUrl).toBeFalsy();
  });
});
