/**
 * Script for onetimepopup.ejs
 */

document.getElementById("popupAcknowledge")
  .addEventListener("click", () => {
      savePopupSettings();
      ConfigManager.save();
      $("#popupContainer").fadeOut(250);
});

/**
 * Saves all Settings with type cValue
 */

function savePopupSettings() {
    const sEls = document
      .getElementById("popupContainer")
      .querySelectorAll("[cValue]");
    Array.from(sEls).map((v, index, arr) => {
      const cVal = v.getAttribute("cValue");
      const sFn = ConfigManager["set" + cVal];
      if (typeof sFn === "function") {
        if (v.tagName === "INPUT") {
          if (v.type === "checkbox") {
            sFn(v.checked);
          }
        }
        if (v.tagName === "BUTTON") {
            if (v.type === "submit") {
              sFn(true);
            }
          }
      }
    });
  }