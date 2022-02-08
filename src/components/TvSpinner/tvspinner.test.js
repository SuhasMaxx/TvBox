import TvSpinner from "./TvSpinner.vue";
import { shallowMount } from "@vue/test-utils";

describe("TvSpinner.vue", () => {
  it("render the component", () => {
    const wrapper = shallowMount(TvSpinner, {
      props: {},
    });
    expect(wrapper.find(".loading-spinner").exists()).toBe(true);
    expect(wrapper.find(".dots").exists()).toBe(true);
  });
});
