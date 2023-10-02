import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { clickHandler } from '@/public/scripts/test';
import { SuccessResponse, axios } from '@/lib/axios';

export default function Home({ initialData }: {initialData: string}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Prague itinerary</h1>
        <p>{ initialData }</p>
        <button onClick={() => clickHandler()}>ボタン</button>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const response = await axios.get<SuccessResponse<{ temporaryUserId: string }>>('http://app:8080/test1')
  return {
    props: {
      initialData: response.data.data.temporaryUserId,
    }
  };
}
