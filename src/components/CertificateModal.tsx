"use client";

import * as React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import PrimaryButton from "@/fragments/PrimaryButton";
import { PdfThumb } from "@/components/PdfThumb";
import { BiTime } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import type { Certificate } from "@/types";

type CertificateModalProps = Certificate & {
  isOpen: boolean;
  onClose: () => void;
};

export default function CertificateModal({
  title,
  description,
  thumbnailImage,
  issuedAt,
  issuerName,
  issuerLogo,
  isOpen,
  onClose,
}: CertificateModalProps) {
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  const formattedIssuedAt = new Date(issuedAt).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box mb={4} h="300px" borderRadius="md" overflow="hidden">
            {thumbnailImage.endsWith(".pdf") ? (
              <PdfThumb file={thumbnailImage} />
            ) : (
              <Image
                src={thumbnailImage}
                alt={title}
                objectFit="cover"
                w="100%"
                h="100%"
              />
            )}
          </Box>

          <Flex mb={4} justify="space-between" align="center">
            <Text display="inline-flex" alignItems="center" columnGap={1}>
              <BiTime /> {formattedIssuedAt}
            </Text>
            <Flex align="center" columnGap={2}>
              <Image
                src={issuerLogo}
                alt={`${issuerName} logo`}
                boxSize={8}
                borderRadius="full"
              />
              <Box>
                <Text fontWeight="semibold">{issuerName}</Text>
                <Text fontSize="sm" color="gray.500">
                  Penerbit
                </Text>
              </Box>
            </Flex>
          </Flex>

          <Text whiteSpace="pre-wrap">{description.join("\n\n")}</Text>
        </ModalBody>

        <ModalFooter>
          <PrimaryButton
            as="a"
            href={thumbnailImage}
            target="_blank"
            rel="noopener noreferrer"
            variant="solid"
            fontSize="0.75rem"
            rightIcon={<BsArrowRight fontSize="1rem" />}
          >
            Lihat Sertifikat
          </PrimaryButton>
          <PrimaryButton
            ml={2}
            variant="ghost"
            fontSize="0.75rem"
            onClick={onClose}
          >
            Tutup
          </PrimaryButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
