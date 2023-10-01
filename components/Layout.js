import Link from 'next/link'
import Head from 'next/head'

export const Layout = (props) => {
  return (
    <div
      style={{
        margin: '3rem',
      }}
    >
      <Head>
        <title>Charles Cantin Photographe</title>
        <meta name="description" content="Vitrine du photographe Charles Cantin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
            <img src='./public/uploads/logoPhotog.jpeg' alt='Logo' />
            <Link href="/">
              <a>Accueil</a>
            </Link>
            {' | '}
            <Link href="/posts">
              <a>Gallerie</a>
            </Link>
            {' | '}
            <Link href="/presta">
              <a>Prestations</a>
            </Link>
            {' | '}
            <Link href="/contact">
              <a>Contact</a>
            </Link>
      </header>
      <main>{props.children}</main>
    </div>
  )
}
