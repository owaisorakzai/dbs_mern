import React from 'react'

export default function Box(props) {
  return (
    <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <dt class="text-sm font-medium text-gray-500 truncate">
          {props.title}
      </dt>
      <dd class="mt-1 text-3xl font-semibold text-gray-900">
        {props.data}
      </dd>
    </div>
  </div>  )
}
