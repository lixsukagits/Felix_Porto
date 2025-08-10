// Function to show a welcome popup and set the user's name
function handleUserName() {
  let userName = localStorage.getItem('userName');

  if (userName) {
    // If the name exists in localStorage, display it
    const welcomeUserElement = document.getElementById('welcome-user');
    if (welcomeUserElement) {
      welcomeUserElement.innerHTML = userName;
    }
  } else {
    // If no name is found, prompt for one
    userName = prompt("Please enter your name:");

    // If the user enters a name, save and display it
    if (userName !== null && userName.trim() !== '') {
      localStorage.setItem('userName', userName);
      const welcomeUserElement = document.getElementById('welcome-user');
      if (welcomeUserElement) {
        welcomeUserElement.innerHTML = userName;
      }
    } else {
      // Retry if no name is entered
      alert("Name cannot be empty. Please try again.");
      handleUserName();
    }
  }
}

// Run the function when the page loads
window.onload = function() {
  handleUserName();
};

// === Logic untuk Modal Gambar ===
// Jalankan kode ini hanya jika elemen gambar di halaman ada
document.addEventListener('DOMContentLoaded', () => {
    const imageModal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');

    // Ambil semua gambar yang ingin bisa di-zoom (misal: di bagian prestasi)
    const achievementImages = document.querySelectorAll('#achievements img');

    achievementImages.forEach(image => {
        image.addEventListener('click', () => {
            modalImage.src = image.src;
            imageModal.classList.remove('hidden');
        });
    });

    // Event listener untuk menutup modal
    closeModal.addEventListener('click', () => {
        imageModal.classList.add('hidden');
    });

    // Menutup modal saat mengklik di luar gambar
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.classList.add('hidden');
        }
    });
});

// === Logika JavaScript Lainnya (handleUserName, dll.) ===
// Logika untuk menampilkan nama user akan saya asumsikan sudah ada di script.js
// ... (kode handleUserName Anda) ...