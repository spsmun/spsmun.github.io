const cursor = document.querySelector('.cursor');
               
document.addEventListener('mousemove', e => {
   cursor.style.left = e.clientX + 'px';
   cursor.style.top = e.clientY + 'px';
});

const hoverElements = document.querySelectorAll('a, button');

hoverElements.forEach(element => {
   element.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
      document.body.style.cursor = 'none';
   });
   element.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      document.body.style.cursor = 'none';
   });
});

const links = document.querySelectorAll('a');

links.forEach(link => {
   link.addEventListener('mouseenter', () => {
      cursor.classList.add('link-hover');
   });
   link.addEventListener('mouseleave', () => {
      cursor.classList.remove('link-hover');
   });
});

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
   button.addEventListener('mouseenter', () => {
      cursor.classList.add('button-hover');
   });
   button.addEventListener('mouseleave', () => {
      cursor.classList.remove('button-hover');
   });
});
/* Toggle the display of the sidebar on hamburger button click */
var hamburger = document.querySelector('.hamburger');
var overlay = document.querySelector('.overlay');
var sidebar = document.querySelector('.sidenav');
var closebutton = document.querySelector('.closebtn');

hamburger.addEventListener('click', function() {
overlay.style.display = 'block';
sidebar.style.width = '100%';
});

closebutton.addEventListener('click', function() {
overlay.style.display = 'none';
sidebar.style.width = '0';
});
/* Toggle the dropdown content on button click */
var dropdownBtns = document.querySelectorAll('.drop-btn');

dropdownBtns.forEach(function(dropdownBtn) {
dropdownBtn.addEventListener('click', function() {
var dropdownContent = this.nextElementSibling;
dropdownContent.classList.toggle('show');
var offsetTop = this.offsetTop;
dropdownContent.style.top = offsetTop + this.offsetHeight + 'px';
});
});

/* Close the dropdown content if the user clicks outside of it */
window.addEventListener('click', function(event) {
if (!event.target.matches('.drop-btn')) {
var dropdownContents = document.querySelectorAll('.drop-container');
dropdownContents.forEach(function(dropdownContent) {
if (dropdownContent.classList.contains('show')) {
dropdownContent.classList.remove('show');
}
});
}
});
var hamburger = document.querySelector('.hamburger');
var overlay = document.querySelector('.overlay');
var sidebar = document.querySelector('.sidenav');
var closebutton = document.querySelector('.closebtn');

hamburger.addEventListener('click', function() {
if (overlay.style.display !== 'block') {
sidebar.style.width = '100%';
overlay.style.display = 'block';
}
if (overlay.style.width !== '100%') {
hamburger.style.display = 'none';
}
});

closebutton.addEventListener('click', function() {
overlay.style.display = 'none';
sidebar.style.width = '0';
hamburger.style.display = 'block';
});

overlay.addEventListener('click', function() {
overlay.style.display = 'none';
sidebar.style.width = '0';
hamburger.style.display = 'block';
});
// JavaScript
const nav = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.closebtn');
const myDiv = document.querySelector('.nav');
const socials = document.querySelector('.socials');
nav.addEventListener('click', () => {
myDiv.style.display = 'none';
socials.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
myDiv.style.display = 'flex';
socials.style.display = 'flex';
});
// Get the navbar element
var navbar = document.getElementById("navbar");

// Get the height of the navbar
var navbarHeight = navbar.offsetHeight;

// Get the height of the document
var documentHeight = Math.max(
document.body.scrollHeight,
document.body.offsetHeight,
document.documentElement.clientHeight,
document.documentElement.scrollHeight,
document.documentElement.offsetHeight
);

// Calculate the position where the navbar should stop
var stopPosition = documentHeight - window.innerHeight - navbarHeight;

// Add an event listener to the window's scroll event
window.addEventListener("scroll", function() {
// Get the current scroll position
var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

// Set the navbar's top position based on the scroll position, with a minimum of 35px
navbar.style.top = Math.max(Math.min(scrollPosition, stopPosition), 35) + "px";
});
