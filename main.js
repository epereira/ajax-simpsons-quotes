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
        
            <blockquote><strong>${simpson[0].quote}</strong> - <em>${simpson[0].character}</em></blockquote></p>
        
            <figure class="image is-128x128">
                <img src="${simpson[0].image}">
            </figure>
           
        `;
        document.querySelector('div#chuck-norris').innerHTML = simpsonHtml;
      });
}

fetchSimpsonJSON();

const button = document.querySelector("button");

button.addEventListener("click", async(e)=> {
    e.preventDefault();
    button.setAttribute("disabled", true);
    await fetchSimpsonJSON();
    button.removeAttribute("disabled");
    return false;
});
 