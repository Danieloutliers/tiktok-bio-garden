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

  // Adiciona manipulador para links secretos
  document.querySelectorAll('[data-secret-link]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Ofuscação do link usando uma técnica simples
      const secretLinks = {
        'sorteio-iphone': Array.from('www.sorteio.com').map(char => 
          String.fromCharCode(char.charCodeAt(0) + 1)
        ).join('')
      };
      
      // Decodifica e redireciona
      const linkId = this.getAttribute('data-secret-link');
      if (linkId && secretLinks[linkId]) {
        const realLink = Array.from(secretLinks[linkId]).map(char => 
          String.fromCharCode(char.charCodeAt(0) - 1)
        ).join('');
        
        // Pequeno atraso para dificultar ainda mais a detecção
        setTimeout(() => {
          window.location.href = 'https://' + realLink;
        }, Math.random() * 100);
      }
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
