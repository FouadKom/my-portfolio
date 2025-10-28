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

            {/* Date */}
            <span className="text-xs text-muted-foreground">{cert.date}</span>

            {/* Title */}
            <h3 className="font-bold text-base">{cert.title}</h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground break-words flex-1">
              {cert.description}
            </p>

            {/* Issuer + Small Logo */}
            <div className="flex items-center gap-2 mt-auto">
              {cert.logo && (
                <Image
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  width={24}
                  height={24}
                  className="rounded-full object-cover"
                />
              )}
              <p className="text-sm font-medium">{cert.issuer}</p>
            </div>

            {/* External Link Icon */}
            {cert.link && (
              <Icons.externalLink
                size={28}
                className="absolute bottom-3 right-3 bg-background rounded-full p-1 cursor-pointer text-muted-foreground"
              />
            )}
          </div>
        );

        // Wrap card in link only if it has a link
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