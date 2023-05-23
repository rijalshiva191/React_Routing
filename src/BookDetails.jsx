import React from 'react'
import {useParams} from "react-router-dom"

const BookDetails = () => {
  let {id}=useParams();
  return (
    <div>
      Book Details page <br/>
      ID =  {id};
    </div>
  );
};

export default BookDetails;