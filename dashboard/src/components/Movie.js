import React, {Component} from 'react';

import MovieList from './MovieList';

class Movie extends Component {

    constructor() {
        super()
        this.state = {products: null}
    }

	componentDidMount() {
		fetch("http://localhost:3000/api/products")
			.then(res => res.json())
			.then(result => {
				this.setState({products: result.products})
			})
			.catch(error => console.log(error))
		}
		
		render(){
			return(
				<React.Fragment>
						{/*<!-- PRODUCTS LIST -->*/}
						<h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
						
						{/*<!-- DataTables Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
										<thead>
											<tr>
												<th>Id</th>
												<th>Nombre</th>
												<th>Stock</th>
												<th>Price</th>
											</tr>
										</thead>
										<tbody>
												{
													this.state.products == null 
													? 
													<div> Loading... </div>
													:
													this.state.products.map((product,index)=>{
														return  <MovieList  {...product}  key={index} />
													})
												}
										</tbody>
									</table>
								</div>
							</div>
						</div>            
			</React.Fragment>
		)
	}
}
export default Movie;