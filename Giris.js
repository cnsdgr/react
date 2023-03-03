import {girisKontrol} from './Functions';

   
function Giris(props){
  
    return(
<><div className="bg-light border border-primary rounded py-5 px-5">
<form>
<h3>Kullanıcı Giriş</h3>
<label className="col-form-label">Email adresi</label>
<input className="form-control" name="isim" type="text" id="email" />
<p>
<label className="col-form-label">Şifre</label>
<input className="form-control" name="isim" type="password" id="sifre" />

</p>
</form>
<p id="sonuc"></p>
<p>
    <button className="btn btn-primary" onClick={()=>girisKontrol()}>Giriş</button>
</p>
</div>
</>
);
}
export default Giris;