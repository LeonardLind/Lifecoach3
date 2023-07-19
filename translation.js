// Function to get the user's country code using a free IP geolocation API (http://ip-api.com/json)
async function getCountryCode() {
    try {
      const response = await fetch('http://ip-api.com/json');
      const data = await response.json();
      return data.countryCode;
    } catch (error) {
      console.error('Failed to get country code:', error);
      return null;
    }
  }
  
  // Function to set the website's language to Swedish if the user is located in Sweden
  async function setLanguageBasedOnLocation() {
    try {
      const countryCode = await getCountryCode();
      if (countryCode === 'SE') {
        // Implement code to switch your website's language to Swedish here
        // ...
        // For example, you can use a translation library or update text content manually.
        console.log('User located in Sweden. Translating to Swedish.');
      } else {
        console.log('User located in another country. Website remains in English.');
      }
    } catch (error) {
      console.error('Failed to translate website:', error);
    }
  }
  
  // Call the translation function when the page finishes loading
  window.addEventListener('load', setLanguageBasedOnLocation);