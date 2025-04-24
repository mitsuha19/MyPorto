"use client";

import * as React from "react";
import { Box, Center, Text } from "@chakra-ui/react";

export type PdfThumbProps = {
  file: string;
};

export function PdfThumb({ file }: PdfThumbProps) {
  // encodeURI untuk menghindari masalah spasi/karakter khusus
  const src = encodeURI(`${file}#page=1&view=FitH`);

  return (
    <Box
      as="object"
      data={src}
      type="application/pdf"
      width="100%"
      height="100%"
    >
      <Center h="100%" bg="gray.50">
        <Text>Preview PDF tidak tersedia</Text>
      </Center>
    </Box>
  );
}
