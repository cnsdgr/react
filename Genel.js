function Genel(props){



    return(
        <>
        <div classname="row">
            <div classname="col-4">
                <h1>{props.baslik}</h1>

            </div>
        </div>
         <div classname="row">
         <div classname="col-12">
             <p>{props.icerik}</p>

         </div>
     </div>

     </>


    );
}