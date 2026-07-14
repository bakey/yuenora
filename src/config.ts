import { doctors } from "@/data/doctors";

export interface SiteConfig {
  language: string;
  brandName: string;
  copyright: string;
}

export interface NavigationConfig {
  infoLinkLabel: string;
}

export interface ContactEntry {
  label: string;
  value: string;
  href?: string;
}

export interface InfoPageConfig {
  backLinkLabel: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  contactLabel: string;
  contactEntries: ContactEntry[];
}

export interface OverlayConfig {
  frameDetailLabel: string;
  fileLabel: string;
  seriesLabel: string;
  closeLabel: string;
}

export interface ImageItem {
  src: string;
  category: string;
  title: string;
  description: string;
}

export interface GalleryConfig {
  images: ImageItem[];
}

export const siteConfig: SiteConfig = {
  language: "en",
  brandName: "缘灵",
  copyright: "\u00A9 2026 缘灵",
};

export const navigationConfig: NavigationConfig = {
  infoLinkLabel: "",
};

export const infoPageConfig: InfoPageConfig = {
  backLinkLabel: "",
  eyebrow: "",
  title: "",
  paragraphs: [],
  contactLabel: "",
  contactEntries: [],
};

export const overlayConfig: OverlayConfig = {
  frameDetailLabel: "",
  fileLabel: "",
  seriesLabel: "",
  closeLabel: "Close",
};

// Build gallery images from doctor data for the vortex
export const galleryConfig: GalleryConfig = {
  images: doctors.map((d) => ({
    src: d.image,
    category: d.specialty,
    title: d.name,
    description: `${d.title} at ${d.hospitalTier}. ${d.experience} of experience. Expert in ${d.expertise.join(", ")}.`,
  })),
};
