import NoImage from "./NoImage.vue";
import { shallowMount } from "@vue/test-utils";

describe("NoImage.vue", () => {
  it("render the component", () => {
    const wrapper = shallowMount(NoImage);
    const element = wrapper.get(".no-image");
    expect(element.exists()).toBe(true);
  });
});
