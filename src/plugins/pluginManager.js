import weatherPlugin from "./weather";
import calcPlugin from "./calc";
import definePlugin from "./define";

const plugins = [weatherPlugin, calcPlugin, definePlugin];

export const pluginManager = {
  matchPlugin: (input) => {
    for (const plugin of plugins) {
      if (plugin.pattern.test(input)) return plugin;
    }
    return null;
  },
};
