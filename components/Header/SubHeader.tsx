import TextHighlight from "@/components/TextHighlight";
import data from "@/data/landingPage/data.json";

const SubHeader = () => {
  const subHeaderData = data.header.subHeading;
  return (
    <p className="bg-yellow-500 p-4 text-center text-[0.625rem] font-semibold tracking-tight text-[#000000] md:text-lg">
      <TextHighlight
        text={subHeaderData.text}
        variant="none"
        highlightText={subHeaderData.highlight}
        className="text-blue-900"
      />
    </p>
  );
};

export default SubHeader;
