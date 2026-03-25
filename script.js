document.addEventListener('DOMContentLoaded', () => {
  
  // Example: container for schedules tab
  const schedulesContainer = document.getElementById('schedules');

  // Example: Generic function to render sections
  function renderSection(container, items) {
    container.innerHTML = ''; // clear previous content
    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'section';
      div.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.date || ''} ${item.time || ''}</p>
        <p>${item.location || ''}</p>
        <p>${item.notes || ''}</p>
      `;
      container.appendChild(div);
    });
  }

  // Example: fetch function
  async function fetchData(url) {
    try {
      // show loading state here if needed
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      schedulesContainer.innerHTML = '<p>Failed to load data.</p>';
      return null;
    }
  }

  // Example: usage
  async function init() {
    const data = await fetchData('/data.json'); // or Supabase API later
    if (data) {
      renderSection(schedulesContainer, data.schedules);
      // Repeat for other tabs if needed
    }
  }

  init();
});