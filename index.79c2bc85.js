(()=>{const e={mobileMenuBtn:document.querySelector("[data-mobile-menu-button]"),mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuList:document.querySelector("[data-mobile-menu-list]"),buyBtn:document.querySelector("[data-buy-button]"),mobileBuyBtn:document.querySelector("[data-mobile-menu-buy]")};e.mobileMenuBtn.addEventListener("click",(()=>{const t="true"===e.mobileMenuBtn.getAttribute("aria-expanded")||!1;e.mobileMenuBtn.setAttribute("aria-expanded",!t),e.mobileMenuBtn.classList.toggle("is-open"),e.mobileMenu.classList.toggle("is-open"),e.mobileMenu.classList.contains("is-open")&&e.mobileMenu.scrollTo(top),e.buyBtn.classList.toggle("disabled")})),e.mobileMenuList.addEventListener("click",(()=>{const t="true"===e.mobileMenuBtn.getAttribute("aria-expanded")||!1;e.mobileMenuBtn.setAttribute("aria-expanded",!t),e.mobileMenuBtn.classList.toggle("is-open"),e.mobileMenu.classList.toggle("is-open"),e.buyBtn.classList.toggle("disabled")})),e.mobileBuyBtn.addEventListener("click",(()=>{const t="true"===e.mobileMenuBtn.getAttribute("aria-expanded")||!1;e.mobileMenuBtn.setAttribute("aria-expanded",!t),e.mobileMenuBtn.classList.toggle("is-open"),e.mobileMenu.classList.toggle("is-open"),e.buyBtn.classList.toggle("disabled")}))})();
//# sourceMappingURL=index.79c2bc85.js.map
