import { Link } from 'react-router-dom';
import Moment from 'react-moment';



function LinkItem({ id, title, image, description, updatedAt}) {
    const dateToFormat = {updatedAt};
    
     return(
         <div className="container p-5">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={image} style={{maxWidth: "330px"}} className="img-fluid rounded-start" alt={title}/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <small className="text-muted"><Moment fromNow>{dateToFormat}</Moment></small>
                        <Link to={`/links/${id}`} className="stretched-link"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     )
}



export default LinkItem;
