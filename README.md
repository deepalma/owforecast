# owforecast
Demo application that shows a 5 days weather forecast for the city of Rome using Open Weather Api.

##Setting up the dev environment

Download or clone the projejct:

From the terminal:
```
cd owforecast

npm install

npm start
```
Then open localhost:8080 in the browser.

##Build a production version
From the terminal:
```
cd owforecast

npm install /*If needed*/

npm run build
```
The output can be found in */owforecast/build*.

Open index.html to test the build.

A project build is already provided in the build folder thus no need to execute the previous step.

##Known issues:
When accessing the build version there's an error in the console that needs to be investigated.
The functionality of the app it's not affected by this issue. 
It seems to be something related to the inability of the webpack loader to deal with the vendor stylesheet used by the weather font-icons.

##For a demo of the app just open build/index.html
