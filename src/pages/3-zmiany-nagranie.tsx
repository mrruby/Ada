import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import CountdownTimer from "helpers/CountdownTimer"

const TrzyZmianyNagranie = (): JSX.Element => {
    return (
        <Layout>
            <MaxWithBgColorContainer bgColor="bg-linear2">
                <div className="flex flex-col items-center py-12 mt-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        3 zmiany w reklamach Twojego biznesu, które zadziałają w 2025 roku
                    </h1>
                    <CountdownTimer
                        text="Webinar znika za:"
                        targetDate={new Date("2025-01-28T23:59:00")}
                    />
                    <div className="block md:hidden w-full px-2 mb-8 mt-4">
                        <iframe
                            width="100%"
                            height="280"
                            src="https://www.youtube.com/embed/aZ4VBHpdiTs?si=a8bh0luPTarp9xpH"
                            title="3 zmiany w reklamach Twojego biznesu - nagranie webinar"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="hidden md:block w-full max-w-4xl mb-8 mt-4">
                        <iframe
                            width="100%"
                            height="600"
                            src="https://www.youtube.com/embed/aZ4VBHpdiTs?si=a8bh0luPTarp9xpH"
                            title="3 zmiany w reklamach Twojego biznesu - nagranie webinar"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <a
                        href="/magic"
                        className="bg-ada-pink7 hover:bg-ada-pink7 text-white font-bold py-3 px-6 rounded-full text-adaNav md:text-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Chcę ustawiać kampanie <br /> ze świetnymi wynikami!
                    </a>
                </div>
            </MaxWithBgColorContainer>
        </Layout>
    )
}

export const Head = () => <SEO title="3 zmiany - nagranie webinaru" />

export default TrzyZmianyNagranie
