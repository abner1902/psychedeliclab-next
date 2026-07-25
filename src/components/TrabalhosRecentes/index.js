import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

const releases = [
  {
    cover: "/releases/natureza-tecnologica.webp",
    category: "V.A. / Compilation (Psychedelic Trance)",
    title: "V.A. — Natureza Tecnológica",
    curadoria: "Compiled by Irev",
    selo: "Agya Sounds Recs",
    description: "Álbum com 10 faixas explorando paisagens sonoras imersivas e orgânicas da psicodelia.",
    url: "https://agyasounds.bandcamp.com/album/v-a-natureza-tecnologica-compiled-by-irev"
  },
  {
    cover: "/releases/fungus-slug.webp",
    category: "V.A. / Compilation (Darkpsy / Forest / Trance)",
    title: "V.A. — Fungus Slug",
    curadoria: "Compiled by Ovni Messenger",
    selo: "Agya Sounds Recs",
    description: "Compilação pesada com 12 faixas focada em low-end denso e atmosfera underground de pista.",
    url: "https://agyasounds.bandcamp.com/album/v-a-fungus-slug-compiled-by-ovni-messenger"
  },
  {
    cover: "/releases/story-magician.webp",
    category: "Artist EP (Forest/Twisted)",
    title: "Story Magician — EP",
    curadoria: null,
    selo: "Agya Sounds Recs",
    description: "Masterização focada em clareza de transientes e punch, mantendo a narrativa psicodélica intacta.",
    url: "https://agyasounds.bandcamp.com/album/story-magician-ep"
  },
  {
    cover: "/releases/seeds-of-a-sunlit-mind.webp",
    category: "Artist EP (Psytrance / Experimental)",
    title: "Seeds of a Sunlit Mind — EP",
    curadoria: null,
    selo: "Agya Sounds Recs",
    description: "Masterização focada em clareza de transientes e punch, mantendo a narrativa psicodélica intacta.",
    url: "https://agyasounds.bandcamp.com/album/seeds-of-a-sunlit-mind-ep"
  }
]

const TrabalhosRecentes = () => {
  return (
    <SectionWrapper
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <MainBox>
        <SectionHeader>
          <p className="section-eyebrow">MASTERIZAÇÕES E CURADORIAS RECENTES</p>
          <h2 className="section-title">TRABALHOS RECENTES &amp; RELEASES</h2>
        </SectionHeader>

        <ReleasesGrid>
          {releases.map((release) => (
            <ReleaseCard
              key={release.title}
              href={release.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
            >
              <CoverWrapper>
                <img
                  src={release.cover}
                  alt={release.title}
                  onError={(e) => { e.target.src = "https://placehold.co/262x262" }}
                />
              </CoverWrapper>

              <ReleaseInfo>
                <p>
                  <strong>Categoria / Gênero:</strong>
                  <br />
                  {release.category}
                </p>

                <p>
                  <strong>Título do Release:</strong>
                  <br />
                  {release.title}
                </p>

                {release.curadoria && (
                  <p>
                    <strong>Curadoria: </strong>
                    {release.curadoria}
                  </p>
                )}

                <p>
                  <strong>Selo: </strong>
                  {release.selo}
                </p>

                <p>
                  <strong>Descrição: </strong>
                  {release.description}
                </p>
              </ReleaseInfo>
            </ReleaseCard>
          ))}
        </ReleasesGrid>
      </MainBox>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  padding: 0 16px;
`

const MainBox = styled.div`
  width: 100%;
  max-width: 1278px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 30px;
  border: 1px solid rgba(250, 204, 21, 0.4);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
  padding: 50px 40px;

  @media (max-width: 991px) {
    padding: 30px 16px;
  }
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;

  .section-eyebrow {
    font-size: 1rem;
    font-weight: 500;
    color: #facc15;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 14px;
    font-family: 'Metropolis', sans-serif;
    @media (max-width: 767px) {
      font-size: 0.85rem;
      letter-spacing: 2px;
    }
  }

  .section-title {
    font-size: 2.618rem;
    font-weight: 900;
    color: #ffffff;
    letter-spacing: -1px;
    max-width: 900px;
    margin: 0 auto;
    font-family: 'Metropolis', sans-serif;
    @media (max-width: 767px) {
      font-size: 1.618rem;
    }
  }
`

const ReleasesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const ReleaseCard = styled(motion.a)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  text-decoration: none;
  cursor: pointer;
`

const CoverWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(250, 204, 21, 0.25);
  transition: border-color 0.35s ease, box-shadow 0.35s ease;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    display: block;
  }

  &:hover {
    border-color: rgba(250, 204, 21, 0.9);
    box-shadow: 0 0 25px rgba(250, 204, 21, 0.35);

    img {
      transform: scale(1.08);
    }
  }
`

const ReleaseInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    color: #ffffff;
    font-size: 0.85rem;
    line-height: 1.5;
    font-weight: 400;
    margin: 0;
  }

  strong {
    color: #ffffff;
    font-weight: 700;
  }
`

export default TrabalhosRecentes
