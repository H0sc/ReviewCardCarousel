const name = document.querySelector("#name");
const job = document.querySelector("#job");
const imageCtn = document.getElementsByClassName("image-container")[0];
const picture = document.querySelector("#reviewer-image");
const review = document.querySelector("#review");

/* exec after page is done loading */
window.addEventListener("load", draw);
function draw() {
  /* get canvas node */
  const canvas = document.getElementById("picture");
  /* check for browser support of canvas */
  if (canvas.getContext("2d")) {
    /* and get drawing context from canvas node */
    const ctx = canvas.getContext("2d");
    /* continue with drawingcode... */
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50);
  } else {
    /* continue with rendering an alternative elemnt or error disclaimer */
    imageCtn.innerHTML =
      "<img src='./images/user_default_grey.png' alt='picture of reviewer'></img>";
  }
}

/* save json data in this variable, after fetched */
let data;

/* fetch data from file */
fetch("./data.json")
  /* response.json liest den response stream und gibt eine promise heraus. das ergebnis der promise wird zu einem js objekt geparsed */
  .then((response) => response.json())
  .then((json) => {
    data = json;
    review.innerText = data.reviewers[0].review;
    // picture.innerHTML = data.reviewers[0].image
    name.innerText = data.reviewers[0].name;
    job.innerText = data.reviewers[0].job;
  });
