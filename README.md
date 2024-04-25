# CRM App
This is a simple customer relationship management (CRM) app that allows the user to store customer data by region.  Regions are pre-set to Eastern, Central, Mountain, and Pacific. Customer data includes the customer's first and last name, their region, and whether or not they are an active customer.

The user may take the following actions:
- Add new customers
- View customers by region
- Update existing customers
- Delete customers
- Delete all customers
- Trigger a notification to remind them to contact the customer

## Setup

### Compatible platforms
This app has been tested to work with both the **iOS and Android simulators** successfully. Due to mobile-only features such as alerts, this app is **not fully compatible with the web browser**.

### Expo
This app is built with Expo. To get started with Expo, follow the [Installation](https://docs.expo.dev/get-started/installation/#requirements) requirements for Expo. As of the time of creating this project, requirements include:
- Node.js (LTS release)
  1. `brew install nvm`
  2. `nvm install --lts`
  3. `node -v` & `npm -v` to confirm you successfully installed the latest (desired) versions
- Git
- Watchman

### Android

To use the Android emulator, follow the instructions in React Native's documentation [Setting up the development environment](https://reactnative.dev/docs/environment-setup?guide=native&platform=android) for `macOS` > `Android`.

### Xcode

To use the Xcode simulator, follow the instructions in React Native's documentation [Setting up the development environment](https://reactnative.dev/docs/environment-setup?guide=native&platform=ios) for `macOS` > `iOS`.

**Looking ahead, note that you will need to open the iOS simulator first before attempting to build the app for iOS, otherwise you may experience errors if Expo is unable to detect the simulator.**

### Installation

1. Clone this repo to your local machine in a directory of your choice.
2. Run the following commands to install the needed packages and dependencies:
```
npm install
npx expo install
```

### Launching the app
Once all of the installation steps are completed, moving forward you should only need to do the following to run the app.
1. To kick off the app, run the following command:
```
npx expo start
```
2. Once Expo is running successfully, enter `a` to launch the app on the Android simulator or `i` to launch the app on the iOS simulator.
    - As a reminder, you will need to open the iOS simulator separately before attempting to build the app on iOS. You do not need to do this for Android; Expo should be able to launch the Android simulator on its own.
    - As another reminder, this app is not fully compatible with the web browser, but you can still attempt to build it for web by entering `w`. You should be able to add and edit customers, but any deletion actions will fail as they require confirming the action via an alert which is not compatible with web. Similarly, setting communication reminders will fail as they also require confirming the action via an alert.
    - You may also choose to scan the QR code presented in the console if you wish to try the app on your actual Android or iOS device. Note that you will first need to install the Expo Go app via the [App Store](https://apps.apple.com/us/app/expo-go/id982107779) or [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US&gl=US) if you wish to go this route.

## Project Overview

This project is presented as part of Udacity's [React Native](https://www.udacity.com/enrollment/cd0444/1.0.3) course. The following requirements are provided by Udacity.

> _"In this project, you will be creating a customer relationship manager (CRM) for mobile.<br><br>Imagine that the company you are working for has sales representatives who are responsible for reaching out to customers and potential customers in their region. The sales representatives are constantly updating customer information, but it's challenging for them to collect all the information they take in during the day, then sit at their computers in the evening to input their updates into the system. The hours between data gathering and input have led to low-quality data, or no data at all, being put into the system, making it easy for company data to go out of date.<br><br>You are on the engineering team and have been tasked with creating a prototype mobile app that would allow sales representatives to update customer information as they gather it. The hope is that this will empower the sales team to spend more time with customers and less time inputting data, and also lead to higher quality and more up-to-date information going into the system. Your app will be rolled out to a few beta tester sales representatives very soon - so it's time to get to work!"_

### Why this project?

> _"This project encompasses the fundamental aspects of building a native application including creating views, setting up routes, handling user input, and implementing native libraries. In building this project, you will develop a deeper understanding of how to use React Native to build an iOS and Android application that could be applicable to many companies and scenarios."_

### Project Requirements

> _"The sales team managers and engineering leads have created a set of requirements for the application that they think will give this project the biggest chance for success. Here are the requirements they've created:_
>
> _Sales Representatives must..._
>
> 1.  _... be able to download the app whether they use Android or iOS on their mobile device_
> 2.  _... have a view where they can see customers in their region_
> 3.  _... be able to view individual customer information_
> 4.  _... be able to create new potential customers_
> 5.  _... be able to update data for existing customers_
> 6.  _... be able to set reminders for themselves to contact specific customers at a set time_
>
> _Because this app must work for both Android and iPhone users, you are going to use your new skills in React Native to create a hybrid mobile application that provides the functionality listed above."_

### Finished Product

> _"In order to meet the requirements listed above, here is a list of the user-facing screens the application will need:_
>
> - _Welcome page_
>   - _A landing page that will display static text_
> - _Region list view_
>   - _Allows users to select their region and be taken to the customers-by-region screen_
>   - _Displays a button for creating a new user that links to the customer create view_
> - _Customers by region_
>   - _This view allows Sales Representatives to see customers in their region_
>   - _Displays customer name and status_
>   - _Selecting a customer takes the user to that customer's detail page_
> - _Customer detail page_
>   - _This view will show a single customer's information_
>   - _In future iterations of this application, this will hold more detailed information than the list view_
>   - _Contains a link to edit the customer information_
> - _Customer create/edit form_
>   - _This view will hold a form for either creating or editing a user, depending on the parameters sent to the page"_
