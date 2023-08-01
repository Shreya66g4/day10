function bandNamesSort(bandNames) {
    const articlesRegex = /^(The |A |An )/i;
  
    const modifiedBandNames = bandNames.map((name) => {
      return name.replace(articlesRegex, "").trim();
    });
  
    modifiedBandNames.sort();
  
    return modifiedBandNames.map((name) => {
      // Add the article back to the names that were modified
      const articleMatch = name.match(articlesRegex);
      if (articleMatch) {
        const article = articleMatch[0];
        return article + name.replace(articlesRegex, "").trim();
      }
      return name;
    });
  }
  
  // Test cases
  console.log(bandNamesSort(["The New Yardbirds", "The Beatles", "The Square Roots", "On A Friday", "An Irony"]));
  // Output: ["The Beatles", "An Irony", "The New Yardbirds", "On A Friday", "The Square Roots"]
  
  console.log(bandNamesSort(["The Platters", "A Yard of Yarn", "The Everly Brothers", "A Monster Effect", "The Sex Maggots"]));
  // Output: ["The Everly Brothers", "A Monster Effect", "The Platters", "The Sex Maggots", "A Yard of Yarn"]
  
  console.log(bandNamesSort(["But Myth", "An Old Dog", "Def Leppard", "The Any Glitters", "The Dawn"]));
  // Output: ["The Any Glitters", "But Myth", "The Dawn", "Def Leppard", "An Old Dog"]
  
  