import Homepage from "../pages/Homepage";

function AboutSection(){
    return(
        <> 
        <div id="about" className="text-center">
        <h2 className="relative inline-block pb-2 mt-10 mb-4">
          <span>About:</span>
          <span
            className="absolute bottom-0 left-0 w-full h-2"
            style={{ backgroundColor: '#FDC435' }}
          >
            
          </span>
        </h2>
        <Homepage />
      </div>


{/* Contact section */}
<div id="contact" className="text-center">
<h6 className="relative inline-block pb-2 mt-10 mb-4">
  <span>Contact:</span>
  <span
    className="absolute bottom-0 left-0 w-full h-2"
    style={{ backgroundColor: '#FDC435' }}
  ></span>
</h6>
</div>
</>
    )
}

export default AboutSection;