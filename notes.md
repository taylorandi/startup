# CS 260 Notes
## Github notes
Notes about git hub, make sure to commit changes and make comments before pushing them onto the server. Commit the changes often and make sure to leave valid and meaningful comments behind them.

## Midterm Study Guide
The following questions are examples of what you may see on the midterm exam:

1. In the following code, what does the link element do?
- the link element is used in 
2. In the following code,  what does a div tag do?
- div tags are used in HTML to identify a division or a section. seperates off a section so it can be adjusted by the CSS code.
3. In the following code, what is the difference between the #title and .grid selector?
- '#' is an id and '.' is a class
4. In the following code, what is the difference between padding and margin?
- margin sets the marigin spacing or the white space surrounding the element, padding represents the amount of inner space an element has.
5. Given this HTML and this CSS how will the images be displayed using flex?
- flex displays an elements children in a flexable manner for resizing purposes. 
6. What does the following padding CSS do?
- padding is used to create space arround an elements content inside of predefined boarders. 
7. What does the following code using arrow syntax function declaration do?
- arrow functions are compact versions of functions, param => expression. 
8. What does the following code using map with an array output?
- map is an itterative function, it will call each element of the array. and constructs a new array with the results, map is a copying method.
9. What does the following code output using getElementByID and addEventListener?
- get element id will find the element in the html which is using the id listed as a oarameter. and the addEventlistener is a function which watches the above identified id and executes the code of the listener when the identified id is interacted with.
10. What does the following line of Javascript do using a # selector?
- the # selector is looking for the element in the HTML identified by its id '#id'
11. Which of the following are true? (mark all that are true about the DOM)
- with HTML DOM, javascript can access and change elements of the HTML document. 
- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
- JavaScript can change all the CSS styles in the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page 
12. By default, the HTML span element has a default CSS display property value of:
- span is displayed by default inline. 
13. How would you use CSS to change all the div elements to have a background color of red?
- you would create a div block of code 
div{
    backgroun-color: red;
}
14. How would you display an image with a hyperlink in HTML?
- <a href="link address"><img src="image destination"></a>
15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
- content, padding, boarder, margin
16. Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
- identify the element in which "troubl" is located and create a new block of code for that element ex., or it it has a different class it can be modified with the .class or #id
h1{
    color: green;
}
p.class / p#id {
    color: green;
}
- also ensure that "double" is in a different element as "troubl".
17. What will the following code output when executed using a for loop and console.log?
- javascipt for loops opperate very similar to other for loops in other coding languages.
18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
- 
19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
- paragraph <p> ordered list <ol> unordered list <ul> selcond level heading <h2> first <h1> second <h2> 
20. How do you declare the document type to be html?
- <!DOCTYPE html>
21. What is valid javascript syntax for if, else, for, while, switch statements?
- if(), else, for(int i = 0; i < 9; i++>); while(), switch() case 1:
22. What is the correct syntax for creating a javascript object?
- const person = {name: "John", height:"33", age="1885"};
23. Is is possible to add new properties to javascript objects?
- yes
24. If you want to include JavaScript on an HTML page, which tag do you use?
- <script></script>
25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
- interHTML
26. Which of the following correctly describes JSON?
- javascript object notation, format for storing and transporting data
27. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
- Consol commands
* chmod - modify permissions and access mode of files and directories
* pwd - writes to standard output the full path name of your current directory
* cd - Change directory *
* ls - List files *
* vim - vi editor 
* nano - a simple yet powerful command line-based text editor
* mkdir - Make directory *
* mv - Move file(s) *
* rm - Remove file(s) *
* man - Look up a command in the manual *
* ssh - Create a secure shell on a remote computer *
* ps - View the currently running processes *
* wget - Type wget followed by the file URL you wish to download to your command prompt app
* sudo - Execute a command as a super user (admin) *
28. Which of the following console command creates a remote shell session?
- ssh
29. Which of the following is true when the -la parameter is specified for the ls console command?
- list hidden files
30. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
- root domain is bozo.click, the others are the subdomains top level domain is .click
31. Is a web certificate is necessary to use HTTPS.
- yes
- HTTPS sends a message to the server asking for a certificate, the certificate shows the public key and sets up a connection key.
32. Can a DNS A record can point to an IP address or another A record.
- ip address
33. Port 443, 80, 22 is reserved for which protocol?
- 443 Https
- 80 http
- 22 ssh
34. What will the following code using Promises output when executed?
- promises are output by JAvascript after a wait time has been completed, it is designed to wait for an action to complete before outputting the desired output. 

## Final study guide
1. What ports are used for HTTP, HTTPS, SSH?
2. What do HTTP status codes in the 300, 400, 500 range indicate?
3. What does the HTTP header content-type allows you to do?
4. What do the following attributes of a cookie do?
- Domain
- Path
- SameSite
- HTTPOnly
5. Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /foo/bar?
6. Given the following Express service code: What does the following JavaScript fetch return?
7. Given the following MongoDB query

{ cost: { $gt: 10 }, name: /fran.*/}
select all of the matching documents.

8. How should you store user passwords in a database?
9. Assuming the following Node.js service code is executing with websockets, what will be logged to the console of the web browser?
10. What is the WebSocket protocol used for?
11. What is JSX and how are the curly braces rendered?
12. Assuming a HTML document with a 
<div id="root"></div>
element, what content will the following React component generate?
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
      function App() {
        return (
          <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
          </div>
        );
      }
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);
13. Assuming a HTML document with a 
<div id="root"></div>
element, what content will the following React component generate?
    function Numbers() { 
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li>{number}</li>
      );
      return(<ul>{listItems}</ul>)
    }
    const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(<Numbers/>);
14. What does the following React component do?
function Example() {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
15. What are React Hooks used for?
16. What is the useEffect hook used for?
17. What does this code do?
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
18. What role does npm play in web development?
19. What does package.json do in a npm project?
20. What does the fetch function do?
21. What does node.js do?
22. What does Vite do?