import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Contact() {
    return (
        <div className='relative w-full min-h-screen overflow-hidden bg-black'>
            <Head>
                <title>Reach out to RUKI</title>
                <meta name="description" content="Where to find us" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Navbar />
            <div className='w-full h-full'>
                <div className='w-full flex items-center flex-col'>
                    <section className='w-full h-screen flex flex-row max-w-7xl'>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}