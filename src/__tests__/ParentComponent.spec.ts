import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ParentComponent from "../ParentComponent.vue";
import ChildComponent from "../ChildComponent.vue";

describe("ParentComponent", () => {
  it("matches runtime prop reactivity", () => {
    const wrapper = mount(ParentComponent, {
      props: { component: ChildComponent },
    });

    expect(wrapper.get("#component-is-reactive").text()).toBe("false");
  });
});
