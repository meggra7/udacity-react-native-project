# udacity-react-native-project

## Project Overview

This project is completed as part of Udacity's [React Native](https://www.udacity.com/enrollment/cd0444/1.0.3) course. The following requirements are provided by Udacity.

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

## Task breakdown

### Confirm all navigation works as expected

#### Description

This task is to primarily ensure that all navigation nuances are wired up correctly.

#### Acceptance criteria

- Upon successfully adding or editing a customer, navigate to the view customer page for that customer that will navigate back to the region for that customer
- Upon successfully deleting a customer, navigate to the customer list for that customer's region
- Upon clicking to add a customer from a specific region list, pass in the region id to pre-populate the region

### Implement push notifications

#### Description

Implement a local push notification that will remind the user to contact the customer.

#### Acceptance criteria

- Upon tapping the notification option in the view customer screen, if the user then closes the app so that it is in the background, they should receive a reminder notification 15 seconds later to contact the customer. (The short time span is for demonstration purposes only.)
