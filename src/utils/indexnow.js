// IndexNow API Key - Generate your own at https://www.bing.com/indexnow
// This is a placeholder - replace with your actual key
export const INDEXNOW_KEY = "dce85406568b45eb91038927933c14d8";

/**
 * Submit URLs to IndexNow for instant indexing on Bing, Yandex, and other search engines
 * @param {string|string[]} urls - Single URL or array of URLs to submit
 * @returns {Promise<boolean>} - Success status
 */
export async function submitToIndexNow(urls) {
  const urlArray = Array.isArray(urls) ? urls : [urls];
  const host = "https://www.nurtureehaven.com/"; 
  const keyLocation = `https://${host}/${INDEXNOW_KEY}.txt`;

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host: host,
        key: INDEXNOW_KEY,
        keyLocation: keyLocation,
        urlList: urlArray,
      }),
    });

    if (response.ok) {
      console.log("✅ Successfully submitted to IndexNow:", urlArray);
      return true;
    } else {
      console.error("❌ IndexNow submission failed:", response.status);
      return false;
    }
  } catch (error) {
    console.error("❌ IndexNow error:", error);
    return false;
  }
}

/**
 * Submit your homepage and key pages on initial load
 */
export function submitSiteToIndexNow() {
  const urls = [
    "https://www.nurtureehaven.com/",
    "https://www.nurtureehaven.com/#about",
    "https://www.nurtureehaven.com/#footer",
    // Add more URLs as you create new pages
  ];

  // Submit after page loads (don't block rendering)
  if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
      setTimeout(() => {
        submitToIndexNow(urls);
      }, 2000); // Wait 2 seconds after page load
    });
  }
}

// Usage instructions:
// 1. Generate your IndexNow API key at https://www.bing.com/indexnow
// 2. Replace INDEXNOW_KEY with your actual key
// 3. Create a file at /public/[your-key].txt containing just your key
// 4. Import and call submitSiteToIndexNow() in your main.jsx
// 5. Your site will be indexed within HOURS instead of weeks!
