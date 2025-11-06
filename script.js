// Interactive Portfolio Website Script

// Initialize particles
function createParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles-container';
  document.body.appendChild(particlesContainer);

  // Create multiple particles
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size
    const size = Math.random() * 60 + 20;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    
    // Random animation delay
    particle.style.animationDelay = Math.random() * 20 + 's';
    
    // Random animation duration
    particle.style.animationDuration = (Math.random() * 20 + 20) + 's';
    
    particlesContainer.appendChild(particle);
  }
}

// Create geometric shapes
function createGeometricShapes() {
  const shapes = ['triangle', 'square', 'hexagon', 'circle'];
  
  for (let i = 0; i < 8; i++) {
    const shape = document.createElement('div');
    shape.className = 'geometric-shape';
    
    // Random shape type
    const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
    
    // Random size
    const size = Math.random() * 100 + 50;
    shape.style.width = size + 'px';
    shape.style.height = size + 'px';
    
    // Random position
    shape.style.left = Math.random() * 100 + '%';
    shape.style.top = Math.random() * 100 + '%';
    
    // Random animation delay
    shape.style.animationDelay = Math.random() * 25 + 's';
    
    // Create shape based on type
    switch(shapeType) {
      case 'triangle':
        shape.style.background = 'transparent';
        shape.style.borderLeft = `${size/2}px solid transparent`;
        shape.style.borderRight = `${size/2}px solid transparent`;
        shape.style.borderBottom = `${size}px solid rgba(255,255,255,0.1)`;
        break;
      case 'square':
        shape.style.background = 'rgba(255,255,255,0.1)';
        shape.style.borderRadius = '10px';
        shape.style.transform = `rotate(${Math.random() * 45}deg)`;
        break;
      case 'hexagon':
        shape.style.background = 'rgba(255,255,255,0.1)';
        shape.style.clipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
        break;
      case 'circle':
        shape.style.background = 'rgba(255,255,255,0.1)';
        shape.style.borderRadius = '50%';
        break;
    }
    
    document.body.appendChild(shape);
  }
}

// Mouse follower effect
function createMouseFollower() {
  const follower = document.createElement('div');
  follower.className = 'mouse-follower';
  document.body.appendChild(follower);

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateFollower() {
    const dx = mouseX - followerX;
    const dy = mouseY - followerY;
    
    followerX += dx * 0.1;
    followerY += dy * 0.1;
    
    follower.style.left = followerX - 10 + 'px';
    follower.style.top = followerY - 10 + 'px';
    
    requestAnimationFrame(animateFollower);
  }
  
  animateFollower();
}

// Smooth scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        
        // Animate enhanced skill bars
        if (entry.target.classList.contains('enhanced-skill-card')) {
          const fill = entry.target.querySelector('.fill');
          if (fill) {
            const width = fill.getAttribute('data-width') || '0%';
            // Set CSS variable for animation
            fill.style.setProperty('--target-width', width);
            
            // Trigger animation with delay
            setTimeout(() => {
              fill.style.width = width;
              
              // Add pulse effect to percentage
              const percentage = entry.target.querySelector('.skill-percentage');
              if (percentage) {
                percentage.style.animation = 'none';
                setTimeout(() => {
                  percentage.style.animation = 'fadeInScale 0.5s ease forwards';
                }, 100);
              }
            }, 300);
          }
        }
        
        // Legacy skill card support
        if (entry.target.classList.contains('skill-card') && !entry.target.classList.contains('enhanced-skill-card')) {
          const fill = entry.target.querySelector('.fill');
          if (fill) {
            const width = fill.getAttribute('data-width') || '0%';
            setTimeout(() => {
              fill.style.width = width;
            }, 200);
          }
        }
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  // Observe timeline items
  document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
  });

  // Observe skill categories cards
  document.querySelectorAll('.skills-categories-grid .enhanced-skill-card').forEach(card => {
    observer.observe(card);
  });

  // Observe enhanced skill cards
  document.querySelectorAll('.enhanced-skill-card').forEach(card => {
    observer.observe(card);
  });
  
  // Observe legacy skill cards for backward compatibility
  document.querySelectorAll('.skill-card:not(.enhanced-skill-card)').forEach(card => {
    observer.observe(card);
  });

  // Observe project cards
  document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
  });

  // Observe enhanced project cards
  document.querySelectorAll('.enhanced-project-card').forEach(card => {
    observer.observe(card);
  });
}

// Parallax scrolling effect
function initParallax() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.geometric-shape, .particle');
    
    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + (index * 0.1);
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// Enhanced 3D card effect on mouse move
function init3DCardEffects() {
  const cards = document.querySelectorAll('.project-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
}

// Highlight active navigation link on scroll
function initActiveNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// Enhanced typing effect for role text
function initTypingEffect() {
  const typedTextElement = document.getElementById('typedText');
  if (typedTextElement) {
    const roles = [
      'Business Analyst & IT Consultant',
      'SAP Certified Associate',
      'UI/UX Designer',
      'Problem Solver',
      'Innovation Driver'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeRole() {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before next role
      }
      
      setTimeout(typeRole, typingSpeed);
    }
    
    // Start typing after initial delay
    setTimeout(typeRole, 1500);
  }
  
  // Legacy hero text support
  const heroText = document.querySelector('.highlight');
  if (heroText && !document.getElementById('typedText')) {
    const text = heroText.textContent;
    heroText.textContent = '';
    let index = 0;
    
    function type() {
      if (index < text.length) {
        heroText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }
    
    setTimeout(type, 1000);
  }
}

// Smooth scroll for navigation links
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Parallax effect for hero section
function initHeroParallax() {
  const heroSection = document.querySelector('#home');
  const floatingShapes = document.querySelectorAll('.floating-shape');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (heroSection) {
      heroSection.style.transform = `translateY(${rate}px)`;
    }
    
    floatingShapes.forEach((shape, index) => {
      const speed = 0.5 + (index * 0.1);
      shape.style.transform = `translate(${scrolled * speed}px, ${scrolled * speed * 0.5}px)`;
    });
  });
}

// Enhanced scroll animations
function initEnhancedScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        
        // Stagger animation for multiple elements
        const children = entry.target.querySelectorAll('.animate-stagger');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add('animate');
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  // Observe elements with scroll animations
  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });
}

// Add magnetic effect to buttons
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.home-text a');
  
  buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0, 0) scale(1)';
    });
  });
}

// Enhanced Skill Card Interactions
function initSkillCardInteractions() {
  const skillCards = document.querySelectorAll('.enhanced-skill-card');
  
  skillCards.forEach(card => {
    // Add 3D tilt effect on mouse move
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
      
      // Dynamic shadow based on mouse position
      const shadowX = (centerX - x) / 20;
      const shadowY = (y - centerY) / 20;
      card.style.boxShadow = `
        ${shadowX}px ${shadowY}px 30px rgba(0,0,0,0.15),
        0 10px 30px rgba(0,0,0,0.1),
        inset 0 1px 0 rgba(255,255,255,0.8)
      `;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
      card.style.boxShadow = `
        0 10px 40px rgba(0,0,0,0.1),
        0 2px 10px rgba(0,0,0,0.05),
        inset 0 1px 0 rgba(255,255,255,0.6)
      `;
    });
    
    // Add click ripple effect
    card.addEventListener('click', (e) => {
      const ripple = document.createElement('div');
      const rect = card.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
        z-index: 10;
      `;
      
      card.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
    
    // Add progress bar hover effect
    const skillBar = card.querySelector('.skill-bar');
    if (skillBar) {
      skillBar.addEventListener('mouseenter', () => {
        const fill = skillBar.querySelector('.fill');
        if (fill) {
          fill.style.filter = 'brightness(1.1)';
          fill.style.transform = 'scaleY(1.2)';
        }
      });
      
      skillBar.addEventListener('mouseleave', () => {
        const fill = skillBar.querySelector('.fill');
        if (fill) {
          fill.style.filter = 'brightness(1)';
          fill.style.transform = 'scaleY(1)';
        }
      });
    }
  });
}

// Add ripple effect animation
const style = document.createElement('style');
style.textContent = `
  @keyframes rippleEffect {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  createGeometricShapes();
  createMouseFollower();
  initScrollAnimations();
  initParallax();
  init3DCardEffects();
  initActiveNavHighlight();
  initTypingEffect();
  initSkillCardInteractions();
  initMobileMenu();
  initHeaderScroll();
});

// Project Modal Functions
function openProjectModal(title, description, techStack, link, image) {
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalImage = document.getElementById('modalImage');
  const modalTechStack = document.getElementById('modalTechStack');
  const modalLink = document.getElementById('modalLink');
  
  modalTitle.textContent = title;
  modalDesc.textContent = description;
  modalImage.src = image;
  modalImage.alt = title;
  modalLink.href = link;
  
  // Clear and populate tech stack
  modalTechStack.innerHTML = '';
  techStack.forEach(tech => {
    const techSpan = document.createElement('span');
    techSpan.className = 'px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold rounded-full';
    techSpan.textContent = tech;
    modalTechStack.appendChild(techSpan);
  });
  
  modal.classList.remove('hidden');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.add('hidden');
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Mobile menu functionality
function initMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }
}

// Header scroll effect
function initHeaderScroll() {
  const header = document.querySelector('header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (header) {
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    lastScroll = currentScroll;
  });
}

// Certificate Button Functionality
function initCertificateButtons() {
  const certButtons = document.querySelectorAll('.cert-button');
  
  certButtons.forEach(button => {
    // Remove any existing event listeners
    button.replaceWith(button.cloneNode(true));
    const newButton = document.querySelector(`.cert-button:nth-child(${Array.from(certButtons).indexOf(button) + 1})`);
    
    // Add click event listener
    newButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Get the URL from onclick attribute or data attribute
      const onclickAttr = this.getAttribute('onclick');
      if (onclickAttr) {
        // Extract URL from onclick attribute
        const urlMatch = onclickAttr.match(/window\.open\(['"]([^'"]+)['"]/);
        if (urlMatch && urlMatch[1]) {
          window.open(urlMatch[1], '_blank');
        }
      }
    });
    
    // Add hover effects
    newButton.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.05)';
      this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
    });
    
    newButton.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    });
    
    // Add active effect
    newButton.addEventListener('mousedown', function() {
      this.style.transform = 'translateY(0) scale(0.95)';
    });
    
    newButton.addEventListener('mouseup', function() {
      this.style.transform = 'translateY(-2px) scale(1.05)';
    });
  });
}

// Enhanced certificate button initialization
function enhanceCertificateButtons() {
  const certButtons = document.querySelectorAll('.cert-button');
  
  certButtons.forEach((button, index) => {
    // Ensure button is clickable
    button.style.pointerEvents = 'auto';
    button.style.cursor = 'pointer';
    button.style.position = 'relative';
    button.style.zIndex = '10';
    
    // Add visual feedback
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Create ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: certRipple 0.6s ease-out;
        pointer-events: none;
        z-index: 1000;
      `;
      
      this.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 600);
      
      // Execute the original click behavior
      const onclickAttr = this.getAttribute('onclick');
      if (onclickAttr) {
        try {
          // Extract and execute the URL opening
          const urlMatch = onclickAttr.match(/window\.open\(['"]([^'"]+)['"]/);
          if (urlMatch && urlMatch[1]) {
            window.open(urlMatch[1], '_blank');
          }
        } catch (error) {
          console.log('Certificate button click error:', error);
        }
      }
    });
  });
}

// Add certificate ripple animation
const certStyle = document.createElement('style');
certStyle.textContent = `
  @keyframes certRipple {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  .cert-button {
    pointer-events: auto !important;
    cursor: pointer !important;
    position: relative !important;
    z-index: 10 !important;
  }
  
  .cert-button:hover {
    transform: translateY(-2px) scale(1.05) !important;
    box-shadow: 0 8px 25px rgba(0,0,0,0.2) !important;
  }
  
  .cert-button:active {
    transform: translateY(0) scale(0.95) !important;
  }
`;
document.head.appendChild(certStyle);

// Initialize certificate buttons when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Existing initialization code...
  createParticles();
  createGeometricShapes();
  createMouseFollower();
  initScrollAnimations();
  initParallax();
  init3DCardEffects();
  initActiveNavHighlight();
  initTypingEffect();
  initSkillCardInteractions();
  initMobileMenu();
  initHeaderScroll();
  
  // Initialize certificate buttons
  initCertificateButtons();
  enhanceCertificateButtons();
});

// Re-initialize certificate buttons after dynamic content changes
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  enhanceCertificateButtons();
});

// Also initialize on window resize to ensure buttons remain clickable
window.addEventListener('resize', () => {
  setTimeout(() => {
    enhanceCertificateButtons();
  }, 100);
});
