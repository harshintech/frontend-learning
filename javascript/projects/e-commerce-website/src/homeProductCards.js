import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }

  products.forEach((curProd) => {
    const { brand, category, description, id, image, name, price, stock } =
      curProd;

    //--> Below Line is For template element and it's details available on mdn reference
    const productClone = document.importNode(productTemplate.content, true);
    // console.log(productClone);
    //Now Your <Template> Inside code is save in productClone

    //Here attribute means html-tag properties

    //Here we replace id="cardValue" with our id="card1,card2,card3....."  we change this dynamically
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${
      price * 4
    }`;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
      });

    productContainer.append(productClone);
  });
};

//Template Use :
/*
  What is <template> in HTML?

  - The <template> tag is a container for HTML code that you don’t want to render immediately.
  - It's like a blueprint — you can clone and insert it into the page later using JavaScript.

  Key Points:
  - Content inside <template> doesn’t show up on the page when it loads.
  - You use JavaScript to activate (clone and insert) it when needed.
  - It’s useful for reusing components like cards, modals, or list items.

  Example:
    <template id="user-card">
      <div class="card">
        <h2>User Name</h2>
        <p>Details go here...</p>
      </div>
    </template>

    <script>
      const template = document.getElementById("user-card");
      const clone = template.content.cloneNode(true);
      document.body.appendChild(clone);
    </script>

  When to use:
  - Dynamic lists (e.g., user cards, comments)
  - Modals or dialogs loaded on demand
  - Repeating components that need JavaScript to activate
*/
