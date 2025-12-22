
function ProdutCard({image1,title,price,image2}){
    return(
        <div>
            <section className="card-card">
                    <div className="card">
                    <img src={image1} alt=""/>
                    <h5>{title}<br />
                    </h5>
                    <p>{price}</p>
                    <div className="card-footer">
                        <p>free delivey</p>
                        <img src={image2} alt="" />
                    </div>
                </div>
                </section>
        </div>
    )
}

export default ProdutCard