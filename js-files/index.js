export async function getAllListingsFromApi(page) {
    try {
      const URL = `${API_ALL_LISTINGS}?sort=created&sortOrder=desc&limit=${listingsPerPage}&page=${page}&_bids=true&_active=true`
        const response = await fetch(URL);
        const data = await response.json();
        const api = data.data;

        if (api.length < listingsPerPage) {
          document.getElementById('neste').disabled = true;
          pageNav.classList.add("hidden");

      } else {
          document.getElementById('neste').disabled = false;
          pageNav.classList.remove("hidden");
      }

      //console.log(api);
        listListings(api);
    } catch (error) {
        listingOutput.innerHTML = "";
        listingOutput.innerHTML = "<p>Kan ikke koble til serveren. Vennligst prøv igjen senere</p>";
        console.error(error.message);
    }
}

export async function getSearchedListingsFromApi(query,page) {
  try {
    const URL = `${API_ALL_LISTINGS}/search?q=${query}&sort=created&sortOrder=desc&limit=12&page=${page}&_bids=true&_active=true`
      const response = await fetch(URL);
      //console.log(response)
      const data = await response.json();
      const api = data.data;
      //console.log(api)

      if (api.length < listingsPerPage) {
        document.getElementById('neste').disabled = true;
        pageNav.classList.add("hidden");
    } else {
        document.getElementById('neste').disabled = false;
        pageNav.classList.remove("hidden");
    }
      if(api.length == 0){
        listingOutput.innerHTML = "";
        listingOutput.innerHTML = `<p class="text-center">Ingen resultater funnet</p>`;
      } else {
        listListings(api);
      }
      
  } catch (error) {
      listingOutput.innerHTML = "";
      listingOutput.innerHTML = "<p>Kan ikke koble til serveren. Vennligst prøv igjen senere</p>";
      console.error(error.message);
  }
}