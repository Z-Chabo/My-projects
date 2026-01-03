import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AddToCartButton } from "./AddToCartButton.tsx";

const addToCartRoot=document.getElementById("add-to-cart-button");
if(addToCartRoot){
  const variantId=addToCartRoot.dataset.variantId;
  const productTitle=addToCartRoot.dataset.productTitle;
if(variantId&& productTitle){
createRoot(addToCartRoot!).render(
  <StrictMode>
    <AddToCartButton variantId={parseInt(variantId)} productTitle={productTitle} />
  </StrictMode>
);
}
}
