/* eslint-disable @next/next/no-typos */
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>18 de junho de 2023</time>
            <strong>Title</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus debitis nihil modi expedita iure eius quis recusandae labore rerum ullam natus velit nesciunt molestiae nostrum, odit ut fugit perspiciatis asperiores.</p>
          </a>
          <a href="#">
            <time>18 de junho de 2023</time>
            <strong>Title</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus debitis nihil modi expedita iure eius quis recusandae labore rerum ullam natus velit nesciunt molestiae nostrum, odit ut fugit perspiciatis asperiores.</p>
          </a>
          <a href="#">
            <time>18 de junho de 2023</time>
            <strong>Title</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus debitis nihil modi expedita iure eius quis recusandae labore rerum ullam natus velit nesciunt molestiae nostrum, odit ut fugit perspiciatis asperiores.</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {}
  }
}