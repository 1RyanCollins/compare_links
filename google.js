// Capture Google SERP links
const googleLinks = Array.from(document.querySelectorAll('a'))
    .map(a => a.href)
    .filter(href => href.startsWith('http') && !href.includes('google.com'));

chrome.storage.local.set({ googleLinks });
console.log("Captured Google SERP links:", googleLinks);
