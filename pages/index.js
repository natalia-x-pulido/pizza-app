import Head from 'next/head'
import {GlobalHeader, StepMenu, PizzaMaker} from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Build Your Pizza!</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <GlobalHeader/>
      <StepMenu/>
      <PizzaMaker/>
    </div>
  )
}
