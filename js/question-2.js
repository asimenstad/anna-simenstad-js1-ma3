const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=418cf1f208034526b9c354eba2125ed2";
const html = document.querySelector(".api_results");

async function fetchAPI() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const allResults = result.results;

    html.innerHTML = "";

    for (let i = 0; i < allResults.length; i++) {
      if (i === 8) {
        break;
      }

      const name = allResults[i].name;
      const rating = allResults[i].rating;
      const tags = allResults[i].tags;

      html.innerHTML += `<div>Name: ${name}</div>
    <div>Rating: ${rating}</div>
    <div>Number of tags: ${tags.length}</div>`;
    }
  } catch (error) {
    html.innerHTML = "An error occurred";
  }
}
fetchAPI();
