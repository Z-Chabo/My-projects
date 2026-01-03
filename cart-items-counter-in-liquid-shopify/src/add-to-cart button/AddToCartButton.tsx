export function AddToCartButton({
  variantId,
  productTitle,
}: {
  variantId?: number;
  productTitle?: string;
}) {
  async function addToCart() {
    if (!variantId) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cartDrawer: any = document.querySelector("cart-drawer");
    const sections = cartDrawer
      ?.getSectionsToRender()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((section: any) => section.id)
      .join(",");

    const addToCartRequest = await fetch(
      `/cart/add.js${sections ? `?sections=${sections}` : ""}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: variantId, quantity: 1 }),
      }
    );

    const response = await addToCartRequest.json();
    console.log(response);

    if (cartDrawer?.renderContents) {
      cartDrawer.renderContents(response);
    }

    const root = document.querySelector("#add-to-cart-button");
    if (!root) return;
    root.dispatchEvent(
      new CustomEvent("recipient:toggle", {
        detail: {
          mode: "add",
          variantId,
          productTitle,
        },
        bubbles: true,
      })
    );
  }

  return <button onClick={addToCart}>Add to cart {productTitle}</button>;
}
