import Link from 'next/link'
import Head from 'next/head'



export const Layout = (props) => {
  const layoutStyle={
    backgroundColor: '#DAFFFB',
  }

  const styleHeader={
      backgroundColor: '#176B87',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      padding: '0px 24px',
      justifyContent: "space-between",
  }

  const styleMenu={
    fontSize: '20px',
    color: '#DAFFFB',
    paddingBottom: '2px',
    margin: '10px',
  }

  const styleLink={
    textDecoration: 'none',
    color: 'inherit',
  }

  const styleMain={
    minHeight: 'calc(100vh - 215px)',
    width: '96%',
    maxWidth: '1240px',
    margin : 'auto',
    marginTop: '32px',
  }

  const styleFooter={
    backgroundColor: '#176B87',
    color: '#DAFFFB',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    padding: '0px 24px',
    alignItems: 'center',
  }

  return (
    <div style={layoutStyle}>
      <Head>
        <title>Charles Cantin Photographe</title>
        <meta name="description" content="Vitrine du photographe Charles Cantin" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
      </Head>

      <header style={styleHeader}>
          <div>
            <img src='../public/uploads/logo.jpg' alt='Logo'/>
          </div>
          <div style={styleMenu}>
          <Link href="/">
              <a style={styleLink}>Accueil</a>
            </Link>
            {' | '}
            <Link href="/posts">
              <a style={styleLink}>Gallerie</a>
            </Link>
            {' | '}
            <Link href="/presta">
              <a style={styleLink}>Prestations</a>
            </Link>
            {' | '}
            <Link href="/contact">
              <a style={styleLink}>Contact</a>
            </Link>
          </div>
      </header>
      <main style={styleMain}>{props.children}</main>
      <footer style={styleFooter}>
          <h4>Charles Cantin Photographe</h4>
      </footer>

    </div>
  )
}