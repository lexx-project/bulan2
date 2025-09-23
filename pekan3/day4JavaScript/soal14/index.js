async function getPhotos() {
  try {
    const response = await fetch("https://picsum.photos/200/3");
    if (response.status === 200) {
      console.log("Data Ada");
    } else {
      throw new Error("Data Tidak Ada");
    }
  } catch (err) {
    console.log(err.message);
  }
}

getPhotos();
