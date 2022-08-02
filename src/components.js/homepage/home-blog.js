import React from "react";
import './home-blog.css';
import img from '../../assets/img/Road-Mountain-Grass-1440-x-810.jpg'
import img1 from '../../assets/img/Space-Hit-Explosion-1440-x-810.jpg'
import Blog from "./blog";


const HomeBlog=()=>{
    let blog_item=[{
        title:'Digital identity checks: New Guidance on the way',
        bold:'lifesyle',
        paragraph:'Integer tempor posuere arcu eu bibendum. Aliquam bibendum velit ipsum, sed fermentum augue dignissim at. Nullam sit amet urna non leo convallis blandit.',
        img:img
    },
    {
        title:'Digital identity checks: New Guidance on the way',
        bold:'lifesyle',
        paragraph:'Integer tempor posuere arcu eu bibendum. Aliquam bibendum velit ipsum, sed fermentum augue dignissim at. Nullam sit amet urna non leo convallis blandit.',
        img:img1
    }
]
    return(
        <section className="blog-section">
        <div className="container">
        <h1>Latest Insights</h1>
        <div className="row">
            <Blog blog_items={blog_item} />
        </div>
        </div>
    </section>
    );
}
export default HomeBlog;