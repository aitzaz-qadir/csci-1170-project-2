# Group Assignment 2 READ.ME

## Game Name: THE BOX OF WONDER

### Summary:

* The game is a very basic color guessing game.
* Trace a color without losing concentration.
* The game starts with a timer where the game shows a color and we have to trace that color and press the right button.
* But the there is a twist, the color buttons have different background color to take away the concentration and make a wrong decision.
* The game also keeps record of the time used to select each color.
* It also has a sample dashboard where it shows the scores of various persons played.
* The game can be used to increase hand-eye co-ordination skills, long term concentration and faster human reaction.

### Instructions to Play:

* Once the start button is pressed, the game selects a random color from either red, blue, green or yellow and the entire division containing the timer transitions to that color.
* The player is meant to press the correct button corresponding to the color being displayed as soon as possible.
* Once the player has selected a button, the game records the time it took to select the color in milliseconds, saves the attemp as either success or a failure and then switches to the next color.
* The pause button pauses the game where it is and displays an alert, after which it resumes.
* Repeat the process and keep playing until you decide to stop by pressing the "Stop" button.
* The get score button displays the current score of the player in an alert box which includes stats about the current attempt.
* The blue section on the right side keeps a record of all the attempts made and their times.
* The stop button reloads the page and hence the game.
* There is also a link provided to the dash board which is supposed to update the leaderboard of attempts.

### Citation:

* The game's timer mechanism was inspired by HumanBenchmark Reaction Test interactive website but many more ideas were added later on.
> URL: https://humanbenchmark.com/tests/reactiontime 


## Group Member #1

### Personal Details:

> Date Created : 2020/10/30

* Full Name: Aitzaz Qadir Khowaja
* Dal-ID   : B00853169
* Email    : aitzazqadir@dal.ca

###  Total Work Done

#### 1. Main Timer Mechanism:
* Created the main timer and majority of work on it was done by me both in HTML/CSS and Javascript. The timer function is called when the player starts the game, it uses the setInverval method in Javascript to continuously call the timer and update its HTML. The setInterval method has no millisecond update time specified so that user's browser can decide the lowest time possible for the player. Generally this is automatically set to 4ms.

#### 2. Design of the website:
* Designed most of the website including the nav bar, the buttons, the game container, the right score section and the overall color scheme of the website. The main layout of the website in HTML/CSS was done by me including the transitioning colors and gradient backgrounds.

#### 3. The div color changing:
* Made the javascript and buttons to make the division change color and pick between four random colors based on a randomly calculated integer. This works by using the Math.random() method and rounding up its returned value to give a value between 1 and 10. based of the random value returned the div changes color accordingly, for 0-2 is red for 2-4 is blue and so on.

#### 4. Button responsiveness:
* Made the buttons link to the main game and respond to wether or not the correct color was selected. This was done by recognizing which random number value of selected and based on that checking wether the player clicked the right button or not. Each button only checks its own corressponding color. For ex. if the random value was 1 hence the color was red, the red button checks if the value obtained was b/w 0-2 which is true.

#### 5. The Stop Button
* I also made the stop button, it simply reloads the page and therefore stops the current running game. It restarts the entire interface. If a player needs to check his scores he must click the get score button which will also pause the game.

#### Lessons Learned from this Experience
* By working in this group project, I gained valuable experience in using javascript on websites. I also improved my group working and communication skills. I also learned that working as a group although does make certain things hectic as co-ordination and group input is required before adding any feature but the product always turns out better when working with groups as multiple people are able to come up with much better ideas than alone.

### Material Studied

* Disscussions with teammates.
* Recorded Lectures & ZyBooks from CSCI-1170.
* Taken previous courses in HTML/CSS in home country.
* Favicon for website acquired on 29/10/2020 from "Flat-Icon"
> URL: https://www.flaticon.com/free-icon/chronometer_850960?term=stopwatch&page=1&position=9
* Inspiration for the color scheme of the website acquired on 29/10/2020 from "HookAgency"
> URL: https://hookagency.com/color-schemes/


## Group Member #2

### Personal Details:

> Date Created : 2020/10/30

* Full Name: Md Asef Jawad
* Dal-ID   : B00856362
* Email    : as706574@dal.ca

###  Total Work Done

#### 1. Provided basic framework for initial versions of the website.

#### 2. Provided base idea for the game.

#### 3. Additional work:

* Named the game with "The Box of Wonder"
* Made the original color changing code html, css and js file which were further modified by teammates into a more perfect version.
* Provided base idea and basic framework for the initial versions of the game.
* Set up the colors and color buttons which were further changed by teammates.
* Made the footer of the website.
* Worked on summary and instructions for the game.

### Material Studied

* Recorded Lectures & ZyBooks from CSCI-1170
* Disscussions with teammates.


## Sub-group #2 : Group Member #3 & 4

### Personal Details:

> Date Created : 2020/10/30

* Full Name: Hao Wang, Ruiting Yao
* Dal-ID   : B00692430, B00527867
* Email    : hz267099@dal.ca, rt529107@dal.ca

### Total Work Done:

#### 1. The Submit Name Button:
* Created the button named "name" which allows players to write down their name in the input area, when players click the button, the function "sumbit()" is called, the text in the input area will get store into the variable name, and the variable is also used in function "score()" for display.

#### 3. The reaction time list:
* Created the ul list to show the reaction time in the right half of the screen, every time we click a "color" button, screen will tell us the reaction time and add it in to the right side.

#### 2. The score button:

* Created the button named "score", when player wants to see the summary of their gameplay, they can click it, after players click the button, it will call the function "score()", the function will store the data of the player like how many times they played, how many times they succeeded/failed and so on.

### Material Studied

* Recoded lectures & ZyBooks from CSCI-1170
* Disscussions with teammates.

## Group Member #5

### Personal Details:

> Date Created : 2020/10/30

* Full Name: Kelvin Bagthariya
* Dal-ID   : B00823366
* Email    : kl419365@dal.ca

###  Total Work Done

#### 1. Helped with Idea finalization and suggestions
* Gave my suggestions of games that we can make, I browsed a similar idea and as a team we modified that idea to make it better.

#### 2. Worked on Dashboard page
* Created and worked on the dashboard page which collects details of the players and stores player info such as score, time, success rate. Majorly I worked on header, navigation bar and designing of table.
* My actual idea was to access and store the name from user input but lack of time and as it was not taught in lecture I was unable to achieve that goal. 

#### 3. Helped with suggestion about general framework

### Material Studied

* Disscussions with teammates.
* Recorded Lectures & ZyBooks from CSCI-1170.
* Creating next page for website acquired on 29/10/2020 from "W3Schools"
> URL: https://www.w3schools.com/howto/howto_css_next_prev.asp
* How to access the variables from java script to html acquired on 29/10/2020 from "Stack overflow"
> URL: https://stackoverflow.com/questions/14845710/javascript-variable-access-in-html
* color scheme of the website acquired on 30/10/2020 from "W3Schools"
> URL: https://www.w3schools.com/colors/colors_picker.asp 


