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

  it("should detect URL's", () => {
    wrapper.setData({
      $route: {
        query: {
          query: "https://test.testsites.com"
        }
      }
    });

    expect(wrapper.vm.isUrl).toBeTruthy();
  });

  it("should detect YouTube URL's", () => {
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

  it("should extract video ID", () => {
    expect(wrapper.vm.extractVideoId("https://youtube.com/watch?v=test")).toBe(
      "test"
    );
  });

  it("should send search request for query", () => {
    wrapper.setData({
      $route: {
        query: {
          query: "test"
        }
      }
    });

    wrapper.vm.sendSearchRequest();

    expect(wrapper.emitted().search[0][0]).toStrictEqual({
      song: "test",
      isYoutube: false
    });
  });

  it("should show error if invalid URL is passed", () => {
    wrapper.setData({
      $route: {
        query: {
          query: "https://deepjyoti30.dev"
        }
      }
    });

    wrapper.vm.sendSearchRequest();

    expect(wrapper.vm.isInvalidInput).toBeTruthy();
  });

  it("should send search request for Youtube URL", () => {
    wrapper.setData({
      $route: {
        query: {
          query: "https://youtube.com/watch?v=test"
        }
      }
    });

    wrapper.vm.sendSearchRequest();

    expect(wrapper.emitted().search[1][0]).toStrictEqual({
      youtubeUrl: "https://youtube.com/watch?v=test",
      isYoutube: true,
      videoId: "test"
    });
  });
});
