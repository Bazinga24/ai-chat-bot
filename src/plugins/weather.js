// plugins/weather.js
const API_KEY = "220f55da35d179b5235fd6173bf8fa0d"; // <-- Replace with your actual key

export default {
  name: "weather",
  pattern: /^\/weather\s(.+)/i,

  async execute(match) {
    const city = match[1];

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        return {
          content: `Could not fetch weather for "${city}". Please try another city.`,
          type: "plugin",
          pluginName: "weather",
        };
      }

      const data = await res.json();

      const content = ` Weather in ${data.name}, ${data.sys.country}:
- Condition: ${data.weather[0].description}
- Temperature: ${data.main.temp}°C
- Feels like: ${data.main.feels_like}°C
- Humidity: ${data.main.humidity}%
- Wind: ${data.wind.speed} m/s`;

      return {
        content,
        type: "plugin",
        pluginName: "weather",
        pluginData: data, // Optional: raw data if needed
      };
    } catch (error) {
      console.error("Weather plugin error:", error);
      return {
        content: "An error occurred while fetching weather data.",
        type: "plugin",
        pluginName: "weather",
      };
    }
  },
};
