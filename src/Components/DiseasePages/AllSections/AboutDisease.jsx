import React from "react";
import herniasurgery from "../../../Assests/herniasurgery.png";

const AboutDisease = ({content}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-0 bg-[#ecf7fc]">
        {/* Left side details */}
      <div className="py-6 px-5 md:px-16">
        <h1 className="text-2xl font-bold mb-4">{content.aboutDisease.diseaseHeader}</h1>
        <p className="mb-4">
        {content.aboutDisease.details}
        </p>
        <h1 className="text-xl font-semibold mb-2">{content.aboutDisease.symptoms.symptomHeader}</h1>
        <ul className="list-disc px-5 mb-5">
          {
            content.aboutDisease.symptoms.symptomsList.map((symptoms, idx) => 
            <li key={idx}>{symptoms}</li>
            )
          }
        </ul>

        <h3 className="text-xl font-semibold">{content.aboutDisease.diagnosis.diagnosisHeader}</h3>
        <p className="mb-5">
        {content.aboutDisease.diagnosis.details}
        </p>

        <div className="flex flex-col md:flex-row items-center gap-3 w-full">
          <button className="w-full border border-[#00a0aa] px-4 py-2 rounded-md text-[#00a0aa]">
            Call now +98 765 432 10
          </button>
          <button className="w-full bg-[#00a0aa] px-4 py-2 rounded-md text-white border border-[#00a0aa]">
            Book Your Appoinment
          </button>
        </div>
      </div>

      {/* Right side image */}
      <div className="flex justify-end">
        <img src={herniasurgery} alt="" />
      </div>
    </div>
  );
};

export default AboutDisease;
