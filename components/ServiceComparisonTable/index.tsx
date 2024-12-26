import React from "react";

import FirstPrinciplesCard from "@/components/Cards/FirstPrincipleCard";
import TopImageCard from "@/components/Cards/TopImageCard";
import ServiceComparisonTableComponent from "@/components/ServiceComparisonTable/TableComponent";
import data from "@/data/landingPage/data.json";

const ComparisionSection = () => {
  const { comparisionSection } = data;

  return (
    <section className="relative mb-6 flex h-[94rem] flex-col items-center gap-8 bg-purple-light px-4 pt-24 shadow-dark sm:h-[92rem] md:h-[120rem] md:gap-[3.75rem] md:pt-36 lg:h-[70.3125rem]">
      <TopImageCard image={comparisionSection.sectionTitle.images} />
      <h1 className="text-center text-xl font-bold md:text-3xl">
        {comparisionSection.sectionTitle.mainHeading}
      </h1>
      <ServiceComparisonTableComponent
        tableData={comparisionSection.comparisonTable}
      />
      <FirstPrinciplesCard />
    </section>
  );
};

export default ComparisionSection;
