# Server Distance Project

### Improvements

1. If application will be scale, i propose to use some library for handling forms.
   For example ```react-hook-form``` can be useful to it. In our case, we have only one form, so i decided to use native solution.
2. Add Internationalization: ```I18n``` for example
3. Maybe modern ```Vite``` instead of ```Webpack```.
4. Use Redux and Redux-Toolkit as state management system. Also Zustand is good idea.
5. Add Meta description and Manifest


### EsLint configuration

Despite standard ```EsLint``` configuration i always use not so popular, but really helpful libraries.

1. ```eslint-plugin-sort-destructure-keys``` - great library to sort keys alphabetically. Very useful to organize props and depressurization
2. ```eslint-plugin-react-hooks```  - Strict Rules for hooks.
3. ```eslint-plugin-import``` - Separate imports for better reading.

# Technical Interview Task for a Front-End Position

## Functional requirements

- 🔍 Create a server explorer web app
- 🔒 Implement login ``POST https://playground.tesonet.lt/v1/tokens {username: "tesonet", password: "partyanimal" }``
- 📋 Display servers list
```GET https://playground.tesonet.lt/v1/servers```
- ↕ Make servers list sortable by name/distance

## Non-functional requirements

- 🌐 App must work on all modern browsers
- 📱 App must also work well on mobile & tablet devices
- ✔️ App must be production-ready. We'd like you to demonstrate what a production-ready app means to you. No need to overcomplicate things, having the basics covered and listing some ideas for improvement in the documentation will suffice
- 🧪 We like tests
- ♿️ Consider a11y

## Design requirements

Please follow the provided [design](https://www.figma.com/file/Vwv2xN7hYUADzIotUcSypF/Design-for-Front-End-Recruitment-Task?type=design&node-id=1-554&t=ork7e8jy9iWuLikn-0) 👈. We're looking for accurate implementation of the design and attention to detail.

## Side notes

- You may use the JavaScript framework of your choice
- If you're proficient with TypeScript, we encourage you to showcase your skills 😎
- We prefer the repository structure to adhere to industry-standard practices

## Home task submission

As for the submission of the task, we fully understand that people have lives outside of work. Therefore, we do not expect home tasks to be submitted within a day or two. On average, we get them back within a week. But if more time is needed – simply inform your recruiter, so everyone is updated.

Once you have finished the task, please let your recruiter know. They will then assign a Nord Security developer to start the review process (which typically takes 1-2 days). After that, the recruiter will share full feedback with you.

We wish you all the best and look forward to meeting you for a technical discussion! Good luck!
