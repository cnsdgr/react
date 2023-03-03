function KayitOl(props){
    function sifreKontrol() {

        const kullanici =
            [(document.getElementById("email").value), (document.getElementById("sifre").value)];
      
        
        const sifre2 = document.getElementById("reSifre").value;
      
      
      
        const yazi = document.getElementById("sonuc");
      
        if (kullanici[1] == sifre2) {
      
            yazi.innerHTML = "Hesap Oluşturuldu!";
            yazi.style.color = "green";
      
            sessionStorage.setItem("user", kullanici);
      
        }
        else {
            yazi.innerHTML = "Şifreler Eşleşmiyor.";
            yazi.style.color = "red";
        }
      }
    return(
<>
<div className="bg-light border border-primary rounded py-5 px-5">
<form>
<h3>Kayıt Ol</h3>
<label className="col-form-label">Email adresi</label>
<input className="form-control" name="isim" type="text" id="email" value={props.email}/>
<p>
<label className="col-form-label">Şifre</label>
<input className="form-control" name="isim" type="password" id="sifre" value={props.sifre}/>

</p>
<p>
<label className="col-form-label">Şifre(Tekrar)</label>
<input className="form-control" name="isim" type="password" id="reSifre" value={props.sifre2}/>

</p>
</form>
<p id="sonuc"></p>
    <p>
    <button className="btn btn-primary" onClick={()=>sifreKontrol()}>Giriş</button>
</p>
</div>

</>
);
}
export default KayitOl;