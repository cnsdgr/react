import { useState } from "react";

function Form(){
    const [input,setInput]=useState("");

    const degistiginde=(event)=>{
        const input_name=event.target.name;//isim
        const input_value=event.target.value;//cansu

        setInput(values=>({...values,[input_name]:input_value}))//isim:cansu

    }


    const submitFonk=(event)=>{
        event.preventDefault();
        console.log(input);


    }


    return(
        <>
            <form onSubmit={submitFonk}>
                
                <div className="row justify-content-center">
                    <div className="col-4" name="Form_Sutun">
                        <div className="row">
                    <div className="col-6">
                <label className="col-form-label">İsmini Gir:
                    <input className="form-control" name="isim" type="text" value={input.isim || ""} onChange={degistiginde}/>
                </label>
                </div>
                <div className="col-6">
                <label className="col-form-label">Yaşını gir:
                    <input className="form-control" name="yas" type="number" value={input.yas || ""} onChange={degistiginde}/>
                </label>
                </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <label className="col-form-label">Başvuru Amacı: </label>

                    <textarea className="form-control" name="amac" value={input.amac || ""} onChange={degistiginde} ></textarea>
                   


                    </div>
                </div>
                <div className="row py-4">
                    <div className="col-6">
                <label className="col-form-label">Burs İsteği:</label>
                </div>
                <div className="col-6">
                <select className="form-select"  name="burs" value={input.burs || ""} onChange={degistiginde}>
                    <option value="1">Var</option>
                    <option value="0">Yok</option>                    
                    </select>
                    </div>

                </div>

                <div className="row text-end justify-content-end">
                    <div className="col-4">
                    <input className="btn btn-secondary" type="submit"/>


                    </div>
                </div>
            
                </div>              
                    
                
        
                </div>
            </form>
        </>
    );
}
export default Form;