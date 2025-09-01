from flask import Flask
from flask import jsonify
import requests
from dotenv import load_dotenv
import os

load_dotenv() 

app = Flask(__name__)

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
@app.route("/newStories")
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


