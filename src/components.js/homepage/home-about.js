import React from "react";
import './home.css';
import About from './about';
import img from '../../assets/img/news-thumbnail-youtube-1020x620-c-default.jpg'

const HomeAbout=()=>{
    let title= 'Save time on the job applicants checks'
    let bold= 'WHAT IS DBS?'
    let paragraph= ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus sed ex ut viverra. Fusce nisl nunc, auctor vitae lacinia eget, tempor sit amet justo. Mauris massa lacus, hendrerit in libero quis, pretium pharetra sem. Nam tincidunt nisl consequat dui molestie iaculis. Nam sollicitudin dui ligula, a feugiat felis sollicitudin vel','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus sed ex ut viverra. Fusce nisl nunc, auctor vitae lacinia eget, tempor sit amet justo. Mauris massa lacus, hendrerit in libero quis, pretium pharetra sem. Nam tincidunt nisl consequat dui molestie iaculis. Nam sollicitudin dui ligula, a feugiat felis sollicitudin vel']    
    return(
        <section>
<div className="bg-white overflow-hidden">
    <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
      <div className="mx-auto text-base max-w-prose lg:max-w-none">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Case Study</h2>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Meet Whitney</h3>
      </div>
      <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="relative lg:row-start-1 lg:col-start-2">
          <svg className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect>
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect>
          </svg>
          <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
            <figure>
              <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                <img className="rounded-lg shadow-lg object-cover object-center" src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=.735&amp;fp-y=.55&amp;w=1184&amp;h=1376&amp;q=80" alt="Whitney leaning against a railing on a downtown street" width="1184" height="1376" />
              </div>
              <figcaption className="mt-3 flex text-sm text-gray-500">
                <svg className="flex-none w-5 h-5 text-gray-400" data-todo-x-description="Heroicon name: camera" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
</svg>
                <span className="ml-2">Photograph by Marcus O’Leary</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <p className="text-lg text-gray-500">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.</p>
          </div>
          <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
            <p>Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
            <p>Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.</p>
            <p>Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.</p>
            <ul>
              <li>Quis elit egestas venenatis mattis dignissim.</li>
              <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
              <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
            </ul>
            <p>Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
            <h3>How we helped</h3>
            <p>Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.</p>
            <p>Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

    </section>
    );
}
export default HomeAbout;