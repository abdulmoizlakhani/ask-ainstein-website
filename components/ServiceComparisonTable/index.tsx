import React from "react";
import Image from "next/image";
import data from "@/data/landingPage/data.json";
import ServiceComparisonTableComponent from "./TableComponent";
import TopImageCard from "../Cards/TopImageCard";

const ComparisionSection = () => {
  const { comparisionSection } = data;
  return (
    <section className="bg-purple-light px-4 shadow-dark relative flex gap-8 md:gap-[3.75rem]  flex-col pt-24 md:pt-36 items-center">
      {/* TOP COMPONENT */}

      <TopImageCard image={comparisionSection.sectionTitle.images} />
      {/* Main Heading */}
      <h1 className="text-xl md:text-3xl font-bold text-center">
        {comparisionSection.sectionTitle.mainHeading}
      </h1>

      {/* Comparison Table */}

      <ServiceComparisonTableComponent
        tableData={comparisionSection.comparisonTable}
      />
    </section>
  );
};

export default ComparisionSection;
