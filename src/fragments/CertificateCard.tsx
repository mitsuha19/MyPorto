// src/fragments/CertificateCard.tsx
"use client";

import dynamic from "next/dynamic";
import * as React from "react";
import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  HStack,
  VStack,
  Avatar,
  Image, // ← import Image
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BiTime } from "react-icons/bi";
import type { Certificate } from "@/types";
import CertificateModal from "@/components/CertificateModal";

// dynamic import PdfThumb
const PdfThumb = dynamic(
  () => import("@/components/PdfThumb").then((m) => m.PdfThumb),
  { ssr: false, loading: () => <Box h="14rem" w="100%" /> }
);

export default function CertificateCard({
  title,
  description,
  thumbnailImage,
  issuedAt,
  issuerName,
  issuerLogo,
}: Certificate) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formattedIssuedAt =
    issuedAt instanceof Date
      ? issuedAt.toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : new Date(issuedAt).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });

  return (
    <>
      <Card
        h="100%"
        display="flex"
        flexDirection="column"
        bg="card"
        shadow="lg"
        transition="all 300ms"
        cursor="pointer"
        _hover={{ shadow: "2xl" }}
        onClick={onOpen}
      >
        <CardBody flex="1" display="flex" flexDirection="column" rowGap={4}>
          {/* 1. Thumbnail */}
          <AspectRatio ratio={4 / 3} w="100%">
            {thumbnailImage.endsWith(".pdf") ? (
              <Box
                as="object"
                data={encodeURI(`${thumbnailImage}#page=1&view=FitH`)}
                type="application/pdf"
                w="100%"
                h="100%"
                sx={{ objectFit: "cover" }}
              />
            ) : (
              <Image
                src={thumbnailImage}
                alt={title}
                objectFit="cover"
                w="100%"
                h="100%"
                transition="all 300ms"
                _groupHover={{ transform: "scale(1.05)" }}
              />
            )}
          </AspectRatio>

          {/* 2. Judul */}
          <Heading
            size="md"
            fontSize="1.25rem"
            fontWeight="semibold"
            mt={2}
            noOfLines={2}
            lineHeight="1.3"
            h="2.6rem"
            overflow="hidden"
          >
            {title}
          </Heading>

          {/* 3. Tanggal */}
          <Text
            color="secondary"
            fontSize="0.75rem"
            display="inline-flex"
            alignItems="center"
            columnGap={1}
          >
            <BiTime /> {formattedIssuedAt}
          </Text>

          {/* 4. Deskripsi singkat */}
          <Text color="secondary" noOfLines={2}>
            {description[0]}
          </Text>
        </CardBody>

        {/* 5. Footer dengan logo & nama penerbit */}
        <CardFooter pt={2} px={4} justify="flex-start">
          <HStack spacing={3}>
            <Avatar
              src={issuerLogo}
              name={issuerName}
              size="sm"
              showBorder
              borderColor="secondary"
            />
            <VStack spacing={0} align="start">
              <Text fontWeight="semibold" fontSize="sm" noOfLines={1}>
                {issuerName}
              </Text>
              <Text fontSize="xs" color="secondary">
                Penerbit
              </Text>
            </VStack>
          </HStack>
        </CardFooter>
      </Card>

      {/* Modal detail sertifikat */}
      <CertificateModal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        description={description}
        thumbnailImage={thumbnailImage}
        issuedAt={issuedAt}
        issuerName={issuerName}
        issuerLogo={issuerLogo}
      />
    </>
  );
}
