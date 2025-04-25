document.querySelector(".store-products").innerHTML = "";

//<span class="store-product-sale-price-off">75% OFF</span>

products.forEach((product) => {
  if (!product) return;
  if (product.images.length === 0) return;
  if (
    !product.brand ||
    !product.reviews.total ||
    !product.name ||
    !product.regularPrice ||
    !product.salePrice ||
    !product.maxInstallments
  )
    return;

  randomStock = Math.floor(Math.random() * 10) + 1;
  document.querySelector(".store-products").innerHTML += `
		<div class="store-product">
			${
        product.offPercentage
          ? `<span class="store-product-off-tag">${product.offPercentage}% OFF</span>`
          : ``
      }
			${
        !product.stock || product.stock <= 0
          ? `<span class="store-product-out-of-stock"><span>FORA DE ESTOQUE</span></span>`
          : ``
      }
			<img class="store-product-image" src="${product.images[0]}"/>
			<span class="store-product-brand">${product.brand}</span>
			<div class="store-product-stars-container">
				<span class="store-product-stars" style="width: 100%;"></span>
				<span class="store-product-rating">(${product.reviews.total})</span>
			</div>
			<span class="store-product-name">${product.name}</span>
			<div class="store-product-price-container">
				<span class="store-product-regular-price">${product.regularPrice.toLocaleString(
          "pt-BR",
          { style: "currency", currency: "BRL" }
        )}</span>
				<span class="store-product-sale-price">${product.salePrice.toLocaleString(
          "pt-BR",
          { style: "currency", currency: "BRL" }
        )}</span>
			</div>
			<span class="store-product-installments">Em até <span>${
        product.maxInstallments
      }x</span> de <span>${parseFloat(
    (product.salePrice * (product.maxInstallmentsInterest || 1)) /
      product.maxInstallments
  ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span> ${
    product.maxInstallmentsInterest === 1 || !product.maxInstallmentsInterest
      ? `<span class="store-product-installments-interest-free">sem juros</span>`
      : ``
  }</span>
  <div>
  	<img width='30px' class='img-fluid' src='/shopee/pagina-inicial-black/assets/flashsale.png' style='position: absolute; left: 0px; bottom: 30px; transform: translateY(-50%); z-index: 100;' />
					<div class='progress' style='height: 25px; border-radius: 10px; background: linear-gradient(90deg, #ffbda6 50%, #ffd4c7 100%); position: relative;'>
								

							<div class='progress-bar' role='progressbar' style='width: ${Math.max(
                ((15 - randomStock) / 15) * 100,
                25
              )}%; background: linear-gradient(90deg, #ec1c17 0%, #fead00 100%);' aria-valuenow='${
    ((15 - randomStock) / 15) * 100
  }' aria-valuemin='0' aria-valuemax='100'>
							</div>
              <div class='d-flex align-items-center justify-content-center' style='position: absolute; top: 0; left: 0; right: 0; bottom: 0;'>
								<span class='fw-bold text-white'>${randomStock} ITENS RESTANTES</span>
							</div>
						</div>
					</div>
					<a class="store-product-claim-discount${
            !product.stock || product.stock <= 0 ? ` disabled` : ``
          }" href="${
    product.stock > 0 ? product.redirectUrl : `#`
  }">Resgatar Desconto</a>
		</div>
	`;
});

// const initialTime = 10 * 60 * 1000;

// let startTime = localStorage.getItem("startTime");
// if (!startTime) {
//   startTime = Date.now();
//   localStorage.setItem("startTime", startTime);
// }

// function updateTimer() {
//   const currentTime = Date.now();
//   const timeLeft = parseInt(startTime) + initialTime - currentTime;

//   if (timeLeft >= 0) {
//     const minutes = Math.floor(timeLeft / 60000);
//     const seconds = Math.floor((timeLeft % 60000) / 1000);
//     document.querySelector("#store-timer span").textContent = `${minutes
//       .toString()
//       .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
//   } else {
//     document.querySelector("#store-timer span").textContent = "00:00";
//   }
// }

// updateTimer();

// const timerInterval = setInterval(updateTimer, 250);
