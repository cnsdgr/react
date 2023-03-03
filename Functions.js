import ReactDOM  from "react-dom/client";
import Sol from "./Sol";
import Giris from "./Giris";
import KayitOl from "./KayitOl";
import Sss from "./Sss";
import Basvur from "./Basvur";
import { basliklar,icerikler,sorular,cevaplar, elemanlar, menu_eleman } from "./Icerik";
import Bilgi from "./Bilgi";



export const girisKontrol=()=>{
    
var kullanici = sessionStorage.getItem("user");
if(kullanici==null){

    sessionStorage.getItem("user","");

}       
    var isLogin = false;
    

    kullanici=sessionStorage.getItem("user");

    kullanici = kullanici.split(",");



    const mail = document.getElementById("email").value;
    const sifre = document.getElementById("sifre").value;

    const yazi = document.getElementById("sonuc");

    if (mail == kullanici[0] && sifre == kullanici[1]) {

        yazi.innerHTML = "Giriş bilgileri doğru!"; 
        yazi.style.color = "green";

        document.getElementById("btn_div").style.display = "none";
        document.getElementById("header_sag").innerHTML = "Kullanıcı: " + kullanici[0];
        
        isLogin = true;

        sessionStorage.setItem("isLogin", isLogin);

        document.getElementById("logout_Btn").style.display="";


        
        // var user_info=sessionStorage.getItem("user_info");
        // user_info=user_info.split(",");
        // var sag=document.getElementById("sag");
        // var m_tarih=document.getElementById("m_tarih");
        // m_tarih=Date();
    
    
        // const sagksm=ReactDOM.createRoot(sag);
    

        // sagksm.render(
        //   <div className="bg-light border border-primary rounded py-5 px-5">
        //   <div class="row ">
        //               <div class="col-12">
        //                   <h1 class="text-center">Başvuru Formu</h1>
  
        //                   </div>
        //               </div>
        //               <div class="row ">
                        
        //                   <div class="col-12">
        //                      {elemanlar.map((e,index)=>(
        //                      <Bilgi  
  
        //                      bilgi_ismi={elemanlar[index]}
        //                      deger={user_info[index]}
  
        //                      />                         
                             
        //                      )
        //                      )
                             
        //                      }
                             
                             
        //                   </div>
        //                   </div>
        //                   </div>       
        // )
       




    }

    else 
    {
        yazi.innerHTML = "Girilen bilgiler hatalı.";
        yazi.style.color = "red";
    }


}

//çıkış
export const logout=()=>{

    var isLogin = sessionStorage.getItem("isLogin");
  
    isLogin = false;
  
    sessionStorage.setItem("isLogin", isLogin);
    document.getElementById("logout_Btn").style.display = "none";
    document.getElementById("btn_div").style.display = "block";
    document.getElementById("header_sag").innerHTML="";
   
  
  
  }

  //göster-render

  export const goster = (eleman,eleman_index) => {


    const sol = ReactDOM.createRoot(document.getElementById("sol"));
    const sag = ReactDOM.createRoot(document.getElementById("sag"));
    const isLogin=sessionStorage.getItem("isLogin");
    if (eleman == "Eğitimler") {
  
  
      sol.render(
        <Sol 
        baslik={basliklar[eleman_index]} 
        icerik={icerikler[eleman_index]}
        />
        
      )
    }
    else if (eleman == "Hemen Başvur") {

     if(isLogin=="true"){
      sol.render(      

        <Basvur/>
        
      )
     }else if(isLogin=="false")

     {
      sol.render(
        <div className="bg-white border border-primary rounded py-5 px-5">
        <p>Lütfen giriş yapıp forma ulaşın!</p>
        </div>
      )

     }
  
      
    }
  else if(eleman=="S.S.S."){
  
    sol.render(
      <> <div className="bg-white border border-primary rounded py-5 px-5">
      <h1>{basliklar[eleman_index]}</h1>
  
      {sorular.map((icerik,soru_index) =>
        (<Sss
          
          soru={icerik}
          cevap={cevaplar[soru_index]}
          
        />
       
        )
        )}
         </div>
        </>
    )
  }
    else if(eleman=="Giriş"){
  
    sag.render(
    <Giris />
  
    )
  
    }
   else if(eleman=="Kayıt Ol"){
  
    sag.render(
    <KayitOl />
    
    ) 
    }
  
  }
  

  export const gonder=()=>{

    var name=document.getElementById("inputName").value;
    var mail=document.getElementById("inputMail").value;
    var egitim=document.getElementById("egitim_durum").value;
    var tarih=document.getElementById("tarih").value;
    var m_tarih=document.getElementById("m_tarih").value;
    m_tarih=Date();



    var user_info=[name,mail,egitim,tarih,m_tarih];


    sessionStorage.setItem("user_info",user_info);

   
  }


  export const formu_goster=()=>{
    var user_info=sessionStorage.getItem("user_info");
    user_info=user_info.split(",");
    var sag=document.getElementById("sag");


    const sagksm=ReactDOM.createRoot(sag);

    sagksm.render(
    
      <div className="bg-light border border-primary rounded py-5 px-5">
        <div class="row ">
                    <div class="col-12">
                        <h1 class="text-center">Başvuru Formu</h1>

                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-12">
                           {elemanlar.map((e,index)=>(
                           <Bilgi  

                           bilgi_ismi={elemanlar[index]}
                           deger={user_info[index]}

                           />                         
                           
                           )
                           )
                           
                           }
                           
                           
                        </div>
                        </div>
                        </div>                   
    )
 
                














  }