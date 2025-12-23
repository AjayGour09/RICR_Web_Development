async function getPoduct() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    const productrow = document.getElementById("ProductRow")
    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("col-9", "p-2","border","shadow","w-100","mt-3","h-25" ,"maind");
      d.innerHTML = `<div class="d-flex">
          <div>
            <img src=${element.image} ${element.title}  class="imageee"/>
          </div>
          <div class="h-75">
            <p class="fw-bold fs-5">${element.title.length > 50 ? element.title.slice(0,50)+"..." :element.title}</p>
           <div class="fw-semibold ">${element.rating.rate}/5(${element.rating.count}</div>
                <div class="fw-bold fs-5">$ ${element.price}</div>
                <div class="">${element.description}</div>
          </div>
        </div>
        <div class="d-flex gap-3 justify-content-center mt-2">
          <button class="btn btn-outline-primary">Add to Cart</button>
          <button class="btn btn-outline-secondary">Buy Now</button>
        </div>`;
            productrow.append(d);
    });
  } catch (error) {
    console.log(error);
  }
}
getPoduct()