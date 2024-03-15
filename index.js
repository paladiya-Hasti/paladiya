let productss =JSON.parse(localStorage.getItem("product"))|| [];

let dispaly = () => {
    document.getElementById("box").innerHTML = "";

    productss.map((ele, i) => {
        let title = document.createElement("h2")
        title.innerHTML = ele.title
       
        let price = document.createElement("p")
        price.innerHTML = ele.price
        let img = document.createElement("img")
        img.src = ele.img
       

        let div = document.createElement("div")
        div.append(img, title, price)
        document.getElementById("box").append(div)

    })
}


let products = (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value
    let price = document.getElementById("price").value
    let img = document.getElementById("img").value

    let product = {
        title: title,
        price: price,
        img: img,
    }

    localStorage.setItem("product",JSON.stringify(productss))

    productss.push(product);
    console.log(productss)
    dispaly()
}
document.getElementById("form").addEventListener("submit", products)