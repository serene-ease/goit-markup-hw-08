(() => {
  const refs = {
    openMobileMenuBtn: document.querySelector(".call"),
    closeMobileMenuBtn: document.querySelector(".close"),
    modal: document.querySelector(".menu__mobile"),
  };

  refs.openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
  refs.closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);

  function toggleModal() {
    refs.MobileMenu.classList.toggle("is-hidden");
  }
})();
