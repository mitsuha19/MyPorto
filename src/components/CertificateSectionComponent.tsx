import * as React from "react";
import { motion } from "framer-motion";
import { Box, Container, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { SectionDescription, SectionSubtitle, SectionTitle } from "@/fragments";
import { CertificateCard } from "@/fragments";
import { certificateList } from "@/constants";
import SectionLayout from "@/layouts/SectionLayout";
import "swiper/css";
import "swiper/css/navigation";
import { fadeInTransition, staggeredContainer } from "@/utils";

function CertificateSectionComponent(): React.JSX.Element {
  return (
    <Box
      as="section"
      id="certificates"
      width="100vw"
      paddingTop="7.5rem"
      paddingBottom="1rem"
    >
      <SectionTitle title="Certificates" />

      <Container
        as={motion.div}
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true, amount: 0.25 }}
        initial="hidden"
        whileInView="show"
        maxWidth={{ base: "container.lg", lg: "75rem" }}
      >
        <Flex
          as={motion.div}
          variants={fadeInTransition("up", "tween", 0.1, 1.1)}
          direction="column"
          rowGap={{ base: 3, lg: 5 }}
        >
          <SectionSubtitle>University Certificates 🎓</SectionSubtitle>
          <SectionDescription>
            A showcase of certificates I have earned throughout my university
            studies, including coursework, workshops, and academic projects.
          </SectionDescription>
        </Flex>

        <Box
          as={motion.div}
          variants={fadeInTransition("up", "tween", 0.2, 1.2)}
          marginTop={12}
          paddingBottom={16}
        >
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              365: { slidesPerView: 1, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 32 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            style={{ paddingBottom: 64 }}
            grabCursor
          >
            {certificateList.map((cert, idx) => (
              <SwiperSlide key={`${cert.title}-${idx}`}>
                <CertificateCard {...cert} />
              </SwiperSlide>
            ))}
            <Box>
              <BsChevronRight className="swiper-button-next" />
              <BsChevronLeft className="swiper-button-prev" />
            </Box>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}

export default SectionLayout(CertificateSectionComponent, "certificates");
