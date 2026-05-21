import puppeteer from "puppeteer";

const url = "https://becomehigherhuman.com/";
const outputPath = "/Users/edmo/Desktop/becomehigherhuman.com/tmp/cursos-section.png";

const browser = await puppeteer.launch({
  headless: "new",
  defaultViewport: {
    width: 1440,
    height: 2200,
    deviceScaleFactor: 1.5,
  },
});

try {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2", timeout: 120000 });
  await page.evaluate(() => window.scrollTo(0, 0));

  await page.waitForFunction(() => {
    const headings = [...document.querySelectorAll("h2, h3")];
    return headings.some((node) =>
      /curso planeado mi 2026/i.test(node.textContent || "")
    );
  });

  const clip = await page.evaluate(() => {
    const findHeading = (pattern) =>
      [...document.querySelectorAll("h2, h3")].find((node) =>
        pattern.test((node.textContent || "").trim())
      );

    const firstCourseHeading = findHeading(/curso planeado mi 2026/i);
    const testimonialsHeading = findHeading(/testimonios/i);

    if (!firstCourseHeading || !testimonialsHeading) {
      return null;
    }

    const top = firstCourseHeading.getBoundingClientRect().top + window.scrollY - 80;
    const bottom =
      testimonialsHeading.getBoundingClientRect().top + window.scrollY - 40;

    return {
      x: 0,
      y: Math.max(0, top),
      width: document.documentElement.clientWidth,
      height: Math.max(200, bottom - top),
    };
  });

  if (!clip) {
    throw new Error("No pude ubicar la sección de cursos.");
  }

  await page.screenshot({
    path: outputPath,
    clip,
  });

  console.log(outputPath);
} finally {
  await browser.close();
}
