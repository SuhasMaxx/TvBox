import NavBar from "./NavBar.vue";
import { shallowMount } from "@vue/test-utils";

describe("NavBar.vue", () => {
  it("render the component with no text", () => {
    const wrapper = shallowMount(NavBar, {
      props: {},
    });
    expect(wrapper.text()).toMatch("");
  });
  it("render with home button", () => {
    const wrapper = shallowMount(NavBar, {
      props: { showHomebutton: true },
    });
    const homeBtn = wrapper.get(".nav-label");
    expect(homeBtn.text()).toMatch("Home");
  });
  it("render with slot content", () => {
    const wrapper = shallowMount(NavBar, {
      slots: {
        default: "Simple text",
      },
    });
    expect(wrapper.text()).toMatch("Simple text");
  });
});
