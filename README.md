### Movie-Link

A React application that lets you query a movie/tv/actor database
It returns a list of potential options. Click any option an you
will be rewarded with the profile/poster of your selection as well
as all the credits associated with that show/actor. Every item in
list is clickable and will automatically change your selection and
return the credits for your new selection.

## What I Learned/ Skills

- REACT
- JAVASCRIPT
- CONSUMING REST APIS
- ASYNCHRONOUS CALLS
- MANAGING STATE
- SASS

## To Get Started

This application utilizes The Movie DB which requires a free account
that yields a free API key. I have hidden my key GitHub, but here is
a way for you to insert your own.

This project requires nodeJS to be previously installed on your PC.

1. Sign up for a free acount and follow the instuctions at https://developers.themoviedb.org/3/getting-started/introduction
2. Clone this repo.
3. In the terminal for this project folder enter the command: npm install
   - This will install any dependencies.
4. Create a new file named ".env"
   - Inside this file prepend "REACT*APP*" to your API key variable name
   * Example: REACT_APP_GOOGLE_API_KEY=123456 (no quotes)
5. In your .gitignore file, add your .env file. This is to prevent git from
   from adding your .env file to github. \* /# api keys
   .env
6. Save all changes.
7. In the terminal for this project folder enter the command: npm start

That's it. That will start up a local development server and run the application.

_This application is still under development and will be adding features and
updates to the styling/UI._
