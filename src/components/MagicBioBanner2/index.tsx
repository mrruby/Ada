import Typography from "components/shared/Typography"
import React from "react"
import Section from "../shared/Section"
import PersonBox from "./PersonBox"

const peopleContent = [
  {
    name: "Adrianna Promis-Urbas",
    title: "Specjalistka od kampanii reklamowych z 10-letnim doświadczeniem",
    description: (
      <>
        Pomogłam ponad <b>200 kobietom</b> zwiększyć zyski i satysfakcję z
        prowadzenia własnej firmy. Specjalizuję się w przekształcaniu
        chaotycznych działań marketingowych w precyzyjne{" "}
        <b>systemy generujące przewidywalne wyniki,</b> nawet w niepewnych
        warunkach rynkowych.
      </>
    ),
    img: "ada",
  },
  {
    name: "Nicola Kut",
    title: "Koordynatorka projektów i specjalistka od reklam",
    description: (
      <>
        Nadzoruję realizację projektów, dbając o każdy szczegół i dotrzymanie
        terminów. Specjalizuję się <b>w pilnowaniu harmonogramów</b> i
        zapewnianiu, że każdy element pracy jest wykonany zgodnie z planem, co
        pozwala całemu zespołowi <b>działać sprawnie i efektywnie.</b>
      </>
    ),
    img: "nicola",
  },
  {
    name: "Dorota Woźniak",
    title: "Projektantka graficzna i architektka z ilustratorską pasją",
    description: (
      <>
        Zaprojektowałam <b>setki</b> kreacji reklamowych. Specjalizuję się w
        tworzeniu profesjonalnych materiałów wizualnych{" "}
        <b>dla social media i kampanii adsowych,</b> przekształcając
        abstrakcyjne idee w przyciągające wzrok projekty, które realizują cele
        biznesowe.
      </>
    ),
    img: "dorota",
  },
  {
    name: "Anna Ertekin",
    title:
      "Koordynatorka projektów i aspirująca analityczka biznesowMenedżerka projektów i kampanii reklamowych",
    description: (
      <>
        Wspieram marki <b>w codziennych działaniach marketingowych,</b> dbając o
        to, by pomysły, kampanie i strategie były nie tylko dobrze zaplanowane,
        ale także skutecznie wdrażane.{" "}
        <b>
          Specjalizuję się w łączeniu działań marketingowych w spójną całość:
        </b>{" "}
        od pomysłu aż po analizę wyników.
      </>
    ),
    img: "anna",
  },
  {
    name: "Papajka",
    title: "Asystentka Nicoli",
    description: <></>,
    img: "papajka",
  },
]

const MagicBioBanner2 = () => {
  return (
    <>
      <Section>
        <div className="text-center">
          <div className="border-ada-orange border rounded-3xl max-w-[320px] mx-auto">
            <Typography
              variant="h2"
              className="p-2 font-anton font-normal text-center text-ada-orange"
            >
              Kim jesteśmy?
            </Typography>
          </div>
          <div className="flex flex-col md:flex-row gap-4 pt-8 justify-center">
            {peopleContent.slice(0, 2).map((item, i) => (
              <PersonBox
                key={i}
                name={item.name}
                title={item.title}
                description={item.description}
                img={item.img}
              />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4 pt-8 mb-2 justify-center">
            {peopleContent.slice(2, 4).map((item, i) => (
              <PersonBox
                key={i}
                name={item.name}
                title={item.title}
                description={item.description}
                img={item.img}
              />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4 pt-2 mb-8 justify-center relative">
            {[peopleContent[4]].map((item, i) => (
              <PersonBox
                key={i}
                name={item.name}
                title={item.title}
                description={item.description}
                img={item.img}
              />
            ))}
            <div className="absolute top-0 left-2/3 -translate-x-2/3">
              <svg
                width="78"
                height="84"
                viewBox="0 0 78 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75059 76.2457C2.43674 76.0212 3.10625 75.7546 3.75759 75.4468C4.41009 75.1394 5.041 74.7935 5.64958 74.4074C6.25816 74.0213 6.84025 73.6001 7.3962 73.1426C7.95139 72.6835 8.4763 72.1931 8.9713 71.6703C9.46516 71.147 9.92533 70.595 10.3507 70.014C10.7756 69.4341 11.162 68.8289 11.5116 68.2003C11.8612 67.5717 12.1704 66.9236 12.4387 66.257C12.7062 65.5888 12.9322 64.9083 13.115 64.2124C13.6897 62.0563 16.9813 63.1534 16.4115 65.2946C15.9452 67.0239 15.2602 68.6624 14.3568 70.2091C13.4523 71.7554 12.3614 73.1587 11.0827 74.4158C15.7978 73.2625 20.3725 71.7066 24.8091 69.7487C27.9917 68.3429 31.0729 66.7439 34.0523 64.9528C37.0321 63.1605 39.8878 61.1901 42.6183 59.0412C45.3487 56.8924 47.9334 54.581 50.3709 52.108C52.8095 49.6353 55.0831 47.0202 57.1905 44.2624C59.4885 41.2332 61.5693 38.0622 63.4336 34.7509C65.2984 31.4384 66.9302 28.0167 68.3287 24.4831C69.726 20.9491 70.8788 17.3374 71.7847 13.6471C72.6895 9.95648 73.3412 6.22181 73.739 2.4416C73.9586 0.247083 77.4296 0.407649 77.2048 2.61809C77.0522 4.11394 76.8616 5.60611 76.6306 7.09384C76.4011 8.5808 76.1323 10.0599 75.825 11.5327C75.5189 13.0058 75.1728 14.4696 74.7889 15.9248C74.4053 17.3788 73.9844 18.8231 73.5254 20.2562C73.0667 21.6881 72.5703 23.1075 72.0372 24.515C71.5045 25.9213 70.9344 27.3141 70.3291 28.6903C69.7235 30.0677 69.0816 31.4281 68.4046 32.7719C67.7276 34.1157 67.0162 35.4407 66.27 36.748C65.5242 38.0541 64.7444 39.3402 63.9317 40.6068C63.1179 41.8729 62.272 43.1172 61.3939 44.3396C60.5158 45.562 59.6064 46.7602 58.6652 47.9354C57.724 49.1106 56.7529 50.2609 55.7513 51.3847C54.7503 52.5101 53.7207 53.6071 52.6616 54.6781C51.6036 55.7494 50.5169 56.7924 49.4041 57.8067C48.2909 58.8221 47.152 59.8077 45.9874 60.7634C44.8229 61.7191 43.6341 62.6442 42.4204 63.5372C37.9416 66.7941 33.1964 69.6069 28.1834 71.9727C23.1703 74.3386 17.9786 76.2174 12.6083 77.6092C16.3914 78.3409 20.1124 79.3156 23.7692 80.5325C25.8913 81.2291 24.81 84.5229 22.6927 83.8114C15.9812 81.5601 9.09548 80.1752 2.03683 79.657C-0.0246556 79.5057 -0.0569161 76.8076 1.75059 76.2457Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default MagicBioBanner2
