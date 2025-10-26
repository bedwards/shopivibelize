import { extend, render, BlockStack, Link } from "@shopify/post-purchase-ui-extensions-react";
import PropTypes from "prop-types";

extend("Checkout::PostPurchase::ShouldRender", async () => {
  return { render: true };
});

render("Checkout::PostPurchase::Render", App);

export function App() {
  return (
    <BlockStack>
      <BlockStack spacing="extraLoose" />
      <BlockStack spacing="extraLoose" />
      <BlockStack alignment="center">
        <Link
          external
          to="https://bedwards.github.io/imaginary-crime-lab/"
        >
          Back to the Crime Lab!
        </Link>
      </BlockStack>
    </BlockStack>
  );
}

App.propTypes = {
  done: PropTypes.func.isRequired,
};
