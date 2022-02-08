import TvButton from "./TvButton.vue";
import { shallowMount } from "@vue/test-utils";

describe("TvButton.vue", () => {
  it("render the component", () => {
    const wrapper = shallowMount(TvButton, {
      props: {},
    });
    expect(wrapper.find(".btn-div").text()).toMatch("");
  });
  it("render with slot content", () => {
    const wrapper = shallowMount(TvButton, {
      slots: {
        default: "Simple text",
      },
    });
    expect(wrapper.find(".btn-div").text()).toMatch("Simple text");
  });
});
