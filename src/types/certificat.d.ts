import type { Author } from "./author";

export interface Certificate {
  title: string;
  description: string[];
  thumbnailImage: string;
  issuedAt: Date | string;
  issuerName: string;
  issuerLogo: string;
}
