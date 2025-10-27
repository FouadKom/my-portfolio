import Image from "next/image";
import Link from "next/link";
import { CertificationInterface } from "@/config/certifications";
import { Icons } from "@/components/common/icons";

interface CertificationCardProps {
  certifications: CertificationInterface[];
}

export default function CertificationCard({ certifications }: CertificationCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {certifications.map((cert, id) => {
        // Shared card content
        const CardContent = (
          <div className="relative rounded-lg border bg-background p-4 hover:bg-accent hover:text-accent-foreground transition cursor-default">
            
            {cert.link && (
              <Icons.externalLink
                size={28}
                className="absolute bottom-3 right-3 bg-background rounded-full p-1 text-muted-foreground"
              />
            )}

            <div className="flex flex-col gap-4 h-[200px] p-4">
              <div className="flex justify-between items-center">
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

              <h3 className="font-bold text-base">{cert.title}</h3>

              <p className="text-sm text-muted-foreground">
                {cert.description}
              </p>

              <p className="text-sm font-medium">{cert.issuer}</p>
            </div>
          </div>
        );

        // ✅ If link exists → clickable card
        if (cert.link) {
          return (
            <Link href={cert.link} target="_blank" key={id}>
              {CardContent}
            </Link>
          );
        }

        // 🚫 No link → render card as static div
        return (
          <div key={id}>
            {CardContent}
          </div>
        );
      })}
    </div>
  );
}
