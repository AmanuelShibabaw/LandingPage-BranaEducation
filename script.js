window.courses = [
  {
    name: 'React Js Full Course',
    price: 70,
    courseThumbnail: 'courseimages/reactjs.png',
    id: 0,
    rating: "⭐⭐⭐⭐⭐",
    category: "web development",
    description: "Master React.js and build dynamic, high-performance web applications."
  },
  {
    name: 'Python For Beginners',
    price: 70,
    courseThumbnail: 'courseimages/python.png',
    id: 0,
    rating: "⭐⭐⭐⭐⭐",
    category: "web development",
    description: "Learn Python from scratch and kickstart your programming journey."
  },
  {
    name: 'JavaScript Crash Course',
    price: 70,
    courseThumbnail: 'courseimages/javascript.png',
    id: 0,
    rating: "⭐⭐⭐⭐⭐",
    category: "web development",
    description: "Quickly master JavaScript fundamentals and build interactive websites."
  },
  {
    name: 'Adobe Illustrator',
    price: 70,
    courseThumbnail: 'courseimages/adobeilustrator.png',
    id: 0,
    rating: "⭐⭐⭐⭐⭐",
    category: "graphics design",
    description: "Unlock your creativity and design stunning graphics with Adobe Illustrator."
  },
  {
    name: 'Data Science',
    price: 70,
    courseThumbnail: 'courseimages/datascience.png',
    id: 20,
    rating: "⭐⭐⭐⭐⭐",
    category: "web development",
    description: "Explore the world of data analysis and become a data science professional."
  },
  {
    name: 'Artificial Intelligence',
    price: 70,
    courseThumbnail: 'courseimages/ai.png',
    id: 20,
    rating: "⭐⭐⭐⭐⭐",
    category: "machine learning",
    description: "Dive into AI technologies and build intelligent systems from scratch."
  },
  {
    name: 'Adobe Photoshop',
    price: 70,
    courseThumbnail: 'courseimages/adobephotoshop.png',
    id: 0,
    rating: "⭐⭐⭐⭐⭐",
    category: "graphics design",
    description: "Learn professional photo editing and graphic design with Adobe Photoshop."
  },
  {
    name: 'HTML For Beginners',
    price: 70,
    courseThumbnail: 'courseimages/html.png',
    id: 0,
    rating: "⭐⭐⭐⭐⭐",
    category: "web development",
    description: "Build a solid foundation in web development by mastering HTML."
  },
  {
    name: 'Machine Learning',
    price: 70,
    courseThumbnail: 'courseimages/machinelearning.png',
    id: 0,
    rating: "⭐⭐⭐⭐⭐",
    category: "machine learning",
    description: "Gain essential skills in machine learning and predictive modeling."
  },
  {
    name: 'Node Js Crash Course',
    price: 70,
    courseThumbnail: 'courseimages/nodejs.png',
    id: 0,
    rating: "⭐⭐⭐⭐⭐",
    category: "web development",
    description: "Learn Node.js and start building scalable back-end applications."
  },
  {
    name: 'Express Js Crash Course',
    price: 70,
    courseThumbnail: 'courseimages/expressjs.png',
    id: 0,
    rating: "⭐⭐⭐⭐⭐",
    category: "web development",
    description: "Master Express.js to create powerful and efficient web servers."
  },
  {
    name: 'Digital Marketing Crash Course',
    price: 70,
    courseThumbnail: 'courseimages/digitalmarketing.png',
    id: 0,
    rating: "⭐⭐⭐⭐⭐",
    category: "digital marketing",
    description: "Learn digital marketing essentials and grow your online presence."
  },
  {
    name: 'Digital Marketing Full Advanced Course',
    price: 70,
    courseThumbnail: 'courseimages/advanceddigitalmarketing.png',
    id: 0,
    rating: "⭐⭐⭐⭐⭐",
    category: "digital marketing",
    description: "Master advanced digital marketing strategies to drive business success."
  },
  {
    name: 'Java Programming Full Course',
    price: 70,
    courseThumbnail: 'courseimages/java.png',
    id: 0,
    rating: "⭐⭐⭐⭐⭐",
    category: "web development",
    description: "Become proficient in Java programming and build robust applications."
  },
  {
    name: 'PHP Programming Full Course',
    price: 70,
    courseThumbnail: 'courseimages/php.png',
    id: 0,
    rating: "⭐⭐⭐⭐⭐",
    category: "web development",
    description: "Learn PHP programming and develop dynamic, server-side web applications."
  }
];

window.displayCourses = function(selection){
  document.querySelector('.course-list').innerHTML ='';
  courses.forEach(function generateHtml(courseData) {
    if(selection===courseData.category){
      const generatedHTML = `
      <div class="course programming fade-in course-box ">
        <img src="${courseData.courseThumbnail}" alt="${courseData.name}">
        <h3>${courseData.name}</h3>
        <p>Learn to build amazing websites.</p>
        <div class="course-info">
          <span class="price">$${courseData.price}</span>
          <span class="rating">${courseData.rating}</span>
        </div>
        <button class="btn btn-gradient enroll-btn">Enroll</button>
      </div>
      `;
      document.querySelector('.course-list').innerHTML += generatedHTML;
    }
    else if(selection==='all'){
      const generatedHTML = `
      <div class="course programming course-box">
        <img src="${courseData.courseThumbnail}" alt="${courseData.name}">
        <h3>${courseData.name}</h3>
        <p>${courseData.description}</p>
        <div class="course-info">
          <span class="price">$${courseData.price}</span>
          <span class="rating">${courseData.rating}</span>
        </div>
        <button class="btn btn-gradient enroll-btn">Enroll</button>
      </div>
      `;
      document.querySelector('.course-list').innerHTML += generatedHTML;
    }
  });
}

displayCourses('all');

/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  let menuBtn = document.getElementById("myNavMenu");
  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

window.onscroll = function() {
headerShadow();
scrollActive();
};

function headerShadow() {
const navHeader = document.getElementById("header");
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
  navHeader.style.height = "70px";
  navHeader.style.lineHeight = "70px";
} else {
  navHeader.style.boxShadow = "none";
  navHeader.style.height = "90px";
  navHeader.style.lineHeight = "90px";
}
}

//reveal animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.container',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* for about section */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.name-of-developer',{delay: 100})
srLeft.reveal('.card',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
//ke kekegn wede gra
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.fade-in',{delay: 100})
srRight.reveal('.course',{delay: 100})
srRight.reveal('.message',{delay: 100})

/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText", {
strings: [
  "Advance Your Career",
  "Unlock World-Class Skills",
  "Achieve Your Dreams Today"
],
loop: true,
typeSpeed: 100,
backSpeed: 80,
backDelay: 2000
});
// /* ----- CHANGE ACTIVE LINK ON SCROLL ----- */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    
    const link = document.querySelector('.nav-menu a[href*="#' + sectionId + '"]');

    if (link) { // Only if the link exists
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    }
  })
}
window.addEventListener('scroll', scrollActive);


