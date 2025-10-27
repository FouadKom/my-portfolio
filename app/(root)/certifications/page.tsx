import { Metadata } from "next";
import PageContainer from "@/components/common/page-container";
import CertificationCard from "@/components/certifications/certification-card";
import { certifications } from "@/config/certifications";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.certifications.metadata.title,
  description: pagesConfig.certifications.metadata.description,
};

export default function CertificationsPage() {
  return (
    <PageContainer
      title={pagesConfig.certifications.title}
      description={pagesConfig.certifications.description}
    >
      <CertificationCard certifications={certifications} />
    </PageContainer>
  );
}
