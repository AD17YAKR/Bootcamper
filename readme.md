# BootCamper API

> Backend API for BootCamper application, which is a bootcamp directory website

## Usage

Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

## Database Seeder

To seed the database with users, bootcamps, courses and reviews with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```

## API Documentation

<a href="https://github.com/AD17YAKR/Bootcamper/blob/main/Bootcamper.md" target="_top">Click here</a>

## Currently hosted at

https://bootcamper-production.up.railway.app/
