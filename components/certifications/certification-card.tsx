// components/certifications/certification-card.tsx

import Image from "next/image";
import Link from "next/link";
import { CertificationInterface } from "@/config/certifications";
import { Icons } from "@/components/common/icons";

interface CertificationCardProps {
  certifications: CertificationInterface[];
}

export default function CertificationCard({ certifications }: CertificationCardProps) {
  return (
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {certifications.map((cert, id) => {
        const CardContent = (
          <div className="relative rounded-lg border bg-background p-4 hover:bg-accent hover:text-accent-foreground transition flex flex-col gap-4 h-full">
            
            {/* Logo + Date */}
            <div className="flex flex-wrap justify-between items-center gap-2">
              {cert.logo && (
                <Image
                  src={cert.logo}
                  alt={cert.issuer}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              )}
              <span className="text-xs text-muted-foreground">{cert.date}</span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-base">{cert.title}</h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground break-words flex-1">
              {cert.description}
            </p>

            {/* Issuer / Company */}
            <p className="text-sm font-medium">{cert.issuer}</p>

            {/* External Link Icon */}
            {cert.link && (
              <Icons.externalLink
                size={28}
                className="absolute bottom-3 right-3 bg-background rounded-full p-1 cursor-pointer text-muted-foreground"
              />
            )}
          </div>
        );

        // Wrap with Link only if link exists
        return cert.link ? (
          <Link href={cert.link} target="_blank" key={id} className="flex h-full">
            {CardContent}
          </Link>
        ) : (
          <div key={id} className="flex h-full">
            {CardContent}
          </div>
        );
      })}
    </div>
  );
}
