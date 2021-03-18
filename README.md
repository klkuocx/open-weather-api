# open-weather-api
Allow users to get open weather data in Taipei, New Taipei and Taoyuan City.

### API Doc
```
/api/weathers?CITY=CITY1,CITY2
```
if you add a CITY query with CITY_NAME, you will get certain data in the CITY, or you'll get all the data.

## Environment SetUp
1. [Node.js](https://nodejs.org/en/) 12.20.0
2. [Express](https://expressjs.com/en/starter/installing.html) 4.17.1
3. [nodemon](https://nodemon.io/) 2.0.4
4. [MySQL](https://www.mongodb.com/try/download/community) 8.0.22

## Installation and Execution
### Activate Project
1. Clone this git to local
```
[~] $ git clone https://github.com/klkuocx/open-weather-api.git
```

2. Get into the directory
```
[~] $ cd open-weather-api
```

3. Install packages
```
[~/open-weather-api] $ npm install
```

4. Setup MySQL, db model and seeds
```
drop database if exists open_weather_dev;
create database open_weather_dev;
drop database if exists open_weather_test;
create database open_weather_test;
```
```
[~/open-weather-api] $ npx sequelize db:migrate
[~/open-weather-api] $ npx sequelize db:seed:all
```

5. Run the project
```
[~/open-weather-api] $ npm run start
```