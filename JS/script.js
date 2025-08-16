function handleUserName() {
  let userName = localStorage.getItem('userName');

  if (userName) {
    const welcomeUserElement = document.getElementById('welcome-user');
    if (welcomeUserElement) {
      welcomeUserElement.innerHTML = userName;
    }
  } else {
    // This is a browser function and may not work in all environments.
    // Use a custom modal for a more robust solution.
    userName = prompt("Please enter your name:");

    if (userName !== null && userName.trim() !== '') {
      localStorage.setItem('userName', userName);
      const welcomeUserElement = document.getElementById('welcome-user');
      if (welcomeUserElement) {
        welcomeUserElement.innerHTML = userName;
      }
    } else {
      // This is a browser function and may not work in all environments.
      // Use a custom modal for a more robust solution.
      alert("Name cannot be empty. Please try again.");
      handleUserName(); // Prompt again if name is empty
    }
  }
}

// Function to handle the mobile menu toggle
function handleMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileMenuContent = document.getElementById('mobile-menu-content');
  const closeMobileMenu = document.getElementById('close-mobile-menu');

  if (menuToggle && mobileMenuOverlay && mobileMenuContent && closeMobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenuContent.classList.add('open');
      mobileMenuOverlay.style.display = 'block';
      setTimeout(() => {
        mobileMenuOverlay.classList.add('visible');
      }, 10);
    });

    closeMobileMenu.addEventListener('click', () => {
      mobileMenuContent.classList.remove('open');
      mobileMenuOverlay.classList.remove('visible');
      setTimeout(() => {
        mobileMenuOverlay.style.display = 'none';
      }, 300);
    });

    mobileMenuOverlay.addEventListener('click', () => {
      closeMobileMenu.click();
    });
  }
}

// Function to handle image modal
function handleImageModal() {
  const achievementImages = document.querySelectorAll('#achievements img');
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const closeModalBtn = document.getElementById('close-modal');

  function openModal(src, alt) {
    modalImage.src = src;
    modalImage.alt = alt;
    modal.classList.remove('hidden', 'opacity-0');
    modal.classList.add('flex', 'opacity-100');
    // Force a reflow to ensure the transition works on display: flex
    void modal.offsetWidth;
    modalImage.classList.add('scale-100');
  }

  function closeModal() {
    modalImage.classList.remove('scale-100');
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300); // Match this with the transition duration
  }

  achievementImages.forEach(image => {
    image.addEventListener('click', (e) => {
      openModal(e.target.src, e.target.alt);
    });
  });

  closeModalBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

// Consolidate all initialization logic in DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  handleUserName();
  handleMobileMenu();
  handleImageModal();
});
