const photoLink = 'https://source.unsplash.com/random/250x250';
function changeAllPhotos() {
  const photos = document.querySelectorAll('.photo');
  photos.forEach(photo => {
    fetch(photoLink)
      .then(response => {
        if (response.ok) {
          return response.url;
        }
        throw new Error('System error');
      })
      .then(url => {
        photo.innerHTML = `<img src="${url}" alt="Random Photo">`;
      })
      .catch(error => {
        console.error('Photos are not loading:', error);
      });
  });
}

const changeButton = document.querySelector('.change');
changeButton.addEventListener('click', changeAllPhotos);
changeAllPhotos();
