import { SectionTitle } from "@/app/components/section-title";
import { KnownTech } from "./known-tech";
import { FaReact } from "react-icons/fa";

export const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Competências" title="Conhecimentos" />

      <div>
        <KnownTech
          tech={{
            icon: <FaReact />,
            startDate: "2022-06-06",
            name: "React.js",
          }}
        />
      </div>
    </section>
  );
};
