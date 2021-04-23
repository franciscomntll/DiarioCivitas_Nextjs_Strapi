import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
    return (
        <DefaultLayout>
        <Component {...pageProps} />
        </DefaultLayout>
    )
  }
  
  export default MyApp