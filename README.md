# Cash Register App 🚀

## Project Description 📝

>  Cash register app created in HTML, CSS and that will return change to the customer based on the price of the item, the amount of cash provided by the customer, and the amount of cash in the cash drawer.

- Return change to the customer based on the price of the item, the amount of cash provided by the customer, and the amount of cash in the cash drawer.
- From this project i learned how to use javaScript in projects and javaScript and OOP.
- The style and accessibility of this project make's it stand out.

### HTML:
```html

  <div class="box">
    <h1>Cash Register App</h1>
    <label for="cash">Enter cash from customer:</label>
    <input id="cash" type="number">
    <div id="change-due"></div>
    <button id="purchase-btn">SALE</button>
  </div>


```
### CSS:
```css

#cash {
  border: 1px solid white;
  box-shadow: 1px 1px 15px white inset;
  border-radius: 15px;
  padding: 10px 20px;
  margin: 10px;
  background-color: steelblue;
  transition: 0.4s ease;
}

#cash:hover {
  background-color: black;
}

#cash:focus {
  background-color: black;
}

```
### JS:
```javascript


cash.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    purchaseBtn.click();
  }
});

function formatResults(status, change) {
  displayChangeDue.innerHTML = `<p>Status: ${status}</p>`;
  change.forEach(
    money => (displayChangeDue.innerHTML += `<p>${money[0]}: $${money[1]}</p>`)
  );
}

```

## Demo 📸

![Demo](/DEMO.png)

## Technologies Used 🛠️

- HTML
- CSS
- JavaScript

## Features ⭐

- Building Cash Register App.

## Author 👩‍💻


- LinkedIn: [najeeba-qarqin](https://www.linkedin.com/in/najeeba-qarqin-5419502ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
- Email: [najeebaqarqin](najeebaqarqin@gmail.com)
- GitHub: [Najeeba_Qarqin](https://github.com/Najeeba-Qarqin)
