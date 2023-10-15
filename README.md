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