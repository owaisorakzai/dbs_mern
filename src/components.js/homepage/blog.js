import React from "react";
const Blog=({blog_items})=>{

    return(
        blog_items.map((item)=>(
            <div class="col-md-6"><img class="blog-img" src={item.img} />
            <p><strong>{item.bold.toUpperCase()}</strong></p>
            <h4>{item.title}</h4>
            <p>{item.paragraph}</p>
        </div>
        ))
    );
}
export default Blog;





