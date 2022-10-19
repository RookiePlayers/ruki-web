import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Team() {
    return (
        <div className='relative w-full min-h-screen overflow-hidden bg-black'>
            <Head>
                <title>RUKI Team</title>
                <meta name="description" content="What we're made of" />
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