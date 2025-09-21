const factCheckers = [
  { name: "BOOM Live", url: "boomlive.in" },
  { name: "Alt News", url: "altnews.in" },
  { name: "Reuters Fact Check", url: "reuters.com/fact-check" },
  { name: "AFP Fact Check", url: "factcheck.afp.com" },
  { name: "PolitiFact", url: "politifact.com" },
  { name: "Factly", url: "factly.in" },
  { name: "Snopes", url: "snopes.com" }
];

document.getElementById("checkBtn").addEventListener("click", () => {
  const claim = document.getElementById("claimInput").value.trim();
  const resultsDiv = document.getElementById("results");
  const loading = document.getElementById("loading");

  resultsDiv.innerHTML = "";
  if (!claim) {
    resultsDiv.innerHTML = "<p>Please enter a claim first.</p>";
    return;
  }

  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");
    factCheckers.forEach(source => {
      const searchUrl = https://www.google.com/search?q=${encodeURIComponent(claim)}+site:${source.url};
      const link = document.createElement("a");
      link.href = searchUrl;
      link.target = "_blank";
      link.className = "result-link";
      link.textContent = Search on ${source.name};
      resultsDiv.appendChild(link);
    });
  }, 800); // small fake delay for loading effect
});
