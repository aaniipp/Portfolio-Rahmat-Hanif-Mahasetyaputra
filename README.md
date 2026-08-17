# Rahmat Hanif Mahasetyaputra - Personal Portfolio

A modernized, responsive, and elegant personal portfolio website built with HTML, Tailwind CSS, and Vanilla JS. The latest updates introduce a premium glassmorphism aesthetic, a unique Mac-like floating dock, improved component architecture, and the addition of new professional milestones.

## 🌟 Key Updates & Features

- **Modern Glassmorphism & Tailwind CSS**: Upgraded the entire site to a clean, light-themed aesthetic using Tailwind CSS utility classes. It features frosted glassmorphism effects, a refined indigo/violet gradient palette, and seamless scroll animations.
- **Mac-like Floating Dock**: Replaced the traditional navbar with an elegant, responsive floating dock at the bottom of the screen. It features hover micro-animations and quick access to sections, email, and social links.
- **Updated Professional Roles**: Added experience as an **SAP ABAP Consultant Intern** at **Abeam Consulting Indonesia** and Business Analyst at **PT. Cipta Integrasi Nusantara**.
- **Redesigned Sections**:
  - **Unified Headers**: Consistent pill-badge styling for all major section headers (Education, Portfolio, Profile, Contact).
  - **Profile & Skills**: Clean tag-chip system, color-coded and organized by proficiency (Expert to Beginner).
  - **Get In Touch (Contact)**: A brand new split-layout contact section featuring direct email, LinkedIn, and CV links alongside a modern UI form.
  - **Education & Projects**: Polished layouts matching the overall aesthetic.
- **Mobile Responsive Excellence**: Thoroughly optimized padding, grid structures, and typography (including long word-breaks) to ensure the portfolio looks spectacular on smartphones and tablets.

## 🚀 How to Run Locally

You can easily preview this website on your local machine using Node.js without needing any complex build steps.

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Open your terminal in this repository folder.
3. Run the following command:
   ```bash
   npx serve . -p 3000
   ```
4. Open your browser and navigate to `http://localhost:3000`. The site will also be available on your local network, allowing you to test it directly on your mobile phone using your computer's local IP address.

## 📂 Structural Overview

- `index.html`: Contains all of the content, structured logically with Tailwind CSS classes for rapid UI styling.
- `style.css`: Contains custom styling for elements that require complex animations (like the floating dock border beam) or pseudo-elements not easily handled by Tailwind alone.
- `script.js`: Handles scroll animations, typing effects, active state tracking for the floating dock, and other interactive elements.
- `assets/`: Contains project previews and profile images. 

## 🛠️ Technologies Used
- HTML5 (Semantic Structure)
- Tailwind CSS (Rapid UI Development & Responsiveness)
- Vanilla JavaScript (DOM manipulation, Event Listeners)

*Deploy easily to GitHub Pages, Netlify, or Vercel by hosting the root directory.*