# UnnecessaryAcronyms

## Description
A CMS-style (Content Management System) blog site designed for developers who want to share their thoughts, articles, and opinions on technical topics. This platform, built from scratch and deployed on Render, follows the Model-View-Controller (MVC) architectural paradigm. Using Handlebars.js for templating, Sequelize as the ORM, and express-session for authentication, the site allows users to publish blog posts, comment on others' posts, and manage their content through a user-friendly dashboard. Whether you're signing up for the first time, logging in to manage your posts, or exploring the latest articles, this site provides a seamless experience for developers to engage with the tech community.

## Original User Story and Acceptace Criteria

### User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

### Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

## Mock-Up

*   Deployed application: https://unnecessaryacronyms.onrender.com/

*   Application repository: https://github.com/bldambtn/UnnecessaryAcronyms

![View of the login page](./public/assets/01%20login%20view.png)

![View of Signup page](./public/assets/02%20signup%20view.png)

![View of post creation form](./public/assets/03%20Create%20Post.png)

![View of dashboard when user logged in](./public/assets/04%20Dashboard.png)

![View of homepage with posts](./public/assets/05%20Homepage.png)

![View of individual blog post with comments form](./public/assets/06%20Blog%20View.png)

## Credits, Citations, and Collaborations

*   bcrypt. (n.d.). npm. Retrieved August 14, 2024, from https://www.npmjs.com/package/bcrypt

*   connect-session-sequelize. (n.d.). npm. Retrieved August 14, 2024, from https://www.npmjs.com/package/connect-session-sequelize

*   dotenv. (n.d.). npm. Retrieved August 14, 2024, from https://www.npmjs.com/package/dotenv

*   Element: keydown event. (n.d.). MDN Web Docs. Retrieved August 18, 2024, from https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event

*   Element: keypress event. (n.d.). MDN Web Docs. Retrieved August 18, 2024, from https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event

*   Element: mousemove event. (n.d.). MDN Web Docs. Retrieved August 18, 2024, from https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event

*   Element: touchstart event. (n.d.). MDN Web Docs. Retrieved August 18, 2024, from https://developer.mozilla.org/en-US/docs/Web/API/Element/touchstart_event

*   Express-handlebars. (n.d.). npm. Retrieved August 14, 2024, from https://www.npmjs.com/package/express-handlebars

*   Handlebars.js: Introduction. (n.d.). Handlebars.js. Retrieved August 18, 2024, from https://handlebarsjs.com/guide/

*   McQuade, J. (n.d.). Collaborator on MVC, routes, controllers, when to create an API, how to reference an API route. GitHub. Retrieved August 14th through August 20th, 2024, from https://github.com/JacqMcQ

*   MVC. (n.d.). MDN Web Docs. Retrieved August 18, 2024, from https://developer.mozilla.org/en-US/docs/Glossary/MVC

*   pg. (n.d.). npm. Retrieved August 14, 2024, from https://www.npmjs.com/package/pg

*   Render. (n.d.). Databases. Retrieved August 20, 2024, from https://docs.render.com/databases

*   Render. (n.d.). Adding multiple databases to a single instance. Retrieved August 20, 2024, from https://docs.render.com/databases#adding-multiple-databases-to-a-single-instance

*   sequelize. (n.d.). npm. Retrieved August 14, 2024, from https://www.npmjs.com/package/sequelize

*   UTA-VIRT-FSF-PT-05-2024-U-LOLC. (2024). GitHub. Retrieved August 18, 2024, from https://git.bootcampcontent.com/University-of-Texas-at-Austin/UTA-VIRT-FSF-PT-05-2024-U-LOLC/-/tree/main/14-MVC/01-Activities?ref_type=heads

*   Window: load event. (n.d.). MDN Web Docs. Retrieved August 18, 2024, from https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event

## License
MIT License

Copyright (c) 2024 bldambtn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
