function myFunction() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (validateForm(name, email)) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Subject:', subject);
      console.log('Message:', message);
      alert('Thank you for your message!');
      document.querySelector('form').reset();
  }
}

function validateForm(name, email) {
  if (name === '') {
      alert('Your Full Name is required.');
      return false;
  }

  if (email === '' || !isValidEmail(email)) {
      alert('A valid Email is required.');
      return false;
  }

  return true;
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

/*--Dialog--*/
// Get the add skill button
// Get the add skill button
const addSkillButton = document.querySelector('.skillbutton1');

// Get the dialog element
const dialog = document.querySelector('.dialog');

// Get the dialog content element
const dialogContent = document.querySelector('.dialog-content');

// Get the close button element
const closeButton = document.querySelector('.button2');

// Get the add skill button element
const addSkillBtn = document.querySelector('.button1');

// Get the skill name input element
const skillNameInput = document.querySelector('#dialog-skill');
const domainNameInput = document.querySelector('#domain');

// Get the skill level input element
const skillLevelInput = document.querySelector('#dialog-proficiency');

// Function to add a new skill
function addSkill() {
  // Get the skill name and level from the input fields
  const skillName = skillNameInput.value.trim();
  const skillLevel = skillLevelInput.value.trim();

  // Check if the skill name and level are not empty
  if (skillName !== '' && skillLevel !== '') {
    // Create a new category element
    const categoryElement = document.createElement('div');
    categoryElement.classList.add('category');

    // Create a new skill element
    const skillElement = document.createElement('div');
    skillElement.classList.add('skill');

    // Create a new skill name element
    const skillNameElement = document.createElement('span');
    skillNameElement.classList.add('name');
    skillNameElement.textContent = skillName;

    // Create a new skill level element
    const skillLevelElement = document.createElement('span');
    skillLevelElement.textContent = skillLevel + '%';

    // Create a new progress bar element
    const progressBarElement = document.createElement('div');
    progressBarElement.classList.add('progress');

    // Create a new progress bar inner element
    const progressBarInnerElement = document.createElement('div');
    progressBarInnerElement.classList.add('progress-bar');
    progressBarInnerElement.style.width = skillLevel + '%';

    // Append the skill name, level, and progress bar elements to the skill element
    skillElement.appendChild(skillNameElement);
    skillElement.appendChild(progressBarElement);
    progressBarElement.appendChild(progressBarInnerElement);
    skillElement.appendChild(skillLevelElement);

    // Append the skill element to the category element
    categoryElement.appendChild(skillElement);

    // Select the skills container
    const skillsContainer = document.querySelector('.skillsrow1');

    // Append the category element to the skills container
    skillsContainer.appendChild(categoryElement);

    // Clear the input fields
    skillNameInput.value = '';
    skillLevelInput.value = '';

    // Close the dialog
    dialog.style.display = 'none';
  }
}
addSkillButton.addEventListener('click', () => {
  document.querySelector('.dialog').classList.add('show');
  document.querySelector('.overlay').classList.add('show');
  document.querySelector('.container').classList.add('blur');
});

closeButton.addEventListener('click', () => {
  document.querySelector('.dialog').classList.remove('show');
  document.querySelector('.overlay').classList.remove('show');
  document.querySelector('.container').classList.remove('blur');
});
  
  // Add event listener to the dialog to close it when clicked outside
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      document.querySelector('.dialog').classList.remove('show');
      document.querySelector('.overlay').classList.remove('show');
    }
  });

