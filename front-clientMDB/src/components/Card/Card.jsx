

function Card() {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://www.autoscout24.es/cms-content-assets/6w3WbaufrPylttArJPqS36-a4a52ac6901cfcb1b578f19e8644dbbe-ford-mustang-l-01-1100.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;