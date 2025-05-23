export default {
  name: "define",
  pattern: /^\/define\s(\w+)/,
  async execute(match) {
    const word = match[1];
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const json = await res.json();
    return {
      content: json[0]?.meanings[0]?.definitions[0]?.definition || "Not found",
      type: "plugin",
      pluginName: "define",
    };
  },
};
