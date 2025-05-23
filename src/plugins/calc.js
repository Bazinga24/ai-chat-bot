export default {
  name: "calc",
  pattern: /^\/calc\s(.+)/,
  async execute(match) {
    try {
      const result = eval(match[1]); // NOTE: Use a safer eval in real-world apps!
      return {
        content: `Result: ${result}`,
        type: "plugin",
        pluginName: "calc",
      };
    } catch {
      return {
        content: "Invalid expression.",
        type: "plugin",
        pluginName: "calc",
      };
    }
  },
};
