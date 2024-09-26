import React from 'react'


interface currentProps{
    data : any[];
}

const AllPuropusTableRow:React.FC<currentProps> = (props) => {
  console.log(props.data)
  return (
    <>
         <tr className="bg-white dark:bg-gray-800 text-center border-b border-white/20">
            {
                props.data.map((ele,idx)=>
                (ele !== 0 && ele ?
                  (ele.toString().includes(".com")?
                    (ele.includes(".png")||ele.includes(".jpg"))?
                    <>
                     <td className='p-2'>
                          <a target='_blank' className=' hover:underline' href={ele}>
                            <img className=' rounded-md' src={ele} alt="NO DATA" />
                          </a>
                        </td>
                    </>
                    :
                        <td className='px-6 py-4'>
                          <a target='_blank' className=' hover:underline' href={ele}>
                              {ele}
                          </a>
                        </td>
                  :
                        <td className="px-6 py-4 text-center">
                            {ele}
                        </td>
                  )
                  :
                  <td className='px-6 text-center py-4 text-red-700'>
                    NULL
                  </td>
                )
                )
            }
        </tr>
    </>
  )
}

export default AllPuropusTableRow