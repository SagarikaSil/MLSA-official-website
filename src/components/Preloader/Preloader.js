import React from "react";
import './Preloader.css';
// import ScriptTag from "react-script-tag/lib/ScriptTag";

function Preloader() {
    return (
      <div>
        <div id="pagetransition">
            <div class="square black"></div>
            <div class="square white"></div>
            <div class="square gold"></div>
            <div class="square grey"></div>
            
            <div>
                <img class="vic-gb" src="MLSA_logo-transformed.png"/>
            </div>
        </div>
        
        <div id="bg"></div>
        {/* <ScriptTag src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" />
        <ScriptTag src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.9.8/TweenMax.min.js" />
        <ScriptTag src="Preloader2.js" /> */}
      </div>
    );
  }
  
export default Preloader;
  