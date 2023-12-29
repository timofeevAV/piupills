'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { createUrl } from '@/utils';
import { GridTileImage } from './gridTileImage';
import { useEffect } from 'react';

export function Gallery({ images }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const imageSearchParam = searchParams.get('image');
  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0;

  const nextSearchParams = new URLSearchParams(searchParams.toString());
  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  nextSearchParams.set('image', nextImageIndex.toString());

  const previousSearchParams = new URLSearchParams(searchParams.toString());
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
  previousSearchParams.set('image', previousImageIndex.toString());

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        router.replace(createUrl(pathname, nextSearchParams));
      } else if (event.key === 'ArrowLeft') {
        router.replace(createUrl(pathname, previousSearchParams));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pathname, nextSearchParams, previousSearchParams]);

  return (
    <div className='select-none'>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        {images[imageIndex] && (
          <Image
            className="h-full w-full object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={images[imageIndex]?.image_alt}
            src={images[imageIndex]?.image}
            priority={true}/>
        )}
      </div>

      {images.length > 1 ? (
        <ul className="my-12 flex items-center justify-center gap-2 overflow-auto py-1 md:mb-0 flex-wrap">
          {images.map((image, index) => {
            const isActive = index === imageIndex;
            const imageSearchParams = new URLSearchParams(searchParams.toString());
            imageSearchParams.set('image', index.toString());
            return (
              <li key={image.image} className="h-20 w-20">
                <Link
                  aria-label="Enlarge product image"
                  href={createUrl(pathname, imageSearchParams)}
                  scroll={false}
                  className="h-full w-full"
                  prefetch={false}
                  replace={true}>
                  <GridTileImage
                    alt={image.image_alt}
                    src={image.image}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}