import Head from "next/head";

import {useRouter} from "next/router";

import {Button, ContactForm, Faq, Footer, LeadSection, Nav, Slides, ThemeChanger, Partners} from "../src/components";

import {withPublic} from "../src/routes";

const Home = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <main className="min-h-screen mx-auto">
                <Nav/>
                <ThemeChanger/>
                <header className="bg-white dark:bg-gray-900">
                    <div className="container px-6 pb-5 w-11/12 mx-auto ">
                        <div className="items-center flex justify-between flex-col-reverse lg:flex-row">
                            <div className="w-full lg:w-2/5">
                                <div className="lg:max-w-lg mt-8">
                                    <div className="prose prose-stone dark:prose-invert">
                                        <h1 className="">
                                            Welcome To Our <br/>
                                            <span className="text-green-700 dark:text-green-600 font-bold">
                      GeeksForGeeks Student Chapter KSRIET
                    </span>{" "}
                                        </h1>

                                        <p className="mb-4">
                                            GeeksforGeeks Student Chapters are university-based
                                            community chapters for students interested in Computer
                                            Science and want to make their career in this field. By
                                            joining a GeeksforGeeks student Chapter, students grow their
                                            knowledge in a peer-to-peer learning environment and build
                                            effective and optimised solutions for local businesses and their community.
                                        </p>
                                         <div className="mt-6 sm:-mx-2">
                            <Button className="bg-green-700 hover:bg-green-600" click={() => {
                                    router.push("/join");
                                }}
                            >
                                JOIN NOW
                            </Button>
                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center w-full my-6 lg:mt-0 lg:w-1/2">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0gAMhAYvUr30Z39Xj8EcFdiWVqRFYXybYvke_gFlZNg&s" ></img>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="bg-gray-900 dark:bg-white">
                    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                        <h2 className="text-3xl font-semibold tracking-tight dark:text-gray-700 sm:text-4xl text-white">
                            Become the part of GeeksForGeeks Community<br/>
                            <span className="text-green-700 dark:text-green-600 font-bold uppercase">
                GFG Student&nbsp;Chapter of&nbsp;KSR Institute For Engineering And Technology
              </span>{" "}
                        </h2>

                        <div className="mt-6 sm:-mx-2">
                            <Button
                                className="bg-green-700 hover:bg-green-600"
                                click={() => {
                                    router.push("/join");
                                }}
                            >
                                JOIN NOW
                            </Button>
                        </div>
                    </div>
                </section>

        <Slides />
        <LeadSection/>
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        
        <Faq />
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <Partners />
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
                <ContactForm/>
                <Footer/>
            </main>
        </>
    );
};

export default withPublic(Home);
