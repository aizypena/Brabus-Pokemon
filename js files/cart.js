document.addEventListener("DOMContentLoaded", function () {
    const itemNums = document.querySelectorAll(".item-num");
    const decreaseBtns = document.querySelectorAll(".decrease");
    const increaseBtns = document.querySelectorAll(".increase");

    decreaseBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            let itemNum = btn.nextElementSibling;
            let currentNum = parseInt(itemNum.textContent);
            if (currentNum > 1) {
                itemNum.textContent = currentNum - 1;
            }
        });
    });

    increaseBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            let itemNum = btn.previousElementSibling;
            let currentNum = parseInt(itemNum.textContent);
            itemNum.textContent = currentNum + 1;
        });
    });
});

//for item 1
const priceElement = document.getElementsByClassName('checkbox-item1');
const pricePerItem = 289.00;
let quantity = 1;

document.querySelector('.decrease').addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        updatePrice();
    }
});
document.querySelector('.increase').addEventListener('click', () => {
    quantity++;
    updatePrice();
});
function updatePrice() {
    const totalPrice = (pricePerItem * quantity).toFixed(2);
    priceElement.innerHTML = `<p class="m-0">₱${totalPrice}</p>`;
}