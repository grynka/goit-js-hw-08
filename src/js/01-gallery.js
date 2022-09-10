// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';


// Change code below this line

const gallery = document.querySelector(".gallery");
const images = galleryImages(galleryItems);

function galleryImages(image) {
  return image
    .map(
      ({ original, description, preview }) =>
        `<a 
      class="gallery__item"
      href="${original}"
      >
      <img
      class="gallery__image"
      src="${preview}" 
      alt="${description}" 
      ></a>`
    )
    .join("");
}

gallery.insertAdjacentHTML("beforeend", images);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionClass: "",
  
});

console.log(galleryItems);