const header=document.getElementById('header');
window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',window.scrollY>50);});

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-nav a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });


  const roleSpan = document.querySelector(".role");
  const text = "Software Developer";
  let index = 0;
  let isDeleting = false;
  function typeLoop() {
    if (!isDeleting && index <= text.length) {
      roleSpan.textContent = text.substring(0, index);
      index++;
      setTimeout(typeLoop, 150); // typing speed
    } else if (isDeleting && index >= 0) {
      roleSpan.textContent = text.substring(0, index);
      index--;
      setTimeout(typeLoop, 100); // deleting speed
    } else {
      isDeleting = !isDeleting;
      setTimeout(typeLoop, 800); // pause before typing again
    }
  }
  window.addEventListener("DOMContentLoaded", typeLoop);


    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); 
        document.getElementById("successModal").style.display = "block";
        // Reset form
        this.reset();
    });

  // Close modal on click of close button
  document.querySelector(".close-button").addEventListener("click", function () {
    document.getElementById("successModal").style.display = "none";
  });

  // Close modal on outside click
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("successModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
  
