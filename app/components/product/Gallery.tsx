import {MediaFile} from '@shopify/hydrogen';
import {
  MediaImage,
  ProductVariant,
} from '@shopify/hydrogen/storefront-api-types';

import type {ProductWithNodes} from '~/types/shopify';

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */

type Props = {
  storefrontProduct: ProductWithNodes;
  selectedVariant?: ProductVariant;
};

export default function ProductGallery({
  storefrontProduct,
  selectedVariant,
}: Props) {
  const typeNameMap = {
    MODEL_3D: 'Model3d',
    VIDEO: 'Video',
    IMAGE: 'MediaImage',
    EXTERNAL_VIDEO: 'ExternalVideo',
  };

  const media = storefrontProduct?.media?.nodes;
  // const [emblaRef, emblaApi] = useEmblaCarousel({
  //   align: 'start',
  //   draggable: media && media.length > 1,
  //   loop: true,
  //   skipSnaps: true,
  //   speed: 7,
  // });

  if (!media?.length) {
    return null;
  }

  return (
    <div className="relative bg-white" tabIndex={-1}>
      <div className="h-full overflow-hidden">
        <div className="detail-image-gallery w-full bg-lightGray md:w-2/3">
          {/* Slides */}
          {media.map((med) => {
            let extraProps: Record<string, any> = {};

            if (med.mediaContentType === 'MODEL_3D') {
              extraProps = {
                interactionPromptThreshold: '0',
                ar: true,
                loading: 'eager',
                disableZoom: true,
                style: {height: '100%', margin: '0 auto'},
              };
            }

            const data = {
              ...med,
              __typename:
                typeNameMap[med.mediaContentType] || typeNameMap['IMAGE'],
              image: {
                // @ts-ignore
                ...med.image,
                altText: med.alt || 'Product image',
              },
            } as MediaImage;

            return (
              <MediaFile
                className="relative flex w-full shrink-0 grow-0 select-none object-cover"
                data={data}
                draggable={false}
                key={med.id}
                tabIndex={0}
                mediaOptions={{
                  image: {crop: 'center', sizes: '100vw', loading: 'eager'},
                }}
                {...extraProps}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
