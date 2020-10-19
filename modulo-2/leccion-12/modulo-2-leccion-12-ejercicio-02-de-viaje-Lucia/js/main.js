"use strict";

const cities = document.querySelector(".js-city");
const container = document.querySelector("body");
function createImage(url) {
  const image = document.createElement("img");
  container.appendChild(image);
  image.src = url;
}

function selectCity(event) {
  if (event.target.value === "Madrid") {
    createImage("https://okdiario.com/img/2020/10/16/madrid-coronavirus-restricciones-655x368.jpg");
    createImage(
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/e6/bf/caption.jpg?w=1000&h=-1&s=1"
    );
    createImage(
      "https://www.collegiate-ac.es/propeller/uploads/sites/3/2019/10/city-hero-madrid-1450x742.jpg"
    );
  } else if (event.currentTarget.value === "Paris") {
    createImage(
      "https://cdn.elpachinko.com/wp-content/uploads/2019/03/10-lugares-imprescindibles-que-visitar-en-Par%C3%ADs.jpg"
    );
    createImage("https://aws.traveler.es/prod/designs/v1/assets/940x627/98404.jpg");
    createImage(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRweBvJjSz3k7mW-xcJ4z7s3vgjpqixYkMRtg&usqp=CAU"
    );
  } else if (event.currentTarget.value === "New York") {
    createImage(
      "https://cdn.cheapism.com/images/Where_You_Live_or_Work.2e16d0ba.fill-1440x605.png"
    );
    createImage(
      "https://images.musement.com/cover/0002/49/thumb_148242_cover_header.jpeg?w=1200&h=630&q=95&fit=crop"
    );
    createImage(
      "https://viajesgram.com/uploads/70efdf2ec9b086079795c442636b55fb/images/CURSOS%20DE%20IDIOMAS/tour_img-1931272-146.jpg"
    );
  }
}

cities.addEventListener("change", selectCity);
