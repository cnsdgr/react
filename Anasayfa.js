import React from "react";
import resim from './img/myhc_111344.jpg';


const Anasayfa=()=>{


return(
     <div id="genel" className="container py-3 my-4">
<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
        <img id="erasmus" src={resim} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="400" loading="lazy"/>
    </div>
    <div className="col-lg-6 px-5">
        <h1 className="display-5 fw-bold lh-1 mb-3" id="baslik">Erasmus</h1>
        <p id="yazi" className="lead">Yurtdışında eğitim alma fikri, günümüzde öğrenciler için bir hayal olmaktan öteye geçmiştir. Zira gelişen teknoloji, ülkeler arası ulaşımın kolaylığı ve ticari anlaşmalar sayesinde bir üniversite öğrencisi için yabancı bir ülkede okumak demek yeni bir kültürü tanımak, gideceğiniz ülkenin güzelliklerini keşfetmek, kariyer imkanlarından faydalanmak ve en önemlisi de yabancı dilinizi geliştirerek hayatınız boyunca unutamayacağınız bir deneyim kazanmak anlamına gelmektedir. </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="erasmus.html"> <button type="button" className="btn btn-outline-primary btn-lg px-4 me-md-2">Daha fazla</button></a>

        </div>
    </div>
</div>

</div>




);

}
export default Anasayfa;