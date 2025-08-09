// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.background = "#fff"
    header.style.backdropFilter = "none"
  }
})

// WhatsApp chat widget functionality
function toggleChat() {
  const chatPopup = document.getElementById("chatPopup")
  chatPopup.classList.toggle("active")
}

// Close chat when clicking outside
document.addEventListener("click", (event) => {
  const chatWidget = document.querySelector(".whatsapp-chat")
  const chatPopup = document.getElementById("chatPopup")

  if (!chatWidget.contains(event.target) && chatPopup.classList.contains("active")) {
    chatPopup.classList.remove("active")
  }
})

// Animate elements on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".feature, .plan, .contact-item, .certificate-item")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".feature, .plan, .contact-item, .certificate-item")
  elements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  })
})

window.addEventListener("scroll", animateOnScroll)

// Form validation and interaction enhancements
document.addEventListener("DOMContentLoaded", () => {
  // Add hover effects to buttons
  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      if (!this.style.transform.includes("translateY")) {
        this.style.transform = "translateY(-2px)"
      }
    })

    button.addEventListener("mouseleave", function () {
      if (this.style.transform.includes("translateY(-2px)")) {
        this.style.transform = "translateY(0)"
      }
    })
  })

  // Add click tracking for analytics
  const telegramLinks = document.querySelectorAll('a[href*="t.me"]')
  telegramLinks.forEach((link) => {
    link.addEventListener("click", () => {
      console.log("Telegram registration link clicked")
      // Add your analytics tracking code here
    })
  })

  const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]')
  whatsappLinks.forEach((link) => {
    link.addEventListener("click", () => {
      console.log("WhatsApp chat initiated")
      // Add your analytics tracking code here
    })
  })
})

// Plan selection highlighting
document.addEventListener("DOMContentLoaded", () => {
  const plans = document.querySelectorAll(".plan")
  plans.forEach((plan) => {
    plan.addEventListener("mouseenter", function () {
      this.style.borderColor = "#1e40af"
    })

    plan.addEventListener("mouseleave", function () {
      if (!this.classList.contains("featured") && !this.classList.contains("premium")) {
        this.style.borderColor = "#e9ecef"
      }
    })
  })
})

// Intersection Observer for better performance
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".feature, .plan, .contact-item, .certificate-item")
    elements.forEach((element) => {
      observer.observe(element)
    })
  })
}

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})
