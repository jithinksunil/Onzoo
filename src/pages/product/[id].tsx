import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ProductDetails } from '@/components/productDetails';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}
interface Props {
  product: Product | null;
}
export default function Home({ product }: Props) {
  return (
    <>
      <Head>
        <title>{'Oonzoo'}</title>
        <link
          rel='shortcut icon'
          href={
            'https://oonzoo.ae/wp-content/uploads/2023/01/OONZOO-LOGO-1024x309.png'
          }
          type='image/x-icon'
        />
        <meta name='description' content={product?.description} />
        <meta name='og:title' content={product?.title} />
        <meta name='og:description' content={product?.description} />
        <meta name='og:image' content={product?.image} />

        <meta property='og:type' content='website' />
        <meta property='og:image:width' content='250' />
        <meta property='og:image:height' content='141' />
      </Head>
      <div className='flex flex-col min-h-screen'>
        <div className='border-b border-gray-600 h-[78px]'>
          <div className='max-w-[1240px] px-5 mx-auto py-4'>
            <Image
              src={
                'https://oonzoo.ae/wp-content/uploads/2023/01/OONZOO-LOGO-1024x309.png'
              }
              width={150}
              height={10}
              alt='Onzoo'
              className='min-h'
            />
          </div>
        </div>
        <div className='flex-grow'>
          <div className='max-w-[1220px] px-5 mx-auto py-16'>
            <ProductDetails product={product} isLoading={!product} />
          </div>
        </div>
        <div className='border-t border-gray-600'>
          <div className='max-w-[1240px] px-5 mx-auto  py-4'>Footer</div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: Product = await res.json();

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        product: null,
      },
    };
  }
};
