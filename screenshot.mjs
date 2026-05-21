import puppeteer from 'puppeteer'
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })

async function cropLive(label, clipY, height) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1400, height: 900 })
  await page.goto('https://becomehigherhuman.com/', { waitUntil: 'networkidle2', timeout: 40000 })
  await new Promise(r => setTimeout(r, 2000))
  await page.addStyleTag({ content: `*, *::before, *::after { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; visibility: visible !important; }` })
  await new Promise(r => setTimeout(r, 400))
  await page.screenshot({ path: `screenshots/${label}.png`, clip: { x: 0, y: clipY, width: 1400, height } })
  console.log(`Saved ${label}.png`)
  await page.close()
}
async function cropLocal(label, clipY, height) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1400, height: 900 })
  await page.goto('http://localhost:5175/', { waitUntil: 'networkidle2', timeout: 40000 })
  await new Promise(r => setTimeout(r, 1500))
  await page.screenshot({ path: `screenshots/${label}.png`, clip: { x: 0, y: clipY, width: 1400, height } })
  console.log(`Saved ${label}.png`)
  await page.close()
}

await cropLive('live-founder-final',  3180, 1350)
await cropLocal('local-founder-final', 2590, 1350)
await browser.close()
console.log('Done')
