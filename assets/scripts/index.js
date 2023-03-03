'use strict'

/*
  Tools and Automation
  Josh Gable, Jason Adindu and Caner Duzenli

  Final Assignment
*/

const dropdownBtn = document.querySelector('.dropdown')
const navbar = document.querySelector('.navbar')

dropdownBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
