import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from 'react-router';

function RootLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      {/*placeholder*/}
      <div className="bg-gray-100 min-h-screen p-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;