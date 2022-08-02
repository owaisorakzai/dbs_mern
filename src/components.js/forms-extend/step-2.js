import React from 'react';

export default function Step2() {
  return <div>
    <div className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:px-8">
      
  <nav aria-label="Progress">
    <ol className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
    <li className="relative md:flex-1 md:flex">
          
          {/* Completed Step */}
          <a href="/" className="group flex items-center w-full">
            <span className="px-6 py-4 flex items-center text-sm font-medium">
              <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                <svg className="w-6 h-6 text-white" data-todo-x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
              </span>
              <span className="ml-4 text-sm font-medium text-gray-900">Personal Information</span>
            </span>
          </a>
        
          <div className="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
            <svg className="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
              <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" strokeLinejoin="round"></path>
            </svg>
          </div>
        </li>
          <li className="relative md:flex-1 md:flex">
            {/* Current Step */}
            <a href="/" className="px-6 py-4 flex items-center text-sm font-medium">
              <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full" aria-current="step">
                <span className="text-indigo-600">02</span>
              </span>
              <span className="ml-4 text-sm font-medium text-indigo-600">Personal History</span>
            </a>
          
            <div className="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
              <svg className="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" strokeLinejoin="round"></path>
              </svg>
            </div>
          </li>
          <li className="relative md:flex-1 md:flex">
          
          {/* Upcoming Step */}
          <a href="/" className="group flex items-center">
            <span className="px-6 py-4 flex items-center text-sm font-medium">
              <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                <span className="text-gray-500 group-hover:text-gray-900">03</span>
              </span>
              <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Additional Information</span>
            </span>
          </a>
        </li>
          <li className="relative md:flex-1 md:flex">
          
          {/* Upcoming Step */}
          <a href="/" className="group flex items-center">
            <span className="px-6 py-4 flex items-center text-sm font-medium">
              <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                <span className="text-gray-500 group-hover:text-gray-900">04</span>
              </span>
              <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Address Information</span>
            </span>
          </a>
        </li>
        <li className="relative md:flex-1 md:flex">
          
          {/* Upcoming Step */}
          <a href="/" className="group flex items-center">
            <span className="px-6 py-4 flex items-center text-sm font-medium">
              <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                <span className="text-gray-500 group-hover:text-gray-900">05</span>
              </span>
              <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Review</span>
            </span>
          </a>
        </li>
        <li className="relative md:flex-1 md:flex">
          
          {/* Upcoming Step */}
          <a href="/" className="group flex items-center">
            <span className="px-6 py-4 flex items-center text-sm font-medium">
              <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                <span className="text-gray-500 group-hover:text-gray-900">06</span>
              </span>
              <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Confirmation</span>
            </span>
          </a>
        </li>
        <li className="relative md:flex-1 md:flex">
          
          {/* Upcoming Step */}
          <a href="/" className="group flex items-center">
            <span className="px-6 py-4 flex items-center text-sm font-medium">
              <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                <span className="text-gray-500 group-hover:text-gray-900">07</span>
              </span>
              <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Payment</span>
            </span>
          </a>
        </li>
      
    </ol>
  </nav>

    </div>
  </div>
  </div>;
}
