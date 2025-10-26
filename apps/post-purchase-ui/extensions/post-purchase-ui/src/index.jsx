import { extend, render, BlockStack, Button } from "@shopify/post-purchase-ui-extensions-react";
import PropTypes from "prop-types";

extend("Checkout::PostPurchase::ShouldRender", async () => {
  return { render: true };
});

render("Checkout::PostPurchase::Render", App);

export function App({ done }) {
  return (
    <BlockStack spacing="loose">
      <Button
        submit
        onPress={() => {
          done({ redirectUrl: 'https://bedwards.github.io/imaginary-crime-lab/' });
        }}
      >
        Back to the Crime Lab!
      </Button>
    </BlockStack>
  );
}

App.propTypes = {
  done: PropTypes.func.isRequired,
};
