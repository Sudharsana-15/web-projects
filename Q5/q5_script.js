// q5_script.js

function calculateBill() {
  let qty1 = Number(document.getElementById("qty1").value);
  let price1 = Number(document.getElementById("price1").value);
  let qty2 = Number(document.getElementById("qty2").value);
  let price2 = Number(document.getElementById("price2").value);
  let qty3 = Number(document.getElementById("qty3").value);
  let price3 = Number(document.getElementById("price3").value);

  if (qty1 < 0 || price1 < 0 || qty2 < 0 || price2 < 0 || qty3 < 0 || price3 < 0) {
    alert("Please enter valid non-negative quantity and price values.");
    return;
  }

  let cost1 = qty1 * price1;
  let cost2 = qty2 * price2;
  let cost3 = qty3 * price3;
  let totalBill = cost1 + cost2 + cost3;

  let discount = 0;
  let finalAmount = totalBill;
  if (totalBill > 2000) {
    discount = totalBill * 0.10;
    finalAmount = totalBill - discount;
  }

  let now = new Date();
  let dateStr = now.toLocaleDateString() + " " + now.toLocaleTimeString();

  let resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    <div class="receipt-header">
      <h3>★ VOGUE MART ★</h3>
      <p>${dateStr}</p>
    </div>
    <div class="r-line"><span>Item 1 (${qty1} × ₹${price1})</span><span>₹${cost1.toFixed(2)}</span></div>
    <div class="r-line"><span>Item 2 (${qty2} × ₹${price2})</span><span>₹${cost2.toFixed(2)}</span></div>
    <div class="r-line"><span>Item 3 (${qty3} × ₹${price3})</span><span>₹${cost3.toFixed(2)}</span></div>
    <div class="r-divider"></div>
    <div class="r-line"><span>Subtotal</span><span>₹${totalBill.toFixed(2)}</span></div>
    ${discount > 0
      ? `<div class="r-line r-discount"><span>Discount (10%)</span><span>-₹${discount.toFixed(2)}</span></div>`
      : `<div class="r-line"><span>Discount</span><span>None</span></div>`}
    <div class="r-divider"></div>
    <div class="r-total"><span>TOTAL</span><span>₹${finalAmount.toFixed(2)}</span></div>
    <div class="barcode">|||‖|||‖||‖|||</div>
    <div class="thanks">THANK YOU FOR SHOPPING!</div>
  `;
}