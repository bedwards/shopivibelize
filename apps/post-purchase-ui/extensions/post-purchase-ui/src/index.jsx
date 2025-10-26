import { extend, render, BlockStack, Button } from "@shopify/post-purchase-ui-extensions-react";

extend("Checkout::PostPurchase::ShouldRender", async () => {
  return { render: true };
});

render("Checkout::PostPurchase::Render", App);

export function App() {
  return (
    <BlockStack spacing="loose">
      <Button
        submit
        onPress={() => {
          window.open('https://bedwards.github.io/imaginary-crime-lab/', '_blank');
        }}
      >
        Open Your Dashboard
      </Button>
    </BlockStack>
  );
}
