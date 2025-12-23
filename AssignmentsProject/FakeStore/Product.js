async function getPoduct() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    const productrow = document.getElementById("ProductRow")
    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("col-4", "p-2");
      d.innerHTML = ` <div class="card border border-dark rounded shadow p-3">
              <div class="h-50 border border-primary rounded-top-2">
                <img
                  src=${element.image}
                  alt=${element.title}
                  class="w-100 h-100 object-fit-cover shadow"
                />
              </div>
              <div class="h-50 ">
                <p class="fw-bold fs-5">${element.title.length > 50 ? element.title.slice(0,50)+"..." :element.title}</p>
                <div class="fw-semibold ">${element.rating.rate}/5(${element.rating.count}</div>
                <div class="fw-bold fs-5">$ ${element.price}}</div>
                <div class="">${element.description}</div>
                <div class="d-flex gap-3 justify-content-center mt-2">
                    <button class="btn btn-outline-primary">Add to Cart</button>
                    <button class="btn btn-outline-secondary">Buy Now</button>
                </div>
              </div>
            </div>`;
            productrow.append(d);
    });
  } catch (error) {
    console.log(error);
  }
}
getPoduct()