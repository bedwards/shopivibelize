# shopivibelize

Shopivibelize adds playful energy to Shopify workflows, turning routine shop actions into a more lively and memorable experience.

## Commands

One-time setup:

```bash
npm i -g @shopify/cli @shopify/app           # Install CLI (once per machine)
npm init @shopify/app                        # Create project (once)
shopify app generate extension               # Add extensions (once per extension)
```

Development (every dev session):

```bash
shopify app dev                              # Local dev with tunnel
```

Production (every update):

```bash
vercel --prod                                # Deploy backend to Vercel
shopify app deploy                           # Deploy extension to Shopify
```

For help:

```bash
shopify app -- --help
```

## Helpful links

Replace *crime-lab* with your Shopify store name:

[https://admin.shopify.com/store/crime-lab/settings/apps/development](https://admin.shopify.com/store/crime-lab/settings/apps/development)

Replace *4571854* with your Shopify partner ID:

[https://partners.shopify.com/4571854/apps](https://partners.shopify.com/4571854/apps)

Install app in store (replace both IDs or atleast this will let you know you are in the right place as you click around):

[https://dev.shopify.com/dashboard/189074340/apps/291180478465](https://dev.shopify.com/dashboard/189074340/apps/291180478465)

## Extensions

When you build apps that extend Shopify’s checkout, you are working with two distinct surfaces that appear after a customer completes payment. The first is a special interstitial screen where you can take center stage for a moment; the second is Shopify’s built-in confirmation flow made up of the “Thank you” and “Order status” pages. Each surface serves a different purpose for merchants and customers, and understanding that difference helps you design a consistent experience that always gives users a clear next step.

A Post-purchase UI extension appears immediately after payment, before customers reach the standard Shopify confirmation pages. It is a full-screen opportunity to introduce your app’s own follow-through: a prominent button, a short message, and a sense of momentum into the product they just bought. Shopify will always include its own “Continue” action that leads to the stock confirmation pages, and you cannot remove that, but your content is the dominant focal point. This is the screen where you greet the customer first and encourage them to proceed directly into your app’s environment, using a deep link that includes the order context you need.

A Checkout UI extension, by contrast, lives on the pages that Shopify owns and customers are accustomed to — the Thank you page they see right after completing the flow, and the Order status page they may revisit through the link in their email. These pages are busier and branded by Shopify. You are not interrupting anything here; you are joining the established interface. Your extension becomes a block in that environment, adding a friendly “Finish setup” or “Open your dashboard” button that does not replace Shopify’s confirmation experience, but complements it. Customers should always have this option available, especially in cases where the interstitial never appears because of gateway or eligibility differences.

Taken together, these two extensions form a resilient hand-off from the moment of purchase into your application. Post-purchase UI gives you an early, focused chance to capture attention and help customers keep moving. Checkout UI makes sure that, even if they miss that moment or return later, your app is still waiting for them with a clear next action. That is the pattern used in this repository: a friendly invitation right after payment, and a reliable companion on the pages Shopify controls.
