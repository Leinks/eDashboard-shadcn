import { ModeToggle } from "@/components/Theme/ToggleButton";
import AdminLayout from "@/layouts/AdminLayout";
// import { Link } from "react-router-dom";


export function Dashboard() {
  return (
    <AdminLayout>
        <ModeToggle/>
        <p>Dashboard</p>
    </AdminLayout>
  )
}

