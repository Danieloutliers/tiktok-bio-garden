
// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Add click tracking if desired
  const linkButtons = document.querySelectorAll('.link-button');
  linkButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const linkName = this.textContent.trim();
      console.log(`Link clicked: ${linkName}`);
      // Here you could add analytics tracking if desired
    });
  });
});
