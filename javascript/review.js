

//Adding the names courses to my website
const courses = [
  "Portmarnock Golf Club",
  "Adare Manor Golf Club",
  "Royal Dublin Golf Club"
];
document.getElementById("items").innerHTML = courses;

//Alert pops on screen once the button is clicked
function submitButton() {
  alert("Thank you\nYour query has been submitted");
}

//Grabbing the element para from html and adding the club below 
function favouriteCourse(){
  document.getElementById("para").innerHTML = "Portmarnock Golf Club";

}

const golfCourses = [
  "Adare Manor Golf Club",
  "Ballybunion Golf Club (Old)",
  "Ballyliffin Golf Club (Glashedy)",
  "Ballyliffin Golf Club (Old)",
  "Belmullet Golf Club (Carne)",
  "Blainroe Golf Club",
  "County Louth Golf Club",
  "County Sligo Golf Club (Championship)",
  "Cork Golf Club",
  "Donegal Golf Club",
  "Dooks Golf Club",
  "Druids Glen Golf Club",
  "Enniscrone Golf Club(Dunes)",
  "European Club",
  "Fota Island Golf Club (Deerpark)",
  "Headfort Golf Club (New)",
  "K Club (Palmer)",
  "Killarney Golf and Fishing Club (Killeen)",
  "Killeen Castle Golf Club",
  "Lahinch Golf Club (Old)",
  "Mount Juliet Golf Course Conrad",
  "Old Head Golf Links",
  "Portmarnock Golf Club (Championship)",
  "Portsalon Golf Club",
  "Rosapenna Golf Club (Sandy Hills)",
  "The Island Golf Club",
  "Tralee Golf Club",
  "Trump International Golf Links, Doonbeg",
  "Waterville Golf Club"
];

// Function to display Irish golf courses on the webpage
function displayCourses() {
  const courseList = document.getElementById('course-list');

  golfCourses.forEach(course => {
    // Create a new lust item element
    const listItem = document.createElement('li');
    
    // Set the text content of the list item
    listItem.textContent = course;

    // append the list item to the unordered list
    courseList.appendChild(listItem);
  });
}

// Call the function to dusplay Irish courses
displayCourses();

const pgc = {
  number: "(01) 846 2968",
  email: "info@portmarnockgolfclub.ie",
  address: "Golf Links Road, Portmarnock Dublin, Co. Dublin, Ireland, D13 KD96",
};

document.getElementById("pgc-info").innerHTML = 
"Number: " + pgc.number + "<br>Email: " + pgc.email + "<br>Address: " + pgc.address;

function validateForm() {
  // retrieving form values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  // avoiding blank input
  if (name === "" || email === "" || message === "") {
    alert("Name, email and message are required");
    return false;
  }
  // validating email format using a simple regular expression
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }
  // if all validations pass
  return true;
  }

