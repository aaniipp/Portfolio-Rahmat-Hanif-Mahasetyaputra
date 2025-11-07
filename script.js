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
  
  function updateActiveNav() {
    // Don't update if modal is open
    const modal = document.getElementById('projectModal');
    if (modal && modal.classList.contains('show')) {
      return;
    }
    
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }
  
  window.addEventListener("scroll", updateActiveNav);
  
  // Also update when modal is closed
  document.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (modal && !modal.classList.contains('show') &&
        (e.target.classList.contains('close-btn') || e.target === modal)) {
      setTimeout(updateActiveNav, 100);
    }
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
  initCertificateButtons();
});

// Enhanced Project Modal Functions with Mobile Support
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
  
  // Store scroll position before preventing scroll
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  document.body.style.setProperty('--scroll-position', scrollY + 'px');
  
  // Prevent body scroll consistently across all devices
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.overflow = 'hidden';
  
  // Force projects nav link to stay active when modal opens
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#projects") {
      link.classList.add("active");
    }
  });
  
  // Add mobile-specific touch handling
  initModalTouchHandling();
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  
  // Get stored scroll position
  const scrollY = document.body.style.getPropertyValue('--scroll-position');
  
  modal.classList.add('hidden');
  modal.classList.remove('show');
  
  // Restore body scroll properly for all devices
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.style.top = '';
  document.body.style.overflow = '';
  document.body.style.removeProperty('--scroll-position');
  
  // Restore scroll position instantly without any animation
  if (scrollY) {
    const scrollPosition = parseInt(scrollY || '0');
    // Disable smooth scrolling temporarily
    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Instant scroll to original position
    window.scrollTo(0, scrollPosition);
    
    // Restore original scroll behavior after a brief delay
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = originalScrollBehavior || '';
    }, 10);
  }
}

// Touch handling for mobile modal
function initModalTouchHandling() {
  const modal = document.getElementById('projectModal');
  const modalContent = modal.querySelector('.modal-content');
  let startY = 0;
  let currentY = 0;
  let isDragging = false;
  
  // Touch start
  modalContent.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      startY = e.touches[0].clientY;
      isDragging = true;
      modalContent.style.transition = 'none';
    }
  }, { passive: true });
  
  // Touch move
  modalContent.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length === 1) {
      currentY = e.touches[0].clientY;
      const deltaY = currentY - startY;
      
      // Only allow downward drag
      if (deltaY > 0) {
        e.preventDefault();
        const opacity = Math.max(0.7, 1 - (deltaY / window.innerHeight));
        const scale = Math.max(0.9, 1 - (deltaY / (window.innerHeight * 2)));
        
        modalContent.style.transform = `translateY(${deltaY}px) scale(${scale})`;
        modal.style.backgroundColor = `rgba(0, 0, 0, ${0.6 * opacity})`;
      }
    }
  }, { passive: false });
  
  // Touch end
  modalContent.addEventListener('touchend', (e) => {
    if (isDragging) {
      isDragging = false;
      modalContent.style.transition = 'all 0.3s ease';
      
      const deltaY = currentY - startY;
      const threshold = window.innerHeight * 0.3;
      
      if (deltaY > threshold) {
        // Close modal if dragged down enough
        closeProjectModal();
      } else {
        // Reset position
        modalContent.style.transform = '';
        modal.style.backgroundColor = '';
      }
    }
  }, { passive: true });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

// Close modal when clicking outside
document.addEventListener('click', (e) => {
  const modal = document.getElementById('projectModal');
  if (modal.classList.contains('show') && e.target === modal) {
    closeProjectModal();
  }
});

// Prevent modal content from dragging on desktop
document.addEventListener('mousedown', (e) => {
  const modal = document.getElementById('projectModal');
  const modalContent = modal.querySelector('.modal-content');
  
  if (modal.classList.contains('show') && modalContent.contains(e.target)) {
    e.preventDefault();
  }
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Glass Morphism Mobile menu functionality
function initMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!mobileToggle || !navLinks) return;
  
  // Toggle menu with glass morphism animations
  function toggleMenu(open) {
    if (open) {
      mobileToggle.classList.add('active');
      navLinks.classList.add('active');
      document.body.classList.add('menu-open');
      
      // Add stagger animation to nav links
      const links = navLinks.querySelectorAll('.nav-link');
      links.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.05}s`;
      });
    } else {
      mobileToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  }
  
  // Simple hamburger click - toggle menu
  mobileToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const isOpen = navLinks.classList.contains('active');
    
    // Add click effect
    mobileToggle.style.transform = 'scale(0.95)';
    setTimeout(() => {
      mobileToggle.style.transform = '';
    }, 150);
    
    toggleMenu(!isOpen);
  });
  
  // Enhanced link interactions
  const links = navLinks.querySelectorAll('.nav-link');
  links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      // Add click animation
      link.style.transform = 'scale(0.95)';
      setTimeout(() => {
        link.style.transform = '';
      }, 150);
      
      // Close menu immediately
      toggleMenu(false);
      
      // Navigate to section
      if (targetSection) {
        setTimeout(() => {
          const offsetTop = targetSection.offsetTop - 100;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }, 200);
      }
    });
  });
  
  // Close menu when clicking overlay (area below header)
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active')) {
      // Check if click is on the overlay area (below header)
      if (e.clientY > 70 && !navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        toggleMenu(false);
      }
      // Check if click is outside the menu area
      else if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
        toggleMenu(false);
      }
    }
  });
  
  // Enhanced keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      toggleMenu(false);
      mobileToggle.focus();
    }
    
    // Arrow key navigation in menu
    if (navLinks.classList.contains('active') && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      e.preventDefault();
      const currentFocus = document.activeElement;
      const focusableLinks = Array.from(links);
      const currentIndex = focusableLinks.indexOf(currentFocus);
      
      let nextIndex;
      if (e.key === 'ArrowDown') {
        nextIndex = (currentIndex + 1) % focusableLinks.length;
      } else {
        nextIndex = currentIndex - 1 < 0 ? focusableLinks.length - 1 : currentIndex - 1;
      }
      
      focusableLinks[nextIndex].focus();
    }
  });
  
  // Add touch gestures for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    // Swipe right to open menu
    if (diff < -swipeThreshold && touchStartX < 50) {
      if (!navLinks.classList.contains('active')) {
        toggleMenu(true);
      }
    }
    
    // Swipe left to close menu
    if (diff > swipeThreshold && navLinks.classList.contains('active')) {
      toggleMenu(false);
    }
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
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const onclickAttr = this.getAttribute('onclick');
      if (onclickAttr) {
        const urlMatch = onclickAttr.match(/window\.open\(['"]([^'"]+)['"]/);
        if (urlMatch && urlMatch[1]) {
          window.open(urlMatch[1], '_blank');
        }
      }
    });
  });
}
