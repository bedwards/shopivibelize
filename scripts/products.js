#!/usr/bin/env node

import 'dotenv/config';

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const SHOPIFY_ADMIN_TOKEN = process.env.SHOPIFY_ADMIN_TOKEN;
const LIMIT = 2;

if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_ADMIN_TOKEN) {
    console.error('❌ Missing required environment variables:');
    console.error('   SHOPIFY_STORE_DOMAIN');
    console.error('   SHOPIFY_ADMIN_TOKEN');
    process.exit(1);
}

const response = await fetch(
    `https://${SHOPIFY_STORE_DOMAIN}/admin/api/2024-10/products.json?limit=${LIMIT}`,
    {
        headers: {
            'X-Shopify-Access-Token': SHOPIFY_ADMIN_TOKEN,
        },
    }
);

if (!response.ok) {
    console.error(`❌ HTTP ${response.status}: ${await response.text()}`);
    process.exit(1);
}

const data = await response.json();
console.log(JSON.stringify(data, null, 2));
