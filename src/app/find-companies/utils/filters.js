import {
  companiesData,
  staticIndustryLabels,
  staticCompanySizeLabels,
} from "./constants";

const getCountMap = (key) => {
  const countMap = {};

  // Initialize all possible labels with 0 count
  const allLabels =
    key === "industry" ? staticIndustryLabels : staticCompanySizeLabels;

  allLabels.forEach((label) => {
    countMap[label] = 0;
  });

  // Count actual occurrences in the data
  companiesData.forEach((item) => {
    const value = item[key];
    if (value && countMap.hasOwnProperty(value)) {
      countMap[value]++;
    }
  });

  return countMap;
};

export const getIndustryOptions = () => {
  const countMap = getCountMap("industry");
  return staticIndustryLabels.map((label) => ({
    label,
    count: countMap[label] || 0,
  }));
};

export const getCompanySizeOptions = () => {
  const countMap = getCountMap("companySize");
  return staticCompanySizeLabels.map((label) => ({
    label,
    count: countMap[label] || 0,
  }));
};
