import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

export async function parseResume(
  fileBuffer
) {
  try {
    if (
      !fileBuffer ||
      fileBuffer.length === 0
    ) {
      throw new Error(
        "Received empty buffer"
      );
    }

    // Convert Buffer → Uint8Array
    const uint8Array =
      new Uint8Array(fileBuffer);

    // Load PDF
    const pdf =
      await pdfjsLib.getDocument({
        data: uint8Array,
      }).promise;

    let fullText = "";

    // Read all pages
    for (
      let pageNum = 1;
      pageNum <= pdf.numPages;
      pageNum++
    ) {
      const page =
        await pdf.getPage(pageNum);

      const textContent =
        await page.getTextContent();

      const pageText =
        textContent.items
          .map((item) => item.str)
          .join(" ");

      fullText +=
        pageText + "\n";
    }

    return fullText;
  } catch (err) {
    console.log(err);

    throw new Error(
      "Failed to parse PDF"
    );
  }
}