# Thinking in React

This is an adaptation of the classic [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
tutorial.  It's been updated to run as a [create-react-app](https://github.com/facebookincubator/create-react-app)
project and components have been split out into separate files.

The component code in this project matches the code from [Step 2 of Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html#step-2-build-a-static-version-in-react), with a few small stylistic changes.  I have also added a top level "App.js" component that contains the mock product data and renders the FilterableProductTable component.

I suggest reading through the original tutorial and updating the code in this project as you follow along.

## Setup Instructions
I assume that you already have git and node.js installed on your computer.  The steps to get this project running are simple:

 - Clone this project `git clone https://github.com/Traviskn/thinking-in-react.git`
 - Move into the project folder and install dependencies `cd thinking-in-react && npm i`
 - Start up the development server `npm start`

You should be good to go!

## Extra Credit
Once you have finished working through the original Thinking in React tutorial, I have added some extra credit work for you to do!
This project includes a basic json api that supplies the product data at [http://localhost:3004/products/](http://localhost:3004/products/).
(Check out the docs for [json-server](https://github.com/typicode/json-server) to see how the json api works.)
Go to the `App.js` component and refactor it to load the product data from the server instead of using the hardcoded `PRODUCTS` array.

