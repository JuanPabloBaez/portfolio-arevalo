import React,{ useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';


function Partitura({item, index}) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
   
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
    
    function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }

    function changePageBack(){
    changePage(-1)
    }

    function changePageNext(e){
    e.preventDefault();
    changePage(+1)
    }
    

 
 
 
      return (
    <div className='partitura' key={index}>
        
        <Document file={item.fields.file.url} onLoadSuccess={onDocumentLoadSuccess} >
            <Page pageNumber={pageNumber} />
        </Document>
        <a href={item.fields.file.url} target="_blank" rel="noreferrer" >Descargar partitura</a>
        <div className='button-partitura'>
            {pageNumber> 1 && <button onClick={changePageBack}>&#10094;</button>}
            <p>{pageNumber}/{numPages}</p> 
            {pageNumber < numPages && <button onClick={changePageNext}>&#10095;</button>}
        </div>
        
        
    </div>
  )
}

export default Partitura