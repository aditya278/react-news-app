# Nation Wants To Know

This is a Single Page React Application which was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Bootstrap 4 is used for styling.
This app fetches your IP address and displays the News from your location. The News data is fetched from [Mediastack News API](https://mediastack.com/quickstart).

#### Features:
- Location specific news articles.
- Ability to search specific news topic.
- Redirect to the original news source on clicking the link.

### Deployment Link:

The Application is deployed [Here](http://aditya-news-app.herokuapp.com/)

![Loading](https://user-images.githubusercontent.com/25431607/104566285-6f17f180-5673-11eb-811f-1514d1605518.png)
![Home](https://user-images.githubusercontent.com/25431607/104566402-8e168380-5673-11eb-8120-3d224e8dd86c.png)


## Getting Started:

1. Create an account at [Mediastack](https://mediastack.com/quickstart) and get the API access key.
2. Create a .env file in the root folder and add REACT_APP_API_ACCESS_KEY={your api key}
3. Run `npm i`
4. Once all the dependencies are installed, run `npm start`. This will run the app in the development mode.
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
