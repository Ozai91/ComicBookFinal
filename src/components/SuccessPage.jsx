import { Link } from "react-router-dom";
import Comic from "../pages/Comic";

const SuccessPage = () => (
  <div className="h-screen flex flex-col justify-center items-center text-center">
    <h1 className="text-4xl font-bold mb-4 text-green-600">Payment Successful 🎉</h1>
    <p className="text-gray-600 mb-6">Thank you for your order!</p>
    <Link to="/comic" className="bg-black text-white px-6 py-2 rounded-md hover:opacity-90">
      Continue Shopping
    </Link>
  </div>
);
export default SuccessPage;
