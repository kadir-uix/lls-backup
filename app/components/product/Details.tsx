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
      <div className="mb-8 lg:hidden">
        <ProductWidget
          sanityProduct={sanityProduct}
          storefrontProduct={storefrontProduct}
          storefrontVariants={storefrontVariants}
          selectedVariant={selectedVariant}
          analytics={analytics}
        />
      </div>

      {/* Widget (desktop) */}
      <div
        className={clsx(
          'shadow-none pointer-events-none absolute right-0 top-16 z-10 hidden h-screen p-4 md:w-1/3	',
          'lg:block',
        )}
      >
        <div className="justify center align-middle	">
          <div className="fixed">
            <ProductWidget
              sanityProduct={sanityProduct}
              storefrontProduct={storefrontProduct}
              storefrontVariants={storefrontVariants}
              selectedVariant={selectedVariant}
              analytics={analytics}
            />
          </div>
        </div>
      </div>
    </>
  );
}
