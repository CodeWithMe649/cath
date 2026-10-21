document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('falling-container');
    const surpriseBtn = document.getElementById('surprise-btn');
    const extraMessage = document.getElementById('extra-message');
  
    const symbols = ['🌹', '🌸', '🧸', '💖', '✨', '🌺', '💕'];
  
    // Function to create falling roses and teddy bears
    function createParticle() {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Select random icon
      particle.innerText = symbols[Math.floor(Math.random() * symbols.length)];
      
      // Set random horizontal position and font size
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.fontSize = (Math.random() * 18 + 16) + 'px';
      
      // Set random falling duration (4 to 8 seconds)
      const duration = Math.random() * 4 + 4;
      particle.style.animationDuration = duration + 's';
  
      container.appendChild(particle);
  
      // Remove particle after animation ends to keep DOM clean
      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    }
  
    // Continuously generate particles every 300ms
    setInterval(createParticle, 300);
  
    // Button Click Event: Reveals message & creates burst effect
    surpriseBtn.addEventListener('click', () => {
      // Show extra message
      extraMessage.classList.remove('hidden');
  
      // Burst effect (creates 20 extra roses/hearts instantly)
      for (let i = 0; i < 20; i++) {
        setTimeout(createParticle, i * 50);
      }
    });
  });