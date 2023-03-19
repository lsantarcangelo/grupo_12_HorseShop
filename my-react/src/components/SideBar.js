import React from 'react';
import image from '../assets/images/logo.png';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastProductDb from './LastProductDb';
import ProductList from './ProductList';
import NotFound from './NotFound';
import {Link, Route, Routes} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-25" src={image} alt=""/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                <li className="nav-item">
                <Link className="nav-link" to="/LastProductDb">
                        <i className="fas fa-fw fa-truck-loading"></i>
                        <span>Last Product In Data Base</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/CategoriesInDb">
                        <i className="fas fa-fw fa-clipboard-list"></i>
                        <span>Categories in Data Base</span></Link>
                </li>

                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ProductList">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Product List</span></Link>
                </li>
                
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/SearchProducts">
                        <i className="fas fa-fw fa-search"></i>
                        <span>Search</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>

            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Routes>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/CategoriesInDb">
                    <CategoriesInDb />
                </Route>
                <Route path="/LastProductDb">
                    <LastProductDb />
                </Route>
                <Route path="/ProductList">
                    <ProductList />
                </Route>
                <Route component={NotFound} />
            </Routes>

        </React.Fragment>
    )
}
export default SideBar;