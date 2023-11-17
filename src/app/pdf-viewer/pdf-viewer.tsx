import { pdfjs, Document, Page, Outline } from 'react-pdf';
import { pdf } from '@react-pdf/renderer';
import React, {useCallback, useEffect, useState} from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// @ts-ignore
const PDFViewer = ({ children }) => {
    const [pdfUrl, setPdfUrl] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(null);

    const onDocumentLoadSuccess = useCallback((document) => {
        const { numPages: nextNumPages } = document;
        setNumPages(nextNumPages);
        setPageNumber(1);
    }, []);

    const onItemClick = useCallback(
        ({ pageNumber: nextPageNumber }) => setPageNumber(nextPageNumber),
        [],
    );

    const changePage = useCallback(
        (offset) => setPageNumber((prevPageNumber) => (prevPageNumber || 1) + offset),
        [],
    );

    const previousPage = useCallback(() => changePage(-1), [changePage]);

    const nextPage = useCallback(() => changePage(1), [changePage]);

    useEffect(() => {
        const child = React.Children.only(children);

        pdf(child).toBlob().then(blob => {
            setPdfUrl(URL.createObjectURL(blob));
        })
    }, [children]);


    return (
        <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onItemClick={onItemClick}
        >
            <Page renderMode='svg' pageNumber={pageNumber} />
        </Document>
    );
}

export default PDFViewer;