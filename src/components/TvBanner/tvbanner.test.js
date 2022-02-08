import TvBanner from "./TvBanner.vue";
import { shallowMount } from "@vue/test-utils";

describe("TvBanner.vue", () => {
  it("render the component", () => {
    const wrapper = shallowMount(TvBanner, {
      props: {},
    });
    expect(wrapper.exists()).toBe(true);
  });
});
