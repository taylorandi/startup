# Cs260
[Notes for class] (startup/notes.md)
## Startup Specifications
### elevatior pitch
Ivy 3D is your solution for rapid 3D printing and modeling. we have all options of printing, we can do resin, filiment, or laser centering. We can print your designs if you submit an .stl file or we can model and print them for you. 
### website Specifications
I plan on doing a website for a 3D printing company, I will have the customer create a profile and log in, their username will be displayed in the upper right coroner so that they know that they are signed into the site. They will then have the option so submit a file or a drawing to the site of the part that they would like a price quote on for printing. these will be stored into the database. Data that will be revieved from the server will be some sort of initial price quote based on the type of file submitted to the site. I will use HTTP, CSS, and Javascript to form the base and looks of the website. Authentication will be used for sign in, Database will be used to recieve the upload from the customer, and websocket will spit out an initial quote for the user. I will base this on my initial mockup sketch I have created so far for this project.
![Initial website mockup sketch](/mockup.jpeg)

## HTML deliverable
Html pages- 4 pages all linked by a main menu
links- the pages all link though the menu and services links to the request quote
text- every page has plenty of text to try and describe
images- there is an image on the home page more might be added later
login- i created a login page
data base- there is a form for a submission which will send all the info to database once submitted
websocket- a projected quote will dispaly once submission is given/ username displayed in corner after login

## CSS deliverable
Added four pages of CSS files, updated all HTML files to have an identiacl header to make it more universal. 
Updated header, footer and menu to have a universal look between the three different ones. 
Updated the styles to the main portion of each section, included flex components to allow the screen to be resized. 
Created a color scheme for the site.

## Javascript deliveravble
Login support- created the logic to store username to local storage and place the username in the right corner of the window. 
- after many many many hours of trying over the weekend I was unable to propperly implement this feature, will need to get help to do it correctly however I need to turn in something because it is already late and the deadline will pass.
database support- register all of the info from the quote request to pass to database at a future point.
websocket- create a window with dummy values of a quote at $14 a part, process.html is the page which will have that code, it will populate when a database recieves the files for a quote.
support for interaction logic- verify that all account values are real and valid, ensure all fields have a value and test password values to match
## Services deliverable
for this deliverable I created back end points to prepare for next setps of pushing info to database and so on
Create an HTTP service using Node.js and Express - 
Frontend served up using express static middleware - 
frontend calls third party service endpoints - 
backend provides service endpoints - place holders to pass login info to database as well as pass files to database
frontend calls service endpoints - this was achieved using curl commands to fetch usernames from database