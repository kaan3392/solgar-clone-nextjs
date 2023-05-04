import React, { useContext } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { IProduct } from "../../components/Types";
import SingleProduct from "../../components/SingleProduct";
import Advert from "../../components/Advert";
import InterestedProducts from "../../components/InterestedProducts";
import { BASE_URL } from "../../util/url";

const Product: NextPage<{ product: IProduct }> = ({ product }) => {
  return (
    <div>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SingleProduct product={product} />
      <Advert />
      <InterestedProducts />
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${BASE_URL}products`);

  const products = (await res.json()) as IProduct[];

  const ids = products.map((product) => product._id);

  const paths = ids.map((id) => ({ params: { id } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { id } }: any) {
  const res = await fetch(`${BASE_URL}products/${id}`);
  const product = (await res.json()) as IProduct;
  return {
    props: {
      product,
    },
  };
}



export default Product;
