import Ticker from 'react-ticker'

const Ticker1=({img})=>{

    return(
    <div class="container mt-5">
    <div class="row">
        <div class="col-md-12">
            <div class="d-flex justify-content-between align-items-center breaking-news">
                <div class="d-flex flex-row flex-grow-1 flex-fill justify-content-center py-2 text-white px-1 news"><span class="d-flex align-items-center">&nbsp;CNN News</span></div>

                <marquee class="news-scroll" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();"> 
                <img src={img[0]}/> 
                <span class="dot"></span>
                <img src={img[1]}/> 
                  <span class="dot"></span> 
                  <img src={img[2]}/> 
                  <span class="dot"></span> 
                  <img src={img[3]}/> 
                  
                   </marquee>
            </div>
        </div>
    </div>
</div>
)
}
export default Ticker1