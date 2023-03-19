import React from 'react';

function MovieList(props){
    return(
        <React.Fragment>
            <div className="table-responsive">
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.stock}</td>
                    <td>{props.price}</td>  
                </tr>
            </div>
        </React.Fragment>
    )
}
export default MovieList;