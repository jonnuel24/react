import { createRef, useState } from "react";
import {} from '@mate'
function ImageUpload(props) {
  const [image, _setImage] = useState(null);
  const inputFileRef = createRef();
  const cleanup=()=>{
    URL.revokeObjectURL(image && props.image)
    inputFileRef.current.value=null;
  }

  const setImage=(newImage)=>{
    if(image){
        cleanup()
    }
    _setImage(newImage)
  }
  const handleOnChangeImage=(event)=>{
    const newImage=event.target.files[0];
    if(newImage){
        setImage(newImage)
    }
    props.ImageUpload(event)
  }
}

export default ImageUpload;
