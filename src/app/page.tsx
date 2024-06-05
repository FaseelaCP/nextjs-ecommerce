import "./globals.css";
import Recommended from "./components/Recommended/page";
import Categories from "./Categories/page";
import { fetchCategories } from "./services/CategoryService";
import Link from "next/link";

export default async function Home() {
 
  var categories = await fetchCategories();

  return (
    <>
      {/* Categories navbar */}
      <div className="navbar navbar-expand-lg navbar-light bg-light ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 ">
            {categories.map((category) => (
              <li className="nav-item" key={category.id}>
                <Link
                  href={`/Categories/` + category.id}
                  className="nav-link"
                  style={{ color: "gray", textDecoration: "none" }}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="banner3.avif"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="banner2.avif"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="banner3.avif"
              alt="Third slide"
            />
          </div>
        </div>
      </div>
      <div className="categories mt-5 text-center">
        <h3 className="mb-5">Top Categories!!</h3>
        <Categories />
      </div>

      <div className="recommended mt-5 text-center">
        <h3 className="mb-5">Best Deals For You!!</h3>
        <Recommended />
      </div>
    </>
  );
}
