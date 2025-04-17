
// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
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

  // Tab switching
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      
      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      document.getElementById(`${tabId}-content`).classList.add('active');
    });
  });
});
