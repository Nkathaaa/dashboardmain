import React,{useEffect} from 'react'

export const Checkbox=React.forwardRef(({ indeterminate, ...rest},ref)=>{
    const defaultRef=React.useRef()
    const resolvedRef=ref || defaultRef

    useEffect(()=>{
        resolvedRef.current.indeterminate=indeterminate

    },[resolvedRef,indeterminate])
    return(
        <>
        <Input type="checkbox" ref={resolvedRef} {...rest}/>
        </>
    )
})

//chcekbox receives props and applyes them to 