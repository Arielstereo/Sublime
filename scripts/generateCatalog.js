// simple Node.js script to generate a PDF catalog from data.json
// run with: node scripts/generateCatalog.js

import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";

// load the product data
const dataPath = path.join(process.cwd(), "src", "data", "data.json");
const rawData = fs.readFileSync(dataPath, "utf-8");
const { products } = JSON.parse(rawData);

const outPath = path.join(process.cwd(), "public", "catalogo.pdf");
const doc = new PDFDocument({ autoFirstPage: false, margin: 50 });
const stream = fs.createWriteStream(outPath);
doc.pipe(stream);

// after title header, draw main table with single column rows and logo

function addPageHeader() {
  doc.addPage();
  // logo top left
  const logoPath = path.join(process.cwd(), "public", "logo.png");
  if (fs.existsSync(logoPath)) {
    try {
      doc.image(logoPath, doc.page.margins.left, doc.page.margins.top, {
        width: 50,
      });
    } catch {}
  }
  doc
    .fontSize(24)
    .text(
      "Catálogo Sublime",
      doc.page.margins.left + 60,
      doc.page.margins.top + 15,
    );
  doc.moveDown(3);
  // draw header row
  const tableLeft = doc.page.margins.left;
  const availableWidth =
    doc.page.width - doc.page.margins.left - doc.page.margins.right;
  const colWidths = {
    name: availableWidth * 0.2,
    desc: availableWidth * 0.4,
    price: availableWidth * 0.2,
    image: availableWidth * 0.2,
  };
  doc.fontSize(12).font("Helvetica-Bold");
  const headerY = doc.y;
  doc.text("Nombre", tableLeft, headerY, {
    width: colWidths.name,
    align: "left",
  });
  doc.text("Descripción", tableLeft + colWidths.name, headerY, {
    width: colWidths.desc,
    align: "left",
  });
  doc.text("Precio", tableLeft + colWidths.name + colWidths.desc, headerY, {
    width: colWidths.price,
    align: "left",
  });
  doc.text(
    "Imagen",
    tableLeft + colWidths.name + colWidths.desc + colWidths.price,
    headerY,
    { width: colWidths.image, align: "left" },
  );
  doc.moveDown();
  doc.font("Helvetica");
  return { colWidths, availableWidth };
}

let { colWidths, availableWidth } = addPageHeader();
let currentY = doc.y;
let rowCount = 0;

products.forEach((p) => {
  // measure height
  const textWidth = colWidths.name;
  const hName = doc.heightOfString(p.name, { width: textWidth });
  const hDesc = doc.heightOfString(p.fullDescription || "", {
    width: colWidths.desc,
  });
  // price cell may include bulk price text
  const priceText =
    (p.price || "") + (p.bulkPrice ? `\nmayor: ${p.bulkPrice}` : "");
  const hPrice = doc.heightOfString(priceText, { width: colWidths.price });
  const imgH = p.image ? 50 : 0;
  const rowHeight = Math.max(hName, hDesc, hPrice, imgH) + 20;

  if (currentY + rowHeight > doc.page.height - doc.page.margins.bottom) {
    ({ colWidths, availableWidth } = addPageHeader());
    currentY = doc.y;
  }

  // background tone
  const left = doc.page.margins.left;
  doc
    .rect(left, currentY, availableWidth, rowHeight)
    .fill(rowCount % 2 === 0 ? "#f5f5f5" : "#ffffff");
  doc.fillColor("black");

  // draw cells
  doc.text(p.name, left + 5, currentY + 5, { width: colWidths.name });
  doc.text(p.fullDescription || "", left + 5 + colWidths.name, currentY + 5, {
    width: colWidths.desc,
  });
  // compose price cell with optional bulk price
  const priceCell =
    (p.price || "") + (p.bulkPrice ? `\n+5 unidades: ${p.bulkPrice}` : "");
  doc.text(
    priceCell,
    left + 5 + colWidths.name + colWidths.desc,
    currentY + 5,
    { width: colWidths.price },
  );
  if (p.image) {
    const imgPath = path.join(
      process.cwd(),
      "public",
      p.image.replace(/^\//, ""),
    );
    if (fs.existsSync(imgPath)) {
      try {
        doc.image(
          imgPath,
          left + 5 + colWidths.name + colWidths.desc + colWidths.price + 5,
          currentY + 5,
          { width: 50, height: 50 },
        );
      } catch {}
    }
  }

  currentY += rowHeight;
  rowCount += 1;
});
// finalize

doc.end();
stream.on("finish", () => {
  console.log(`PDF catalog generated at ${outPath}`);
});
