const About=({title,bold,paragraph})=>{
    const content=()=>{
        console.log({title,bold,paragraph})
            return(
                    <div className="col-md-6">
                    <h6><strong>{bold}</strong></h6>
                    <h1>{title}</h1>
                    {paragraph.map((para)=>(
                    <p>{para}</p>
                    ))}
                </div>
            );
        
    }
    return (
        content()
    );
}
export default About;