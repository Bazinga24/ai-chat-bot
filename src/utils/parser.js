import { pluginManager } from "../plugins/pluginManager";

export const parsedMessage = async (input) => {
  const plugin = pluginManager.matchPlugin(input);
  if (plugin) {
    const match = input.match(plugin.pattern);
    const response = await plugin.execute(match);
    return response;
  }

  return { content: input, type: "text" };
};
