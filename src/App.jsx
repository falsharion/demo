import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Careers from "./pages/careers";
import Products from "./pages/products";
/*import Header from "./components/Header";*/
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import ProductDetail from "./pages/products/components/productDetail"
import 'bootstrap/dist/css/bootstrap.min.css';
// import ProductPage from "./components/ProductPage";
import { useState, useEffect } from "react";



function App() {
  // const [products, setProducts] = useState([]);
  
  // useEffect(() => {
  //   fetch('http://adsofun-001-site1.ftempurl.com/api/stores')
  // })

  const ProductsD = [
    {
      id: 1,
      name: 'Bluebird DR900 RFID Reader',
      price: 572423.26,
      des: "Configurable UHF module with 3-27 dBm transmit power output Adjustable, high-precision reading range with less risk for cross-reading (adjustable in 1 dBm increments) Perfect reading accuracy reduces man-hours",
      categoryId:"9FB234CF-8FD6-45C5-8D5D-011A5912898B",
      imageUrl: '/Bluebird DR900 RFID Reader.jpg',
    },
    {
      id: 2,
      name: 'Bluebird MT281-MTB281 Mobile Payment Terminal',
      price: 556338.82,
      des:"Windows-based mobile payment terminal ideal for midsize and large merchants with support for magnetic stripe cards, EMV chip and PIN, contactless payments, and fingerprint authentication.",
      categoryId:"983391B4-8A7B-448F-B5DC-9F5CBE11FA89",
      imageUrl: '/Bluebird MT281-MTB281 Mobile Payment Terminal.jpg',
    },
    {
      id: 3,
      name: 'Bluebird RFR900 FOR EF501 RFID Reader',
      price: 556338.82,
      des:"RFR900 adds UHF RFID reading capability to Bluebirds touch mobile computer, EF501, and is designed as an ergonomic pistol grip handle - ideal for use in retail",
      categoryId:"9FB234CF-8FD6-45C5-8D5D-011A5912898B",
      imageUrl: '/Bluebird RFR900 FOR EF501 RFID Reader.jpg',
    },
    {
      id: 4,
      name: 'Bluebird RT101 Mobile Computers',
      price: 556338.82,
      des:"RT101 is IP65 dustproof and water resistant, can withstand a drop of up to 5 feet with the rugged plugs, RT101 delivers fast and powerful performance, thanks to its 1.92 GHz Quad Core Processor(Windows) and 2.0 GHz  Quad Core Processor(Windows) android ",
      categoryId:"61F192F3-FB59-440F-990A-A79F07250F1E",
      imageUrl: '/Bluebird RT101 Mobile Tablets.jpg',
    },
    {
      id: 5,
      name: 'Direct Thermal zipship 1000D',
      price: 556338.82,
      des:"Zebra Label, Paper, 4 x 4 inch (101.6 mm x 101.6mm), Direct Thermal, Z-Perform 1000D, Value Uncoated, Permanent Adhesive, 0.75 inch (19.1mm) Core, Plain, 120 Labels per Roll, 36 Rolls per Case",
      imageUrl: '/Direct Thermal zipship 1000D.jpg',
    },
    {
      id: 6,
      name: 'Direct Thermal zipship 4000D',
      price: 556338.82,
      des:'Zebra Z-Select 4000D Paper Label, Direct Thermal, 3" x 2", 0.75 inch Core, 2.2 inch Outer Diameter, 210 Labels Per Roll, 36 Rolls Per Case, Perforated, (PRICED PER ROLL)',
      imageUrl: '/Direct Thermal zipship 4000D.jpg',
    },
    {
      id: 7,
      name: 'Honeywell 30 Series Embedded Network Video Recorder',
      price: 556338.82,
      des:"Flexible storage options, high recording and networking performance, robust cyber security performance and flexible remote monitoring options make these NVRs perfect for a wide range of security applications where compliance is essential and data is protected.",
      imageUrl: '/Honeywell 30 Series Embedded Network Video Recorder.jpg',
    },
    {
      id: 8,
      name: 'Honeywell CK65',
      price: 556338.82,
      des:'Extending the popular ergonomic design of the CK3X/R model, the CK65 Mobile Computer takes the best and makes it even better! The rugged CK65 mobile computer features a fast processor, advanced network connectivity, and enhanced 1D/2D scanning plus extended battery life lasting over 18 hours to keep workers connected and productive throughout multiple shifts. The CK65 computer is rated to IP64 and can withstand multiple 2.4 m (8 ft) drops to concrete',
      imageUrl: '/Honeywell CK65.jpg',
    },
    {
      id: 9,
      name: 'Honeywell Dome Cameras',
      price: 556338.82,
      des:"1 and SVGA @ 25fpsH.264, MPEG4 and MJPEG simultaneously (Tri-encoders)Comprehensive I/O ports: MIC in, audio out, video out, DI, DO, RJ45, uSDEvent trigger action - Send to NAS, send to FTP, send to Email, voice alert, go preset and tour, notify toCompatible with Honeywell Universal Surveillance (HUS) Platform and NVRs      ",
      imageUrl: '/Honeywell Dome Cameras.jpg',
    },
    {
      id: 10,
      name: 'Zebra ZD600 Barcode Printer',
      price: 556338.82,
      des:"Advancing the legacy of the industry-leading Xi Series, the ZT600 Series printers combine rugged durability and exceptional performance on a user-friendly, future-ready platform.",
      categoryId:"9FB234CF-8FD6-45C5-8D5D-011A5912898B",
      imageUrl: '/Zebra ZD600 Barcode Printer.jpg',
    },
    {
      id: 11,
      name: 'Zebra ZT610',
      price: 556338.82,
      des:"Zebra ZT610 Industrial Printer; Thermal Transfer and Direct Thermal, TAA Compliant, 4-Inch Max Print Width, 203 DPI Print Resolution, USB/USB Host/Serial/Ethernet/Bluetooth 4.0 Connectivity, ZPL, Color Touchscreen Display - Includes: US Power Cord, Tear",
      categoryId:"9FB234CF-8FD6-45C5-8D5D-011A5912898B",
      imageUrl: '/Zebra ZT610.jpg',
    },
    {
      id: 12,
      name: 'ZXP Series 9 Retransfer Card Printer',
      price: 556338.82,
      des:"Single-sided, reverse transfer printer, Quick print speeds – print full color, single-sided cards in 19 seconds, 150 card input hopper, 100 card output hopper, Upgrade options: Dual-sided printing, magnetic stripe encoding, lamination      ",
      imageUrl: '/ZXP Series 9 Retransfer Card Printer.jpg',
    }
    // Add more product data here
  ];

  return (
    <div className="overflow-hidden relative overflow-x-hidden">
    
      <BrowserRouter>
        {/* <Header /> */}  <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products ProductsD={ProductsD}/>} />
          <Route path="/Shop" element={<Shop />} />
          {/* <Route path="/store/:storeId" element={<ProductPage />} /> */}
          <Route path="/product/:id" element={<ProductDetail ProductsD={ProductsD} />} />
          </Routes>
      </BrowserRouter>

      <Footer className="relative z-0" />
    </div>
  );
}

export default App;
