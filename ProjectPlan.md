# Overcast Weather App

## Components:

### App

- I want to fetch data from Open Weather API
- I want to pass that data to child components

### Navbar

- I want to submit zip code that will be used in the App.js to fetch data
- I want the current date

### Current

- I want to provide current weather
- I want to provide current location
- I want to provide current temperature
- I want to provide current weather description

### Hourly

- I want to provide the next 4 hours of temp

### Radar

- I want a title
- I want the current location on the map

### FiveDays

- I want the next 4 days to show day, weather icon, average temp, and short description

## Workflow

1.  I want the navbar to display the current date and have an input field with a submit button.
2.  I want to enter and submit a zip code in the navbar.
3.  I want that submission to be passed into the Current component that will use the Open Weather API to fetch data and return weather info.
4.  I want that info to populate in all three components - Current, Radar, and FiveDays
5.  I want to be able to cancel/remove the weather card from a small icon located on the top right of the card.
6.  I want to additional cards to pop up from the bottom of page.
7.  I want the navbar to stay static on top of the page.

- you want to pass the fetch data from app.js (parent) down to the children components (Current, Hourly, Navbar, etc) in order for them to access it
- you want to setup an useState hook in app.js as well as the async fetch function to acquire the data from Open Weather App
-
