import { shallowMount } from "@vue/test-utils";
import DownloadButton from "../src/components/DownloadButton.vue";

/* eslint-disable no-undef */
describe("Mounted Download Button", () => {
  // Override the showError method
  const wrapper = shallowMount(DownloadButton, {
    propsData: {
      downloadDetails: {
        url: "",
        filename: "Test"
      }
    }
  });

  const button = wrapper.find("button");

  it("should be disabled when downloading", async () => {
    // Start download to see if the button gets disabled
    wrapper.setData({ isDownloading: true });
    await wrapper.vm.$nextTick();

    expect(button.element.disabled).toBe(true);

    // Set back to not downloading
    wrapper.setData({ isDownloading: false });
  });

  it("should be disabled when URL is expired", async () => {
    wrapper.setData({ isUrlExpired: true });
    await wrapper.vm.$nextTick();

    expect(button.element.disabled).toBe(true);

    // Set back to not expired
    wrapper.setData({ isUrlExpired: false });
  });

  // NOTE: The download method cannot be tested because in the method,
  // the work is done after the download but we cannot mock that.
});
