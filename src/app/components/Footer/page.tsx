import Link from "next/link";
import "./footer.css";
import { fetchCategories } from "@/app/services/CategoryService";

async function Footer() {
  const categories = await fetchCategories();

  return (
    <div className="footer mt-5 pt-4">
      <div className=" row  border-bottom border-light d-flex ms-3">
       
        <div className="col-4">
          <Link href="/aboutus">
            <h5 className="mb-3" style={{color:'gray',textDecoration: 'none'}}>About Us</h5>
          </Link>
          <h6 className="mb-3">Our Company</h6>
          <h6 className="mb-3">Privacy & Cookies</h6>
          <h6 className="mb-3">Terms & Conditions</h6>
        </div>
        <div className="col-4">
          <Link href="/contactus">
            <h5 className="mb-3" style={{color:'gray',textDecoration: 'none'}}>Contact Us</h5>
          </Link>
          <h6 className="mb-3">FAQ</h6>
          <h6 className="mb-3">Payment</h6>
          <h6 className="mb-3">Track Order</h6>
        </div>
        <div className="col-4">
          <Link href="/contactus">
            <h5 className="mb-3" style={{color:'gray',textDecoration: 'none'}}>Shipping & Returns</h5>
          </Link>
          <h6 className="mb-3">Shipping & Delivery</h6>
          <h6 className="mb-3">Online Returns</h6>
        </div>
      </div>

      <div className="pt-2 ms-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-c-circle"
          viewBox="0 0 16 16"
        >
          <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" />
        </svg>
        copyright <span>Shopkart Group. All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Footer;
