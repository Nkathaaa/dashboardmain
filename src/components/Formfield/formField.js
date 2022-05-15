import React from 'react';

const Formfield =({formData})=>{
  
    const createTemplate=()=>{
       let formTemplate=null
        switch(formData.element){
            case ("input"):
                formTemplate=(
                    <input type="text"
                    {...formData.config}
                    value={formData.value}
                     className="form-control"
                    />
                )
            break;
            default:
                formTemplate=null  

        }
        return formTemplate
        

    }
    return (
        <div>
          {createTemplate()}
      

      </div>
    )
}
  
export default Formfield