// Node ==> NPM(WORDS LARGEST REGISTRY)
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Cards = ({title,img,description})=>{
    return(
        <div className="card" style={{width:"18rem" }}>
        <img src={img} className="card-img-top" alt={title}/>
        <div className="card-body"> 
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      

    )
}

export default Cards;