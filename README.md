# Leaflet Challenge
![Screenshot 2024-07-17 135856](https://github.com/user-attachments/assets/aa0041fd-34ed-477e-a53e-d2d0d7cfabc9)

## Purpose
The purpose of this project was to collect earthquake data from the past 7 days from the [geojson website](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) built by the USGS and visualize that data using Leaflet.js to make an interactive map.
The map displays earthquakes using two dimensions:
1. Magnitude is represented by the size of the circle (higher magnitudes = larger circles)
2. Depth of the earthquake is displayed with the color of the circle (green is -10-10km, yellow is 10-30km ....red is 90+ km)

## How to Use
Go to [https://nikimhenderson.github.io/leaflet-challenge/](https://nikimhenderson.github.io/leaflet-challenge/)
Click on each circle to display the magnitude, location and depth of each earthquake

## Steps to Part 1
1. Create the map and tile layer using Leaflet.js <br/>
![Screenshot 2024-07-17 140538](https://github.com/user-attachments/assets/d7c0d233-2267-49b8-84c3-019eaa795773)
<br/>
2. Use D3.js to read in the data and create a function to choose the color and radius of the circles
![Screenshot 2024-07-17 140809](https://github.com/user-attachments/assets/649e07e3-9ed6-4511-be54-fc7664aa5f2a)

2. Use D3.js to read in the data and create a function to choose the color and radius of the circles <br/>
![Screenshot 2024-07-17 140809](https://github.com/user-attachments/assets/8235a47e-51d6-4dc9-8adc-2292d56af847)

<br/>
3. Using L.geoJson add the circles to the coordinates from the data and create a pop-up for each circle with magnitude, location and depth <br/>
![Screenshot 2024-07-17 140818](https://github.com/user-attachments/assets/32b3b775-3363-47ca-a0b4-7e3751ea2c08)
<br/>
4. Create a function to choose the color and the radius of each circle according to depth and magnitude <br/>
![Screenshot 2024-07-17 140934](https://github.com/user-attachments/assets/66a2d73e-5ff3-41c1-b847-e353453ccc89)
<br/>
5. Add a legend to the map to indicate which depths are associated with which colors <br/>
![Screenshot 2024-07-17 141007](https://github.com/user-attachments/assets/8346c547-cb12-46fe-adb6-6905ec1d7323)

