// Search functionality
const searchForm = document.getElementById('searchForm');
const serviceInput = document.getElementById('serviceInput');
const locationSelect = document.getElementById('locationSelect');

function searchService(service) {
  serviceInput.value = service;
  searchForm.submit();
}

searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const service = serviceInput.value;
  const location = locationSelect.value;
  
  if (service && location) {
    // Here you would typically redirect to a search results page
    // For now, we'll just log the search parameters
    console.log('Searching for:', service, 'in', location);
    // You can replace this with actual search functionality
    // window.location.href = `/search?service=${encodeURIComponent(service)}&location=${encodeURIComponent(location)}`;
  }
});

