var $gallery = document.querySelector('main');

var imageUrls = [
  'https://www.fightersgeneration.com/nz3/character/megaman-mmx8-cool-bust.png',
  'https://www.entertainmentearth.com/news/wp-content/uploads/2015/06/mega-man-660x400.jpg',
  'https://i.redd.it/dz89jeavkno31.jpg'
];

var $imageUrlInput = document.querySelector('input');

var $addImageButton = document.querySelector('button');
$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
