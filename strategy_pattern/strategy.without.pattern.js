function getPrice(originalPrice, typePromotion = "default") {
  if (typePromotion === "preOrder") return originalPrice * 0.2;
  if (typePromotion === "promotion")
    return originalPrice <= 200 ? originalPrice * 0.1 : originalPrice - 30;

  if (typePromotion === "default") return originalPrice;
}
console.log("-->", getPrice(200, "promotion"));
