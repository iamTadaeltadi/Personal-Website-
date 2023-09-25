import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Update with your own PDF link
const resumeLink =
  "https://raw.githubusercontent.com/iamTadaeltadi/Resume/main/Tadael_Resume_porfolio%20.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center my-6">
          <a
            href={resumeLink}
            target="_blank"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center max-w-xs"
          >
            <AiOutlineDownload className="mr-2" />
            Download CV
          </a>
        </div>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="resume">
            <Document file={resumeLink}>
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </div>
        </div>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="resume">
            <Document file={resumeLink}>
              <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </div>
        </div>

        <div className="text-center my-6">
          <a
            href={resumeLink}
            target="_blank"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center max-w-xs"
          >
            <AiOutlineDownload className="mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
