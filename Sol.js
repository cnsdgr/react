function Sol(props){



    return(
        <><div className="bg-light border-primary rounded py-5 px-5">
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
     </div>

     </>


    );
}
export default Sol;