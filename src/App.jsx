import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "@/components/organisms/Layout";

import Dashboard from "@/components/pages/Dashboard";
import Patients from "@/components/pages/Patients";
import Appointments from "@/components/pages/Appointments";
import Admissions from "@/components/pages/Admissions";
import Staff from "@/components/pages/Staff";
import Departments from "@/components/pages/Departments";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/departments" element={<Departments />} />
        </Routes>
      </Layout>
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 9999 }}
      />
    </BrowserRouter>
  );
}

export default App;