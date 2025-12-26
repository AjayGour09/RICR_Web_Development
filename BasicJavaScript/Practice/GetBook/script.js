async function GetBook() {
  const m = Math.floor(Math.random() * 10);
  try {
    const BookApi = await fetch(
      "https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech"
    );
    const data = await BookApi.json();
    console.log(data.data.data[m]);
    document.getElementById("main").innerHTML = `
         <div
        class="border border-2 border-primary rounded-1 ms-5 mt-5"
        style="width: 400px; height: 400px"
      >
        <div class="p-2">
          <p>title:  ${data.data.data[m].volumeInfo.title}</p>
          <p>subtitle:  ${data.data.data[m].volumeInfo.subtitle}</p>
          <p>authors:  ${data.data.data[m].volumeInfo.authors}</p>
          <p>publisher: ${data.data.data[m].volumeInfo.publisher}</p>
          <p>publishedDate: ${data.data.data[m].volumeInfo.publishedDate}</p>
          
          <p>
            description: ${data.data.data[m].volumeInfo.description.slice(
              0,
              100
            )}...
          </p>
          <button class="btn btn-outline-primary ms-5" onclick="GetBook()">Get Book </button>
        </div>
      </div>
        `;
  } catch (error) {
    console.log(error);
  }
}
