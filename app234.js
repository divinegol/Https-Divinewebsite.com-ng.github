document.getElementById('learnMore').addEventListener('click', function() {
    alert('Thanks for showing interest! More content will be added soon.');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('mobileMenu').addEventListener('click', function() {
    var navMenu = document.getElementById('navMenu');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
});

function toggleSearchModal() {
    var modal = document.getElementById("searchModal");
    if (modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}

function shareOnWhatsApp() {
    const message = 'Check out this amazing website!'; // Customize your message
    const url = encodeURIComponent(window.location.href); // URL to share
    const whatsappUrl = `https://api.whatsapp.com/send?text=${message} ${url}`;
    
    // Open the WhatsApp sharing URL in a new window
    window.open(whatsappUrl, '_blank');
}

if (Notification.permission === "granted") {
    new Notification("New visitor on your website!");
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification("New visitor on your website!");
      }
    });
  }

  function openRegistrationOptions() {
    document.getElementById("registration-options-modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("registration-options-modal").style.display = "none";
  }

  function openPersonalRegistration() {
    window.location.href = "/register/personal"; // Redirect to personal registration page
  }
  
  function openBusinessRegistration() {
    window.location.href = "/register/business"; // Redirect to business registration page
  }
  
  function openOtherRegistration() {
    window.location.href = "/register/other"; // Redirect to other registration page
  }
  
  // JavaScript
const fullscreenButton = document.getElementById('fullscreen-button');

fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        // Enter fullscreen
        document.documentElement.requestFullscreen();
        fullscreenButton.textContent = '❌'; // Icon for exit fullscreen
    } else {
        // Exit fullscreen
        document.exitFullscreen();
        fullscreenButton.textContent = '🔲'; // Icon for enter fullscreen
    }
});

// JavaScript
const fileUpload = document.getElementById('file-upload');
const previewImage = document.getElementById('preview-image');
const filePreview = document.getElementById('file-preview');

fileUpload.addEventListener('change', () => {
    const file = fileUpload.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = () => {
            previewImage.src = reader.result;
            filePreview.style.display = 'open';
        };

        reader.readAsDataURL(file);
    }
});

// JavaScript
const openMenuButton = document.getElementById('open-menu');
const closeMenuButton = document.getElementById('close-menu');
const menuPanel = document.getElementById('menu-panel');

// Open the menu
openMenuButton.addEventListener('click', () => {
    menuPanel.classList.add('active');
});

// Close the menu
closeMenuButton.addEventListener('click', () => {
    menuPanel.classList.remove('active');
});

// JavaScript
const downloadIcon = document.getElementById('download-icon');
const downloadList = document.getElementById('download-list');
const downloadItems = document.getElementById('download-items');

// Toggle download list visibility
downloadIcon.addEventListener('click', () => {
    downloadList.style.display = downloadList.style.display === 'none' ? 'block' : 'none';
});

// Function to add a new download
function addDownload(filename, fileUrl) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = fileUrl;
    link.textContent = filename;
    link.download = filename; // Initiate download on click
    listItem.appendChild(link);
    downloadItems.appendChild(listItem);
}

// Example usage: Adding a download item (simulate by calling this function)
addDownload('ExampleFile.pdf', '/path/to/ExampleFile.pdf');
