from flask import Flask, jsonify
from flask_cors import CORS
import requests
from dotenv import load_dotenv
import os
import requests
from datetime import datetime
from zoneinfo import ZoneInfo
load_dotenv() 

app = Flask(__name__)
CORS(app)

# Getting the NYT API Key
def get_nyt_api_key():
    api_key = os.getenv("NYT_API")
    if not api_key:
        raise ValueError("Improper Setting of NYT_API in .env")
    return api_key


# Function returns the top NYT stories for a specific category,
# if an improper call is set, the category is defaulted to world.
# Possible strings to pass through:
# arts
# automobiles
# books/review
# buisness
# fashion
# food
# health
# home
# insider
# magazine
# movies
# nyregion
# obituaries
# opinion
# politics
# realestate
# science
# sports
# sundayreview
# technology
# theater
# t-magazine
# travel
# upshot
# us
# world
@app.route("/newStories/<storyType>", methods=['GET'])
def new_stories(storyType):
    nyt_key = os.getenv("NYT_API")
    url = f"https://api.nytimes.com/svc/topstories/v2/{storyType}.json?api-key={nyt_key}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        articles = [{"title": a["title"], "url": a["url"]} for a in data["results"][:3]]
        return jsonify(articles)
    else:
        return jsonify({"error" : "API request failed"}),response.status_code

# Raleigh Lat and Lon
LATITUDE = 35.77
LONGITUDE = -78.63

# USER_AGENT = { 'User-Agent': ('MagicMirror Weather App', 'richardgatherton@gmail.com') }
USER_AGENT = { 'User-Agent': 'MagicMirror Weather App (richardgatherton@gmail.com)' }


# TODO: Add in lat long coordinates as input for setup eventually
# Returns the weather in raleigh
@app.route("/weather")
def get_weather():
    coordinates_url = f"https://api.weather.gov/points/{LATITUDE},{LONGITUDE}"

    coordinates_response = requests.get(coordinates_url, headers=USER_AGENT)
    coordinates_response.raise_for_status()

    forecast_url = coordinates_response.json()['properties']['forecast']

    forecast_response = requests.get(forecast_url, headers=USER_AGENT)
    forecast_response.raise_for_status()

    forecast_data = forecast_response.json()
    periods = forecast_data['properties']['periods']
    weather_forecast = [
            {
                "period": p.get("name"),
                "temp": f"{p.get('temperature')} {p.get('temperatureUnit')}",
                "wind": f"{p.get('windSpeed')} from the {p.get('windDirection')}",
                "forecast": p.get("shortForecast")
            } 
        #     for p in periods[:14]   # 7 days × 2 periods (day/night)
        # ]
            for p in periods if "Night" not in p.get("name")
        ][:7]  # Just the next 7 daytime periods

        
    return jsonify(weather_forecast)

# Returns the current time 
@app.route("/time")
def get_current_time():
    eastern_time = ZoneInfo("America/New_York")

    current_time = datetime.now(eastern_time)

    time_data = {
            "date": current_time.strftime("%Y-%m-%d"),
            "day_of_week": current_time.strftime("%A"),
            "time_24h": current_time.strftime("%H:%M:%S"),
            "time_12h": current_time.strftime("%I:%M:%S %p"),
            "timezone": current_time.strftime("%Z"),
            "iso_format": current_time.isoformat() 
        }
    
    return jsonify(time_data)
  
  
if __name__ == '__main__':
    app.run(debug=True)
