// define student responses as array of objects
// with student, site, and comment
var sites = [
  {student: "Miguel",
   site:"http://pharrellwilliams.com",
   comment: "I chose this website because of the UI/UX. "},
   // {student: "Muhamadi",
   //  site:"http://google.com",
   //  comment:"It's simple and gets straight to the point. What I like about Google is that it doesn't shove you with information (news, ads or any other website junk) like Yahoo or Bing."},
   // {student: "Muhamadi",
   //  site:"http://reddit.com",
   //  comment:"Reddit is one of my favorite websites because it's quick and it has a voting system for posts where any user can create a post and get up votes to address something to the creator or the company."},
   // {student: "Muhamadi",
   //  site: "http://slack.com",
   //  comment: "It's a nice website where you can communicate with your coder buddies. I like Slack because it's simple yet stylish in its own way."},
   {student: "Brian",
    site: "http://hbogo.com",
    comment: "Very easy to navigate. Dynamic and intuitive. Simple and subtle color schemes, images are interactive"},
   // {student: "Brian",
   //  site: "http://nytimes.com",
   //  comment: "Typeface and format reads very similar to regular (print) newspaper."},
   {student: "Skylar",
    site: "http://www.bonsaioutlet.com",
    comment: "The colors for the site mesh really well togeather. Contrast between the colors makes it easy to read, makes important text stand out prominently, all while be cohesive in that the colors are representative of what the site is advertising."},
   {student: "Skylar",
    site: "http://www.codingame.com/start",
    comment: "First off this website is just cool for the premise. Secondly, it utilizes one color with a mix of black and white in various forms of darkness and brightness. The less colors you can utilize while making the website still functional the more stand-out-ished the website will be."},
   {student: "Skylar",
    site: "http://thedailywtf.com",
    comment:"Right at the top you get quick links to sort out the blog posts. The main page has the most recent posts but when I find really neat is how there is a small colored bar right next to each post. That colored bar represents what category that post belongs to. Looking at the top navigation area you can see that the categories are preceded by colored bar that is broken up to match the word below that is represents."},
   {student: "Skylar",
    site: "http://ramiismail.com/",
    comment: "I like the simple design and the subtle image that is almost hidden in each post prevew. The decision to forgo headers for each post is also an interesting choice. The lack of headers might throw some readers off since it makes it harder to quickly sift through different topics."},
   {student: "William",
    site: "http://www.walden-assoc.com",
    comment: "Walden is a civil and environmental engineering firm; their website nicely lays out bullet points, links to different markets and is very user friendly."},
   // {student: "William",
   //  site: "http://tesla.com",
   //  comment: "Tesla's home page consists of a masthead, top nav bar, image and a footer. Each section bringing you to different areas with different functionality. Mastheads that can take the user to different pages/products. Clean and clear imagery."},
   // {student: "Isabel",
   //  site: "http://facebook.com",
   //  comment: "I like the way the header is fixed so I can always navigate to my messages, notifications, personal page."},
   {student: "Isabel",
    site: "http://sporcle.com",
    comment: "I like the way content is written over images and that the website’s code allows me to pause quizzes. While they are paused it covers the quiz material so I can’t cheat"},
   {student: "Arnold",
    site: "http://www.jasonbournemovie.com",
    comment: "This page has static text on top of a video playing in the background, a burger menu, and second video that appears as the menu is activated."},
   {student: "Emma",
    site: "http://histography.io/",
    comment: "An interactive timeline, filled with interactive animations in a non-cluttered way."},
   // {student: "Emma",
   //  site: "http://byredo.com",
   //  comment: "Minimalist black and white design, very clean and modern."},
   {student: "Emma",
    site: "http://seriouseats.com",
    comment: "Native advertising is well integrated alongside regular content; labeled as advertising but goes well alongside original content."},
   {student: "George",
    site: "http://www.gamespot.com",
    comment: "I love the layout and the interactive elements when you hover over the links to other sections of the web page."},
   {student: "George",
    site: "http://www.hydearchitects.com",
    comment: "I love the clean yet graphically intensive design. This company seems to take the bootstrap idea to a new level."},
   {student: "Alberto",
    site: "http://www.camdentownbrewery.com",
    comment: "The use of color of this website shows how to bring forward an image of beer to stand out. You get a sense of a pop feel with just one solid tone color playing around with many different beer images."},
   {student: "Alberto",
    site: "http://audiograph.xyz",
    comment: "Despite being an interactive site, the use of contrast, saturation, and bold colors made the site playing and appealing to look at. Having different images play out with color made music/sound element have purpose."},
   {student: "Alberto",
    site: "http://www.noaa.gov",
    comment: "Using one color and one color only which was blue, theme of the ocean. Using blue color platte and laying different tones blue through out the site, from images, navigation, backgrounds, logo, ux/ui buttons; everything had a theme of the ocean/marine life by using only a blue color."},
   {student: "Kevin",
    site: "http://www.bigspaceship.com",
    comment: "When looking through this website I was very intrigued by the way the navigation bar was set up, activating aspects of the layout when the menu is clicked."},
   {student: "Kevin",
    site: "http://www.deadspin.com",
    comment: "This is one of my favorite websites just to read and get a laugh whenever I have some free time.  One of the reasons I like it, is that it very accessible and easy to navigate to from one page to another."},
   {student: "Kevin",
    site: "http://www.stojakovic.co/",
    comment: "This was another website that really drew my attention because of the background that was used and how it moved with the movement the end user was making."},
   {student: "Bryce",
    site: "http://www.turnefferesort.com",
    comment: "Things that I liked-rounded borders, minimalistic approach,  video montage before nav bar that demonstrated the  beauty of the sea and the resort experience. Ultimately, I liked how the site capitalized on a highly visual presentation."},
   {student: "Bryce",
    site: "http://www.fiftythree.com/pencil",
    comment: "I was really impressed with this site's ajax/javascript capabilities. As one scrolled down the page, the pencil would animate."},
   {student: "Bryce",
    site: "http://www.etq-amsterdam.com",
    comment: "EQ takes a minimalistic approach with a strong focus on visual content. Actually, even more so as besides the shoes, the page is left completely bare except for the word, 'new'."},
   {student: "Bryce",
    site: "http://www.baylorschool.org",
    comment: "I liked the footer where the logo is transparent and the site's scroll shortcut on the left side of the page"},
   {student: "Danna",
    site: "http://airbnb.com",
    comment: "HQ playable video banner, image sliders, simple well-organized layout."},
   {student: "Danna",
    site: "http://cuberto.com/",
    comment: "Loading site effect, audio playing, simple static nav bar."}
   // {student:
   //  site:
   //  comment: },
   // {student:
   //  site:
   //  comment: },
];
var index = 0; // current index
// On Ready listener will wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  changeReview();
    // change the iframe source and commentary every 20 seconds
  setInterval(changeReview,20000);
});

function changeReview() {
    // update site
    document.getElementsByTagName("iframe")[0].src = sites[index].site;
    // update comment
    document.getElementsByTagName("blockquote")[0].innerText = sites[index].comment;
    // update author tag (student who reviewed)
    document.getElementsByTagName("author")[0].innerText = sites[index].student;
    index += 1 % (sites.length-1); //increase index by one for next go around
}