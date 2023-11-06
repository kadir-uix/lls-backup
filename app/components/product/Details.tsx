import {ShopifyAnalyticsPayload} from '@shopify/hydrogen';
import type {
  Product,
  ProductVariant,
} from '@shopify/hydrogen/storefront-api-types';
import clsx from 'clsx';

import ProductGallery from '~/components/product/Gallery';
import ProductWidget from '~/components/product/Widget';
import type {SanityProductPage} from '~/lib/sanity';

type Props = {
  sanityProduct: SanityProductPage;
  storefrontProduct: Product;
  storefrontVariants: ProductVariant[];
  selectedVariant: ProductVariant;
  analytics: ShopifyAnalyticsPayload;
};

export default function ProductDetails({
  sanityProduct,
  storefrontProduct,
  storefrontVariants,
  selectedVariant,
  analytics,
}: Props) {
  return (
    <>
      {/* Gallery */}
      <ProductGallery
        storefrontProduct={storefrontProduct}
        selectedVariant={selectedVariant}
      />

      {/* Widget (mobile) */}
      <ProductWidget
        sanityProduct={sanityProduct}
        storefrontProduct={storefrontProduct}
        storefrontVariants={storefrontVariants}
        selectedVariant={selectedVariant}
        analytics={analytics}
      />

      {/* Widget (desktop) */}

      {/* <ProductWidget
        sanityProduct={sanityProduct}
        storefrontProduct={storefrontProduct}
        storefrontVariants={storefrontVariants}
        selectedVariant={selectedVariant}
        analytics={analytics}
      /> */}
    </>
  );
}
