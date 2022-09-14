// This function loads pokemon data from the Pokemon API
function fetchSimpsonJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
   
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
      })
      .then(function(simpson) {
        const simpsonHtml = `
            <p><strong>${simpson[0].quote}</strong> - ${simpson[0].character}</p>
            <img src="${simpson[0].image}"></img>
        `;
        document.querySelector('div#chuck-norris').innerHTML = simpsonHtml;
      });
  }
 