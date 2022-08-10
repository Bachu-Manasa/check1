import React from 'react'

function Navbar() {
    return (
        <div>
            <div style={{ backgroundColor: '#e6ffff' }}>
                <div className="row">
                    <div className="col" >
                        <div className='row' style={{ marginTop:"50px",backgroundColor: '#183444', height: '80px', width: '200px' ,borderRadius:'20px',marginLeft:'30px'}}>
                            <div className="col" style={{marginLeft:"-20px"}}><img src="./bg-1.png" alt="Logo"></img></div>
                            <div className='col' style={{fontSize:'8px',color:'white'}}><p>SRI K.CHANDRASEKHAR RAO</p><p>Honb'le Cheif Minister</p></div>
                        </div>
                    </div>
                    <div className='col' style={{marginRight:'70px'}}>
                        <div className='row' style={{ backgroundColor: '#183444', height: '80px', width: '200px', marginTop:"50px",borderRadius:'20px',marginLeft:'30px'}}>
                            <div className="col"><img src="./bg-2.png" alt="Logo"></img></div>
                            <div className='col' style={{fontSize:'8px',color:'white'}}><p>SRI PUVVADA AJAY KUMAR</p><p>Honb'le Transport Minister</p></div>
                        </div>
                    </div>
                    <div className='col' >
                        <div style={{marginRight:"100px"}}><img src="./image 16.png" alt="Logo"></img>
                        <img src="./image 14.png" alt="Logo"></img></div>

                    </div>
                    <div className='col'>
                        <div className='row' style={{ backgroundColor: '#183444', height: '80px', width: '200px' , marginTop:"50px",borderRadius:'20px'}}>
                            <div className="col"><img src="./bg-3.png" alt="Logo"></img></div>
                            <div className='col' style={{fontSize:'8px',color:'white'}}><p>SRI BAJIREDDY GOVERDHAN</p><p>Chairman of TSRTC</p></div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row' style={{ backgroundColor: '#183444', height: '80px', width: '200px' , marginTop:"50px",borderRadius:'20px'}}>
                            <div className="col"><img src="./bg-4.png" alt="Logo"></img></div>
                            <div className='col' style={{fontSize:'8px',color:'white'}}><p>SRI V.C SAJJANAR,I.P.S</p><p>Vice Chairman & Managing Director</p></div>
                        </div>
                    </div>


                   
                </div>
                

            </div>
            <nav class="navbar navbar-light" style={{backgroundColor:'#183444'}}>
                <span class="navbar-brand mb-0 h1" style={{ color: "white", marginLeft: "35%" }}>*Welcome to Pushpak Prepaid Card System*</span>
            </nav>
            {/* <div><img src="./background.png" alt="Background Image"></img></div>  */}
        </div>
    )
}

export default Navbar