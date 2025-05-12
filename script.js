// Brutalist interactions
document.addEventListener('DOMContentLoaded', function() {
  // Deliberately show loading time to emphasize rawness
  document.body.classList.add('loaded');
  
  // Random position for grid markers on refresh
  const gridMarkers = document.querySelectorAll('.grid-marker:not(.horizontal)');
  gridMarkers.forEach(marker => {
    const randomRotation = Math.floor(Math.random() * 90) - 45;
    marker.style.transform = `rotate(${randomRotation}deg)`;
  });
  
  // Expose underlying structure on hover
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    project.addEventListener('mouseover', function() {
      this.style.transform = 'translateX(5px) translateY(-5px)';
      
      // Show coordinates in console - raw browser interaction
      console.log(`Project coordinates: ${this.getBoundingClientRect().x}, ${this.getBoundingClientRect().y}`);
    });
    
    project.addEventListener('mouseout', function() {
      this.style.transform = 'none';
    });
  });
  
  // Form interaction - deliberate visual feedback
  const form = document.getElementById('contact-form');
  if (form) {
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        // Create and append a visual indicator
        const indicator = document.createElement('div');
        indicator.classList.add('focus-indicator');
        indicator.style.width = '10px';
        indicator.style.height = '10px';
        indicator.style.backgroundColor = 'var(--red)';
        indicator.style.position = 'absolute';
        indicator.style.left = '-15px';
        
        this.parentNode.style.position = 'relative';
        this.parentNode.appendChild(indicator);
      });
      
      input.addEventListener('blur', function() {
        // Remove the indicator
        const indicator = this.parentNode.querySelector('.focus-indicator');
        if (indicator) {
          this.parentNode.removeChild(indicator);
        }
      });
    });
    
    // Form submission - prevent default and show raw data
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const formObject = {};
      
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
      
      // Show raw data in console
      console.log('Form submission:', formObject);
      
      // Visual feedback - brutalist style
      const submitFeedback = document.createElement('div');
      submitFeedback.textContent = 'FORM DATA CAPTURED';
      submitFeedback.style.fontFamily = 'monospace';
      submitFeedback.style.padding = '1rem';
      submitFeedback.style.backgroundColor = 'var(--black)';
      submitFeedback.style.color = 'var(--white)';
      submitFeedback.style.marginTop = '1rem';
      
      form.appendChild(submitFeedback);
      
      // Reset form after delay
      setTimeout(() => {
        form.reset();
        form.removeChild(submitFeedback);
      }, 3000);
    });
  }
  
  // Cursor interaction - deliberately showing the grid
  document.body.addEventListener('mousemove', function(e) {
    // Only update every 50px moved to create a grid effect
    if (e.clientX % 50 < 5 && e.clientY % 50 < 5) {
      const cursor = document.createElement('div');
      cursor.classList.add('cursor-dot');
      cursor.style.position = 'fixed';
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursor.style.width = '5px';
      cursor.style.height = '5px';
      cursor.style.backgroundColor = 'var(--black)';
      cursor.style.borderRadius = '0';
      cursor.style.zIndex = '9999';
      
      document.body.appendChild(cursor);
      
      // Remove after animation
      setTimeout(() => {
        document.body.removeChild(cursor);
      }, 500);
    }
  });
  
  // Footer microinteractions
  document.addEventListener('DOMContentLoaded', function() {
    // Animate footer links
    const footerLinks = document.querySelectorAll('.footer-link, .social-link, .meta-link');
    
    footerLinks.forEach(link => {
      link.addEventListener('mouseenter', function() {
        this.style.fontWeight = '900';
      });
      
      link.addEventListener('mouseleave', function() {
        this.style.fontWeight = 'bold';
      });
    });
    
    // Animate the big brand on scroll
    const bigBrand = document.querySelector('.brand-text');
    
    if (bigBrand) {
      window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;
        const scrollPercentage = scrollPos / (documentHeight - windowHeight);
        
        // Slight rotation based on scroll position
        const rotation = scrollPercentage * 2;
        bigBrand.style.transform = `translateY(-5px) rotate(${rotation}deg)`;
      });
    }
    
    // Add interactivity to mail icon
    const mailIcon = document.querySelector('.mail-icon');
    
    if (mailIcon) {
      mailIcon.addEventListener('click', function() {
        this.style.transform = 'rotate(360deg)';
        this.style.transition = 'transform 0.5s ease';
        
        setTimeout(() => {
          this.style.transform = 'none';
        }, 500);
      });
    }
    
    // Grid effect for contact cell
    const contactCell = document.querySelector('.contact-cell');
    
    if (contactCell) {
      contactCell.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Create a grid dot
        if (x % 30 < 2 && y % 30 < 2) {
          const dot = document.createElement('div');
          dot.style.position = 'absolute';
          dot.style.left = `${x}px`;
          dot.style.top = `${y}px`;
          dot.style.width = '2px';
          dot.style.height = '2px';
          dot.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
          dot.style.zIndex = '1';
          
          this.appendChild(dot);
          
          setTimeout(() => {
            dot.style.opacity = '0';
            dot.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
              this.removeChild(dot);
            }, 500);
          }, 300);
        }
      });
    }
  });
}); 