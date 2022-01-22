# PixaBay Gallery in Vue and Buefy

## Project Briefing

This is a carousel based gallery app created using Vue and Buefy. For images it uses API provided by [PixaBay](https://pixabay.com/) which is free for limited usage.
Carousel is derived from Buefy which is a UI Library based on Bulma CSS for Vue.

I had a lot of fun making this project, completed it in around 2 hours. I used Bulma CSS after an extended gap of like couple of years.

## Built With

* [Vue](https://vuejs.org/)
* [Buefy](https://buefy.org/)
* [PixaBay API](https://pixabay.com/api/docs/)

## Authors

* **Amit Prafulla (APFirebolt)** - (https://apgiiit.com/)

## Project setup

Simply install node modules for frontend, setup your env file and enter the API key which you should have retrieved from PixaBay website. The API limits usage on an hourly basis to somewhere around 100 requests. But, it should be suffice for Educational and Experimental purposes.


```
npm install
npm run serve
```

For production, build the frontend of the app and then run the backend app only. 

```
npm run build

VUE_APP_PIXABAY_API_KEY=your API Key
```
## Project Features

- Carousel based image gallery.
- Uses Buefy for UI components like Carousel, Loaders, Buttons and more.
- Uses PixaBay API for images.

## Project Updates

- Mobile friendly menu could be added in the future.

## Project Screenshots

Please find some of the application screenshots below.Screenshot of the rather simple homepage with a Hero component in Bulma CSS.

![alt text](./screenshots/home.png)

Top view of the images page, it uses Bulma Cards inside of carousel Buefy component. Icons are powered by "font-awesome" and related dependencies of Vue and Font-Awesome.

![alt text](./screenshots/images.jpg)

Shows search bar with search icon. Clicking on the search icon would trigger the search API which would fetch the images with associated keywords from pixabay API.

![alt text](./screenshots/images1.jpg)

