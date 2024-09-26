import React from 'react'

interface currentProps{
    fulnme : string,
    mail : string,
    uzrnme : string,
    pswd : string
}

const TableLine:React.FC<currentProps> = (props) => {
  return (
    <>
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium
                            
                            text-gray-900 whitespace-nowrap dark:text-white">
                                    {props.fulnme}
                            </th>
                            <td className="px-6 py-4 ">
                                    {props.mail}
                            </td>
                            <td className="px-6 py-4">
                                    {props.uzrnme}
                            </td>
                            <td className="px-6 py-4">
                                    {props.pswd}
                            </td>
        </tr>
    </>
  )
}

export default TableLine