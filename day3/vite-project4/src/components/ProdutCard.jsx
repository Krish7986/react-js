// CARD OF LIST ITEMS
function ProdutCard({image1,title,price,image2}){
    return(
        <div>
            <section className="card-card">
                    <div className="card">
                    <img src={image1} alt=""/>
                    <div className="footer">
                        <h5>{title}</h5>
                        <p>INR ₹{price}</p>
                        <div className="card-footer">
                            <p>free delivey</p>
                            <img src={image2} alt="" />
                        </div>
                        
                    </div>
        </div>  
                </section>
        </div>
    )
}

export default ProdutCard