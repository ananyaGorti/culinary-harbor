document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector("#bar"),t=document.querySelector(".navbar"),n=window.location.pathname.split("/").pop();e.onclick=(()=>{e.classList.toggle("fa-times"),t.classList.toggle("active")}),document.querySelectorAll(".navbar a").forEach(e=>{let t=e.getAttribute("href").split("/").pop();t===n&&"index.html"!==t&&e.classList.add("active")})}),document.addEventListener("DOMContentLoaded",function(){document.getElementById("jobApplicationForm").addEventListener("submit",function(e){e.preventDefault(),function(){var e=document.getElementById("fullName").value.trim(),t=document.getElementById("email").value.trim(),n=document.getElementById("dob").value.trim();document.getElementById("address").value.trim();if(""===e)return alert("Please enter your full name."),!1;if(""===t||!function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}(t))return alert("Please enter a valid email address."),!1;var o=new Date(n),a=new Date;if(a.setFullYear(a.getFullYear()-18),o>a)return alert("You must be at least 18 years old."),!1;return!0}()&&(window.location.href="thankyou.html")})});var swiper=new Swiper(".home-slider",{spaceBetween:30,centeredSlides:!0,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},loop:!0});swiper=new Swiper(".review-slider",{spaceBetween:20,centeredSlides:!0,autoplay:{delay:0,disableOnInteraction:!1},loop:!0,speed:7e3,breakpoints:{0:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}});function loader(){document.querySelector(".loader-container").classList.add("fade-out")}function fadeOut(){document.addEventListener("DOMContentLoaded",function(){loader()})}document.addEventListener("DOMContentLoaded",function(){document.getElementById("btnScrollToTop").addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})}),document.addEventListener("DOMContentLoaded",function(){document.getElementById("up-icon").addEventListener("click2",function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})}),window.onload=fadeOut(),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector("#bar"),t=document.querySelector(".navbar"),n=document.getElementById("btnScrollToTop"),o=document.getElementById("up-icon");e&&e.addEventListener("click",()=>{e.classList.toggle("fa-times"),t.classList.toggle("active")}),n&&n.addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),o&&o.addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"})});let a=window.location.pathname.split("/").pop();document.querySelectorAll(".navbar a").forEach(e=>{let t=e.getAttribute("href").split("/").pop();t===a&&"index.html"!==t&&e.classList.add("active")});var l=document.getElementById("jobApplicationForm");l&&l.addEventListener("submit",function(e){e.preventDefault(),function(){var e=document.getElementById("fullName").value.trim(),t=document.getElementById("email").value.trim(),n=document.getElementById("dob").value.trim();if(""===e)return alert("Please enter your full name."),!1;if(""===t||!function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}(t))return alert("Please enter a valid email address."),!1;var o=new Date(n),a=new Date;if(a.setFullYear(a.getFullYear()-18),o>a)return alert("You must be at least 18 years old."),!1;return!0}()&&(window.location.href="thankyou.html")})});swiper=new Swiper(".home-slider",{spaceBetween:30,centeredSlides:!0,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},loop:!0}),swiper=new Swiper(".review-slider",{spaceBetween:20,centeredSlides:!0,autoplay:{delay:0,disableOnInteraction:!1},loop:!0,speed:7e3,breakpoints:{0:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}});function loader(){document.querySelector(".loader-container").classList.add("fade-out")}function fadeOut(){document.addEventListener("DOMContentLoaded",function(){loader()})}document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("btnScrollToTop");e&&e.addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})}),document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("up-icon");e&&e.addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})}),window.onload=fadeOut();