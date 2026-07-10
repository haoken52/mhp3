const header = document.querySelector("[data-header]");
const facilityButtons = document.querySelectorAll(".plan");
const facilityView = document.querySelector("[data-plan-view]");
const layoutButtons = document.querySelectorAll(".layout-thumb");
const layoutView = document.querySelector("[data-layout-view]");
const siteplanView = document.querySelector("[data-siteplan-view]");
const leadForm = document.querySelector("[data-lead-form]");
const facilityLists = document.querySelectorAll("[data-facility-list]");
const facilityPlans = {
  g: "assets/facility-level-g.jpg",
  8: "assets/facility-level-8.jpg",
  9: "assets/facility-level-9.jpg",
};

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

function swapImage(buttons, target) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      target.src = button.dataset.image;
    });
  });
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (facilityView) {
  facilityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const level = button.dataset.facilityTab;
      facilityButtons.forEach((item) => item.classList.remove("active"));
      facilityLists.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      facilityView.src = facilityPlans[level];
      document.querySelector(`[data-facility-list="${level}"]`)?.classList.add("active");
    });
  });
}

if (layoutView) {
  layoutButtons.forEach((button) => {
    button.addEventListener("click", () => {
      layoutButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      layoutView.src = button.dataset.floorplan;
      siteplanView.src = button.dataset.siteplan;
    });
  });
}

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(leadForm);
    const message = [
      "Hi Nathan, I am interested in Platinum Melati Residences.",
      "",
      `Name: ${formData.get("name") || "-"}`,
      `Contact: ${formData.get("phone") || "-"}`,
      `Email: ${formData.get("email") || "-"}`,
      `Interested layout: ${formData.get("layout") || "-"}`,
      `Message: ${formData.get("message") || "-"}`,
    ].join("\n");

    window.open(`https://wa.me/60182318131?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
}
