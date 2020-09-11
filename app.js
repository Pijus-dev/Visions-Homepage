const button = document.querySelector(".play-button");

button.addEventListener("click", () => {
  const video = document.getElementById("glasses");

  video.style.display = "block";
  video.src += "?autoplay=1";
});

const searchBar = document.querySelector(".search-bar");

const showSearchInput = () => {
  document.querySelectorAll("#icon").forEach((icon) => {
    icon.style.display = "none";
  });
  document.getElementById("searchInput").style.display = "block";

  searchBar.style.width = "3%";
};

searchBar.addEventListener("click", showSearchInput);

