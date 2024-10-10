// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  const words = ["Software Engineer", "Problem Solver", "Tech Enthusiast", "Innovator"];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 150; // Speed of typing
  const delayBetweenWords = 2000; // Delay before starting to delete
  
  function typeWords() {
    const textElement = document.getElementById("changing-text");
    const currentWord = words[index];
  
    if (isDeleting) {
      // Deleting characters
      textElement.textContent = currentWord.substring(0, charIndex);
      charIndex--;
  
      if (charIndex < 0) {
        isDeleting = false;
        index = (index + 1) % words.length; // Move to the next word
        setTimeout(typeWords, 500); // Pause before typing the next word
      } else {
        setTimeout(typeWords, speed);
      }
    } else {
      // Typing characters
      textElement.textContent = currentWord.substring(0, charIndex);
      charIndex++;
  
      if (charIndex > currentWord.length) {
        isDeleting = true;
        setTimeout(typeWords, delayBetweenWords); // Pause before deleting
      } else {
        setTimeout(typeWords, speed);
      }
    }
  }
  
  // Start the typing effect
  typeWords();
  
  