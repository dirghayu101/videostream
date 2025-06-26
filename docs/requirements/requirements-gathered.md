# Requirements Gathered

## Objective

Create a Netflix like clone that allows users to browse movies and TV shows, view details, and register and log in. The application should be a single-page application (SPA) that uses json-server to mock the backend. The project should be responsive and visually appealing, with a focus on user experience. The application differs from netflix in requirements like payment for renting or purchasing movies and TV shows.

## Submission Requirements

- [ ] The project must be deployed on a public URL.
- [ ] Source code zipped and submitted.
- [ ] Link to the remote repository.
- [ ] Video demonstrating the project in the zip file.

## Technical Requirements

- [ ] The project should use json-server to mock the backend.
- [ ] Website should be responsive.

## Specific Requirements

- [ ] Application should be a single-page application.
- [ ] The project should have a home page.
- [ ] The project should have a movie and TV shows listing page.
- [ ] The project should have a movie and TV shows details page.
- [ ] The project should have a registration page. No backend is required for this.
- [ ] The project should have a login page. No backend is required for this.

## Rubric Criteria

- [ ] Home Page
  - [ ] Header
  - [ ] Navigation
  - [ ] Hero Section
  - [ ] Featured Movies
  - [ ] Featured TV Shows Section
  - [ ] Content Section
  - [ ] Footer

- [ ] Movies and TV Shows Listing Page
  - [ ] Movies and TV Shows
  - [ ] Each Movie/TV show displays the details as specified.

- [ ] Movies and TV Shows Details Page
  - [ ] ID of the clicked Movie/TV show is passed in the URL.
  - [ ] Each Movie/TV show displays the details as specified.
  - [ ] The page shows information the information of the movie that was clicked from the listing page.

- [ ] Registration and Login Page or Popup
  - [ ] Registration Form
  - [ ] Login Form

- [ ] Overall look and feel
  - [ ] Overall site is polished.
  - [ ] Used pleasing typography, color palettes, and imagery
  - [ ] Color and layout are cohesive throughout the site
  - [ ] Appropriate use of grids

## Home Page Specifications

- The page should have the following sections:
  - Header - Logo, Navigation Bar, Registration, Login
  - Hero Section - Should display a slideshow with banner and images highlighting the most demanded movies and TV shows of 2021. Slideshow with 9.
  - Featured Movies section - Should display 4-6 featured movies with title, image, and description.
  - Featured TV Shows section - Should display 4-6 featured TV shows with title, image, and description.
  - Content Section - These sections should contain static data and could use a combination of text, headings and images, with the purpose of highlighting the company’s services and/or exciting details about hollywood.
  - Footer - This section must include footer menu items, social media links, and any other information you deem necessary.
- All the data should be pulled from the json-server fake API.

## Movies and TV Shows Listing Page Specifications

- This page should be accessible from the home page.
- The page should have a header with a logo, navigation bar, registration, and login.
- The page should have a footer with footer menu items, social media links, and any other information you deem necessary.
- A well-designed page that lists movies and TV shows. 12 movies and 12 TV shows.
- Should only display the title and image of each movie/TV show.
- When a movie/TV show is clicked, it should redirect to the details page of that movie/TV show.
- All the data should be pulled from the json-server fake API.
- Grid layout should be used to display the movies and TV shows. And the layout should be responsive.

## Movies and TV Shows Details Page Specifications

- This page should be accessible from the home page.
- The page should have a header with a logo, navigation bar, registration, and login.
- The page should have a footer with footer menu items, social media links, and any other information you deem necessary.
- When a movie/TV show is clicked from the listing page, it should redirect to the details page of that movie/TV show.
- The page should display the ID of the clicked movie/TV show in the URL.
- The page should display the details of the movie/TV show, including title, image, synopsis, small poster, large poster, the
price to rent the movie or tv show and the price to purchase it outright.

## Registration and Login Page Specifications

- Should be a pop-up or a separate page. If separate page, it should have a header with a logo, navigation bar, registration, and login.

## Tools to be Used

- React with TypeScript
- Vite
- Tailwind CSS for styling
- json-server
- react-router-dom
