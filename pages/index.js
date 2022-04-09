import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({ tiradaCarta1, tiradaCarta2 }) {
  return (
    <div>
      <Head>
        <title>¿QueHace?</title>
        <meta name='description' content='Juego en el que se lanzan cartas randomizadas, y se forman oraciones graciosas.' />
        <link rel='icon' href='/favicon.ico' />
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossOrigin='anonymous'></link>
        <link rel='preconnect' href='https://fonts.googleapis.com'/>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true'/>
        <link href='https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap' rel='stylesheet'/>
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <main>
        <div className='container-fluid bg-light mt-5'>
          <br/><br/>
          <h1 className='text-center text-muted' id='tituloPagina'>¿QueHace?</h1>
          <h5 className='text-center text-muted' id='descripcionPagina'>¿QueHace? es un juego on-line, basado en el famoso juego de cartas A.T.R. <br/> Su objetivo es entretener al publico con oraciones graciosas.</h5>
          <br/><br/>
        </div>
        <br/><br/>
        <div className='tiradaCartas d-flex justify-content-center'>
          <button className='btn btn-secondary' onClick={(e) => {
            if(document.getElementById('texto1').style.opacity == 0) {
              document.getElementById('texto1').classList.add('animate__animated', 'animate__rotateInDownLeft');
              document.getElementById('texto1').style.opacity = 1
              
            } else if (document.getElementById('texto1').style.opacity == 1) {
              document.getElementById('texto2').classList.add('animate__animated', 'animate__rotateInDownLeft');
              document.getElementById('texto2').style.opacity = 1
              
            } 
            
            if (document.getElementById('texto1').style.opacity == 1 && document.getElementById('texto2').style.opacity == 1) {
              setTimeout(() => {
                window.location.reload();
              }, 5000)
              
            }
          }}>Lanzar Carta</button>
        </div>
        <br/><br/><br/><br/>
        <div className='d-flex justify-content-center font-weight-bold' >
              <h3 id='texto1'><strong>{tiradaCarta1}</strong></h3>
              <h3 id='texto2'><strong>&nbsp;{tiradaCarta2}</strong></h3>
        </div>
        <br/><br/><br/><br/><br/>
        <nav className='navbar fixed-bottom navbar-light bg-light rounded-5'>
          <h5 className='mx-auto text-muted'>Creado por Franco Piccirilli</h5>
        </nav>
      </main>
      <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM' crossOrigin='anonymous'></script>
    </div>
  )
}


export async function getStaticProps () {
  const res = await fetch(`https://quehace-api.vercel.app/datos.json`)
  const tiradaCarta1 = await res.json()
  const random = Math.floor(Math.random() * tiradaCarta1.length)
  const random2 = Math.floor(Math.random() * tiradaCarta1.length) 
  return {
    props: {
      tiradaCarta1: tiradaCarta1[random].primerTexto,
      tiradaCarta2: tiradaCarta1[random2].segundoTexto
    }
  }
}
