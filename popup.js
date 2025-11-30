let queriesEl = document.getElementById("queries");
let urlsEl = document.getElementById("urls");

chrome.runtime.sendMessage({ event: "getData" });

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.event === "dataResponse") {
    queriesEl.textContent = (msg.searchQueries || []).join("\n");
    urlsEl.textContent = (msg.searchUrls || []).join("\n");
  }
});

document.getElementById("copyQueries").onclick = () => {
  navigator.clipboard.writeText(queriesEl.textContent);
};

document.getElementById("copyUrls").onclick = () => {
  navigator.clipboard.writeText(urlsEl.textContent);
};

