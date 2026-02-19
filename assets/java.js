<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RJ SAAD - Frontend Developer Portfolio</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
    color: #fff;
    overflow-x: hidden;
    line-height: 1.6;
  }

  /* Navigation */
  nav {
    position: fixed;
    top: 0; width: 100%;
    background: rgba(0,0,0,0.9);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    transition: all 0.3s ease;
  }
  nav:hover { background: rgba(0,0,0,0.95); }

  .logo {
    font-size: 2rem; font-weight: 700; color: #ff6b6b;
    text-shadow: 0 0 10px rgba(255,107,107,0.5);
    animation: glow 2s ease-in-out infinite alternate;
  }
  @keyframes glow {
    from { text-shadow: 0 0 10px rgba(255,107,107,0.5); }
    to { text-shadow: 0 0 20px rgba(255,107,107,0.8); }
  }

  nav ul {
    list-style: none; display: flex; gap: 2rem;
  }
  nav ul li a {
    color: #fff; text-decoration: none; font-weight: 500; position: relative;
    transition: color 0.3s ease, transform 0.3s ease;
  }
  nav ul li a::after {
    content: ''; position: absolute; width: 0; height: 2px; bottom: -5px; left:0;
    background: #ff6b6b; transition: width 0.3s ease;
  }
  nav ul li a:hover::after { width:100%; }
  nav ul li a:hover { color:#ff6b6b; transform:translateY(-2px); }

  /* Hero Section */
  .hero {
    height:100vh; display:flex; flex-direction:column;
    justify-content:center; align-items:center; text-align:center;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>') no-repeat center center;
    background-size: cover; position:relative;
  }
  .hero::before {
    content:''; position:absolute; top:0; left:0; width:100%; height:100%;
    background: linear-gradient(45deg, rgba(255,107,107,0.1), rgba(0,0,0,0.8));
    z-index:-1;
  }
  .hero h1 {
    font-size:4rem; font-weight:700; margin-bottom:1rem;
    overflow:hidden; white-space:nowrap; border-right:3px solid #ff6b6b;
  }
  .hero h1::after {
    content:'|'; animation: blink 0.7s infinite;
  }
  @keyframes blink { 0%,50%,100%{opacity:1;} 25%,75%{opacity:0;} }

  .hero p { font-size:1.5rem; color:#ccc; margin-bottom:2rem; }
  .hero .btn {
    padding:1rem 2rem;
    background: linear-gradient(45deg,#ff6b6b,#ffa500);
    color:#fff; text-decoration:none; border-radius:50px; font-weight:600;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow:0 4px 15px rgba(255,107,107,0.3);
  }
  .hero .btn:hover { transform:translateY(-5px); box-shadow:0 8px 25px rgba(255,107,107,0.5); }

  section { padding:5rem 2rem; max-width:1200px; margin:0 auto; }
  section h2 { font-size:2.5rem; margin-bottom:2rem; text-align:center; color:#ff6b6b;
    text-shadow:0 0 10px rgba(255,107,107,0.5);
  }

  /* About */
  .about { text-align:center; }
  .about p { font-size:1.2rem; color:#ccc; max-width:800px; margin:0 auto; }

  /* Experience */
  .experience {
    display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:2rem;
  }
  .exp-item {
    background: rgba(255,255,255,0.05); padding:2rem; border-radius:15px;
    backdrop-filter: blur(10px); border:1px solid rgba(255,255,255,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease; cursor:pointer;
  }
  .exp-item:hover { transform:translateY(-10px); box-shadow:0 10px 30px rgba(0,0,0,0.5); }
  .exp-item h3 { font-size:1.5rem; margin-bottom:1rem; color:#ff6b6b; }

  /* Projects */
  .projects {
    display:grid; grid-template-columns:repeat(auto-fit,minmax(350px,1fr)); gap:2rem;
  }
  .project-card {
    background: rgba(255,255,255,0.05); padding:2rem; border-radius:15px;
    backdrop-filter: blur(10px); border:1px solid rgba(255,255,255,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease; cursor:pointer; overflow:hidden; position:relative;
  }
  .project-card::before {
    content:''; position:absolute; top:0; left:-100%; width:100%; height:100%;
    background:linear-gradient(90deg,transparent,rgba(255,107,107,0.2),transparent);
    transition:left 0.5s;
  }
  .project-card:hover::before { left:100%; }
  .project-card:hover { transform:translateY(-10px); box-shadow:0 10px 30px rgba(0,0,0,0.5); }
  .project-card h3 { font-size:1.5rem; margin-bottom:1rem; color:#ff6b6b; }
  .project-card p { color:#ccc; margin-bottom:1rem; }
  .project-card .tech { display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem; }
  .tech span { background:#ff6b6b; color:#fff; padding:0.3rem 0.8rem; border-radius:20px; font-size:0.8rem; }
  .project-card a { color:#ff6b6b; text-decoration:none; font-weight:600; transition:color 0.3s ease; }
  .project-card a:hover { color:#ffa500; }

  /* Contact */
  .contact { text-align:center; }
  .contact form { max-width:600px; margin:0 auto; display:flex; flex-direction:column; gap:1rem; }
  .contact input, .contact textarea {
    padding:1rem; border:none; border-radius:10px; background:rgba(255,255,255,0.1);
    color:#fff; font-family:'Poppins',sans-serif;
  }
  .contact button {
    padding:1rem; background:linear-gradient(45deg,#ff6b6b,#ffa500);
    color:#fff; border:none; border-radius:10px; font-weight:600; cursor:pointer;
    transition: transform 0.3s ease;
  }
  .contact button:hover { transform:translateY(-2px); }

  /* Intersection Observer animations */
  .animate { opacity:1 !important; transform:translateY(0) !important; transition:opacity 0.6s ease, transform 0.6s ease; }

  /* Responsive */
  @media (max-width:768px){
    .hero h1 { font-size:2.5rem; }
    nav ul { flex-direction:column; gap:1rem; }
  }
</style>
</head>
<body>

<nav>
  <div class="logo">RJ</div>
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<section class="hero">
  <h1>RJ SAAD - Frontend Developer</h1>
  <p>Crafting stunning web experiences with modern technologies</p>
  <a href="#projects" class="btn">View My Work</a>
</section>

<section id="about" class="about">
  <h2>About Me</h2>
  <p>I'm RJ SAAD, a passionate frontend developer specializing in creating visually appealing and highly interactive web applications. With a keen eye for design and a love for clean code, I bring ideas to life using cutting-edge technologies.</p>
</section>

<section id="experience" class="experience">
  <h2>Experience</h2>
  <div class="exp-item"><h3>HTML</h3><p>Expert in semantic HTML5, ensuring accessibility and SEO optimization.</p></div>
  <div class="exp-item"><h3>CSS</h3><p>Proficient in advanced CSS techniques including Flexbox, Grid, animations, and responsive design.</p></div>
  <div class="exp-item"><h3>JavaScript</h3><p>Skilled in vanilla JavaScript, DOM manipulation, and modern ES6+ features.</p></div>
  <div class="exp-item"><h3>React JS</h3><p>Experienced in building dynamic user interfaces with React, including hooks, context, and state management.</p></div>
</section>

<section id="projects" class="projects">
  <h2>My Projects</h2>
  <div class="project-card">
    <h3>E-Commerce Platform</h3>
    <p>A full-featured online store with shopping cart and payment integration.</p>
    <div class="tech"><span>React</span><span>Node.js</span><span>MongoDB</span></div>
    <a href="#">View Project</a>
  </div>
  <div class="project-card">
    <h3>Weather App</h3>
    <p>Real-time weather forecasting with location-based services.</p>
    <div class="tech"><span>JavaScript</span><span>API</span><span>CSS</span></div>
    <a href="#">View Project</a>
  </div>
  <div class="project-card">
    <h3>Portfolio Website</h3>
    <p>A responsive portfolio showcasing creative designs and animations.</p>
    <div class="tech"><span>HTML</span><span>CSS</span><span>JS</span></div>
    <a href="#">View Project</a>
  </div>
</section>

<section id="contact" class="contact">
  <h2>Contact Me</h2>
  <form>
    <input type="text" placeholder="Your Name" required>
    <input type="email" placeholder="Your Email" required>
    <textarea placeholder="Your Message" rows="5" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</section>

</body>
<script>
  // Smooth scrolling for nav links
  document.querySelectorAll('nav a').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
    });
  });

  // Typing animation
  const heroText = "RJ SAAD - Frontend Developer";
  let index = 0;
  function typeWriter() {
    if(index < heroText.length){
      document.querySelector('.hero h1').textContent = heroText.substring(0,index+1);
      index++;
      setTimeout(typeWriter,100);
    }
  }
  window.addEventListener('load', typeWriter);

  // IntersectionObserver animations
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('animate');
      }
    });
  }, {threshold:0.1});

  document.querySelectorAll('.exp-item, .project-card').forEach(item=>{
    item.style.opacity='0';
    item.style.transform='translateY(20px)';
    observer.observe(item);
  });
</script>
</html>
