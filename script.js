document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded");
  
    const revealSections = document.querySelectorAll("section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
  
    revealSections.forEach((section) => observer.observe(section));
  });
  
// Slide-in animation on scroll
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".timeline-card");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, {
        threshold: 0.2
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
});

document.querySelectorAll('.experience-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element
        // 
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = -(y - centerY) / 20;
        const rotateY = (x - centerX) / 20;
        
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.55)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0) rotateY(0) scale(2)';
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = '0s';
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
  });
  
  
  