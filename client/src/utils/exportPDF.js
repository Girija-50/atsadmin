import jsPDF from "jspdf";

const exportPDF = (resumeData) => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text(
    resumeData.name || "",
    20,
    20
  );

  doc.setFontSize(12);

  doc.text(
    `Email: ${resumeData.email || ""}`,
    20,
    35
  );

  doc.text(
    `Phone: ${resumeData.phone || ""}`,
    20,
    45
  );

  doc.text(
    `Summary: ${
      resumeData.summary || ""
    }`,
    20,
    60
  );

  doc.text(
    `Education: ${
      resumeData.education || ""
    }`,
    20,
    80
  );

  doc.text(
    `Skills: ${
      resumeData.skills || ""
    }`,
    20,
    100
  );

  doc.text(
    `Projects: ${
      resumeData.projects || ""
    }`,
    20,
    120
  );

  doc.text(
    `Experience: ${
      resumeData.experience || ""
    }`,
    20,
    140
  );

  doc.text(
    `Certifications: ${
      resumeData.certifications || ""
    }`,
    20,
    160
  );

  doc.save("Resume.pdf");
};

export default exportPDF;