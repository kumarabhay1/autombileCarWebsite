import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Detailing Gallery | Before & After Transformations | Indianapolis",
  description: "Browse our portfolio of high-end mobile car detailing, ceramic coating, interior restoration, and paint correction in Indianapolis & Greenwood, IN.",
  keywords: [
    "car detailing gallery Indianapolis",
    "before and after detailing",
    "ceramic coating photos Indianapolis"
  ],
  alternates: {
    canonical: "https://detailingbulls.us/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
