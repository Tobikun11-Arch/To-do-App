# Setting Up a React Native Expo App with Tailwind CSS and TypeScript

## Create the Project
To start a new React Native project with Expo, run the following commands:

npx create-expo-app <name-of-project>
cd <name-of-project>

Install both NativeWind and Tailwind CSS:

npm install nativewind
npm install --save-dev tailwindcss@3.3.2

### Setup Tailwind CSS
Initialize Tailwind CSS by running:

npx tailwindcss init

This will create a `tailwind.config.js` file. In the `tailwind.config.js` file, replace the existing `content` array with:

content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"]

## Add the Babel Plugin
In the `babel.config.js` file, under the `presets` section, add the following:

plugins: ["nativewind/babel"]

## Setting Up TypeScript
Create a new file `nativewind-env.d.ts` and add the following line to enable NativeWind types:

/// <reference types="nativewind/types" />

To start the program, open your terminal and run:

```bash
npx expo start

That's it! 🎉 You've successfully set up a React Native Expo app with Tailwind CSS and TypeScript.


Make sure in your tailwind.config.js is setup like this 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
    "./app/(tabs)/index.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

