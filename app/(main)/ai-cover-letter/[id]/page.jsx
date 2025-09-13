import React from "react"
const CoverLetter=async ({params})=>{
    const id=await params.id
    return(
        <div>
            ID is {id}
        </div>
    )
}
export default CoverLetter