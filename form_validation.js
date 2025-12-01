document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector(".booking-form form");
  var fieldIds = ["name","email","phone","date","time","service"];
  var successMessage = document.getElementById("success-message");

  function showError(inputId, message) {
    var errorEl = document.getElementById(inputId + "-error");
    if (errorEl) errorEl.textContent = message;
  }

  function clearError(inputId) {
    var errorEl = document.getElementById(inputId + "-error");
    if (errorEl) errorEl.textContent = "";
  }

  function validateField(inputId) {
    var field = document.getElementById(inputId);
    if (!field) return;
    var value = field.value.trim();

    if (inputId === "name" && value === "") showError(inputId, "Full Name is required.");
    else if (inputId === "email" && !/^\S+@\S+\.\S+$/.test(value)) showError(inputId, "Valid Email Address is required.");
    else if (inputId === "phone" && value.length < 8) showError(inputId, "Valid Phone Number is required.");
    else if ((inputId === "date" || inputId === "time" || inputId === "service") && value === "") showError(inputId, "This field is required.");
    else clearError(inputId);
  }

  // Live validation
  for (var i = 0; i < fieldIds.length; i++) {
    var id = fieldIds[i];
    var field = document.getElementById(id);
    if (field) {
      field.addEventListener("input", function(e) { validateField(e.target.id); });
      field.addEventListener("change", function(e) { validateField(e.target.id); });
    }
  }

  // Final check on submit
  form.addEventListener("submit", function(event) {
    var valid = true;
    for (var i = 0; i < fieldIds.length; i++) {
      var id = fieldIds[i];
      validateField(id);
      var errorEl = document.getElementById(id + "-error");
      if (errorEl && errorEl.textContent !== "") valid = false;
    }

    if (!valid) {
      event.preventDefault();
      successMessage.style.display = "none"; // hide success if errors
    } else {
      successMessage.style.display = "block"; // show success message
    }
  });
});