import { chromium } from "playwright";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  const logs = [];
  page.on("console", (msg) => {
    const text = msg.text();
    logs.push(`[${msg.type()}] ${text}`);
    console.log(`[${msg.type()}] ${text}`);
  });
  page.on("pageerror", (err) => {
    console.log("[pageerror]", err.message);
    logs.push(`[pageerror] ${err.message}`);
  });

  try {
    await page.goto("file:///tmp/test-glb.html", { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(5000);

    const info = await page.locator("#info").textContent();
    console.log("Final info:", info);

    await page.screenshot({ path: "/Users/bakey/Workspace/dao/deliverables/app/scripts/test-glb-load.png", fullPage: false });
    await browser.close();

    if (info?.includes("Loaded")) {
      console.log("SUCCESS: model loaded");
      process.exit(0);
    } else {
      console.log("FAILED:", info);
      process.exit(1);
    }
  } catch (error) {
    console.error("Test failed:", error.message);
    await browser.close();
    process.exit(1);
  }
}

run();
