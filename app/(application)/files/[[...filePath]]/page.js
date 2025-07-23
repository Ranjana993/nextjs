import React from 'react'

const File = async({params}) => {
  console.log('File params:', params)
  const { filePath } = params
  console.log('File path:', filePath)
  return (
    <div>Rendering file component with path : {filePath?.join("/")} </div>
  )
}

export default File