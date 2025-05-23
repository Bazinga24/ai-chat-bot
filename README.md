<<<<<<< HEAD
### Setup and running instructions
### 1. Clone the repository
      ```bash
    git clone https://github.com/Bazinga24/ai-chatbot.git
    cd ai-chatbot
### 2.Install the dependencies
     npm install

### 3. Run the project
    npm run dev
Open http://localhost:5173 in your browser.

## Plugin Architecture
##### name: Plugin identifier (e.g., weather)
##### pattern: Regex to detect a matching command
##### execute(): Async function that returns a formatted response
 
## Plugins are registered through the pluginManager, which:

##### 1-Parses user input via regex
##### 2-Finds the matching plugin
##### 3-Calls its execute() method
##### 4-Displays the response in a styled card

## Pugins and API used 

### Plugin ---      Command  ----          API Used                                         
  
 Weather   ---   `/weather [city]` ----    OpenWeather API](https://openweathermap.org/)   
 Calculator---   `/calc [math]` ----        Local safe `eval()` (no external API)            
 Dictionary---   `/define [word]`----     Free Dictionary API](https://dictionaryapi.dev) 

