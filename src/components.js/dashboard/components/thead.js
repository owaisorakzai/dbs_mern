import React from 'react'

export default function Thead({headings}) {
  return (
    <div>
        <thead class="bg-gray-50">
              <tr>
                {headings.map((text)=>{
                    return( 
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {text}
                  </th>
                    )
                })}

            </tr>
            </thead>
    </div>
  )
}
