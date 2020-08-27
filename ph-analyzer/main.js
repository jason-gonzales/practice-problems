function phAnalyzer(pH) {
  if(pH >= 8) {
    return "Alkaline";
  } else if(pH >= 5) {
    return "Neutral";
  } else {
    return "Acid";

  }
}
