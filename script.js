
    const rig = document.getElementById("cameraRig");
    const title = document.querySelector(".title-text");
    const info = document.getElementById("sculptureInfo");
    const navButton = document.getElementById("navButton");
    const pointLight = document.querySelector('[type="point"]');
    const progressBar = document.getElementById("progressBar");

    let currentView = 0;
    let rotationInterval;
    const rotationSpeed = 10000;
    const viewData = [
      { angle: 0, name: "Half Circle Stacked", lightPos: "0 2 -4" },
      { angle: 90, name: "Erhebungx", lightPos: "4 2 0" },
      { angle: 180, name: "Cubic spaces", lightPos: "0 2 4" },
      { angle: 270, name: "Gravitas", lightPos: "-4 2 0" }
    ];

    document.querySelector('a-scene').addEventListener('loaded', function () {
      setTimeout(() => {
        title.classList.add('active');
        info.classList.add('active');
        startAutoRotation();
      }, 1500);
    });

    function startAutoRotation() {
      clearInterval(rotationInterval);
      let progress = 0;
      const progressIncrement = 100 / (rotationSpeed / 100);
      rotationInterval = setInterval(() => {
        progress += progressIncrement;
        progressBar.style.width = `${progress}%`;
        if (progress >= 100) {
          progress = 0;
          progressBar.style.width = '0%';
          nextView();
        }
      }, 100);
    }

    let currentAngle = 0;

    function nextView() {
      currentView = (currentView + 1) % 4;
      currentAngle += 90;
      updateView(currentAngle, currentView);
    }

    function updateView(angle, viewIndex) {
      title.classList.remove("active");
      info.classList.remove("active");

      rig.setAttribute("animation", {
        property: "rotation",
        to: `0 ${angle} 0`,
        dur: 1500,
        easing: "easeInOutQuint"
      });

      pointLight.setAttribute("animation", {
        property: "position",
        to: viewData[viewIndex].lightPos,
        dur: 1500,
        easing: "easeInOutQuint"
      });

      setTimeout(() => {
        info.textContent = viewData[viewIndex].name;
        title.classList.add("active");
        info.classList.add("active");
      }, 1200);
    }

    navButton.addEventListener("click", (e) => {
      e.stopPropagation();
      clearInterval(rotationInterval);
      progressBar.style.width = '0%';
      nextView();
      setTimeout(startAutoRotation, 1500);
    });








document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  let currentSlide = 0;

  // Initialize slider
  function initSlider() {
    slides.forEach((slide, index) => {
      if (index === 0) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Create dots if they don't exist
    const dotsContainer = document.querySelector('.slider-dots');
    if (dotsContainer.children.length === 0) {
      slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
      });
    }
  }

  // Go to specific slide
  function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    document.querySelectorAll('.slider-dot')[currentSlide].classList.remove('active');
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    document.querySelectorAll('.slider-dot')[currentSlide].classList.add('active');
  }

  // Next slide
  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  // Previous slide
  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  // Event listeners
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Initialize
  initSlider();

  // Auto-rotate (optional)
  // setInterval(nextSlide, 5000);
});










    
document.addEventListener('DOMContentLoaded', function() {
  // File upload interaction
  const uploadArea = document.getElementById('upload-area');
  const fileInput = document.getElementById('file-upload');
  
  uploadArea.addEventListener('click', () => fileInput.click());
  
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    uploadArea.addEventListener(eventName, preventDefaults, false);
  });
  
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  
  ['dragenter', 'dragover'].forEach(eventName => {
    uploadArea.addEventListener(eventName, highlight, false);
  });
  
  ['dragleave', 'drop'].forEach(eventName => {
    uploadArea.addEventListener(eventName, unhighlight, false);
  });
  
  function highlight() {
    uploadArea.classList.add('highlight');
  }
  
  function unhighlight() {
    uploadArea.classList.remove('highlight');
  }
  
  uploadArea.addEventListener('drop', handleDrop, false);
  
  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    fileInput.files = files;
    // Handle files here
  }
  
  // Form input labels
  const inputs = document.querySelectorAll('.form-input');
  inputs.forEach(input => {
    // Check if input has value on load (for browser autofill)
    if(input.value) {
      input.previousElementSibling.style.top = '-1.2rem';
      input.previousElementSibling.style.fontSize = '0.85rem';
      input.previousElementSibling.style.color = '#d4af37';
      input.nextElementSibling.style.width = '100%';
    }
    
    input.addEventListener('focus', function() {
      this.previousElementSibling.style.top = '-1.2rem';
      this.previousElementSibling.style.fontSize = '0.85rem';
      this.previousElementSibling.style.color = '#d4af37';
      this.nextElementSibling.style.width = '100%';
    });
    
    input.addEventListener('blur', function() {
      if(!this.value) {
        this.previousElementSibling.style.top = '1rem';
        this.previousElementSibling.style.fontSize = '1rem';
        this.previousElementSibling.style.color = '#aaaaaa';
        this.nextElementSibling.style.width = '0';
      }
    });
  });
});

// navbar/
// Hamburger functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});