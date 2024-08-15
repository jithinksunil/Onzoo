import { Product } from '@/pages/product/[id]';
import React from 'react';
import Image from 'next/image';
export function ProductDetails({
  product,
  isLoading,
}: {
  product: Product | undefined;
  isLoading: boolean;
}) {
  return !product || isLoading ? (
    <div className='grid md:grid-cols-2 gap-4 md:gap-16'>
      <div className='w-full flex items-center justify-center'>
        <div className='relative w-full aspect-[0.9] overflow-hidden rounded-3xl bg-slate-400' />
      </div>
      <div className='py-6'>
        <p className='text-3xl md:text-5xl font-bold mb-1 bg-slate-400 w-full h-[80px] md:h-[150px] rounded-md' />
        <p className='text-lg md:text-2xl mb-4 md:mb-8  bg-slate-400 w-1/2  h-[35px] rounded-md' />
        <p className='md:text-xl md:leading-8 mb-4 bg-slate-400 w-full h-[100px] md:h-[150px] rounded-md' />
        <div className='mb-4 bg-slate-400 w-2/3 h-[50px] md:h-[70px] rounded-md' />

        <div className='text-sm md:text-base gap-6 bg-slate-400 w-1/2 h-[30px] md:h-[40px] rounded-md' />
      </div>
    </div>
  ) : (
    <div className='grid md:grid-cols-2 gap-4 md:gap-16'>
      <div className='w-full flex items-center justify-center'>
        <div className='relative w-full aspect-[0.9] overflow-hidden rounded-3xl'>
          <Image src={product.image} fill alt='Onzoo' className='min-h' />
        </div>
      </div>
      <div className='py-6'>
        <p className='text-3xl md:text-5xl font-bold mb-1'>{product.title}</p>
        <p className='text-lg md:text-2xl mb-4 md:mb-8 text-gray-500'>
          {product.category}
        </p>
        <p className='md:text-xl md:leading-8 mb-4'>{product.description}</p>
        <div className='flex items-end gap-4  mb-4'>
          <p className='text-3xl md:text-5xl font-extrabold flex'>
            {product.price.toFixed(2)} AED
          </p>
          <p className='text-xl md:text-3xl text-red-900 line-through'>
            {(product.price + 10).toFixed(2)} AED
          </p>
        </div>

        <div className='text-sm md:text-base flex gap-6'>
          <p className='text-gray-500 flex gap-1 items-center'>
            <Image src='/like.svg' alt='like' width={20} height={20} />
            {product.rating.count} Likes{' '}
          </p>
          <p className='text-gray-500 flex gap-1 items-center'>
            <Image src='/star.svg' alt='like' width={20} height={20} />
            {product.rating.rate} Rating{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
