import { chromium } from "playwright";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

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
  page.on("requestfailed", (req) => {
    console.log("[requestfailed]", req.url(), req.failure()?.errorText);
  });

  try {
    console.log("Opening www.yuenora.com...");
    await page.goto("https://www.yuenora.com/", { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(3000);

    // Scroll to DIY section
    await page.evaluate(() => document.getElementById("diy-entry")?.scrollIntoView());
    await page.waitForTimeout(2000);

    // Click "Start Custom Design" gold button in DIY entry
    const startButton = page.locator("#diy-entry .gold-button").first();
    console.log("Start button visible:", await startButton.isVisible().catch(() => false));
    console.log("Start button text:", await startButton.textContent().catch(() => "none"));
    if (await startButton.isVisible().catch(() => false)) {
      await startButton.click();
      console.log("Clicked Start Custom Design");
      await page.waitForTimeout(2000);
    }

    // Click "Open Full Custom Builder"
    const builderButton = page.locator("button.gold-button:has-text('Open Full Custom Builder'), .tao-gift-result-actions .gold-button").first();
    console.log("Builder button visible:", await builderButton.isVisible().catch(() => false));
    if (await builderButton.isVisible().catch(() => false)) {
      await builderButton.click();
      console.log("Clicked Open Full Custom Builder");
      await page.waitForTimeout(5000);
    }

    // Click on white-jade material tab if present
    const tabs = await page.locator(".tao-main-material-tabs button").all();
    console.log("Found", tabs.length, "material tabs");
    for (const tab of tabs) {
      const text = await tab.textContent();
      console.log("Tab text:", text);
      if (text?.toLowerCase().includes("jade") || text?.includes("白玉") || text?.toLowerCase().includes("white jade")) {
        await tab.click();
        console.log("Clicked jade tab");
        break;
      }
    }
    await page.waitForTimeout(1000);

    // Click on a bead detail button
    const detailButtons = await page.locator(".tao-tray-card .tao-card-detail").all();
    console.log("Found", detailButtons.length, "detail buttons");
    if (detailButtons.length > 0) {
      await detailButtons[0].click();
      console.log("Clicked first detail button");
    }

    await page.waitForTimeout(15000);

    const info = await page.locator(".tao-detail-3d, .tao-3d-loading, .tao-3d-error").first().textContent().catch(() => "no info");
    console.log("Detail 3D info:", info);

    await page.screenshot({ path: "/Users/bakey/Workspace/dao/deliverables/app/scripts/test-diy-flicker.png", fullPage: true });
    await browser.close();
    process.exit(0);
  } catch (error) {
    console.error("Test failed:", error.message);
    await page.screenshot({ path: "/Users/bakey/Workspace/dao/deliverables/app/scripts/test-diy-flicker-failure.png", fullPage: true });
    await browser.close();
    process.exit(1);
  }
}

run();
