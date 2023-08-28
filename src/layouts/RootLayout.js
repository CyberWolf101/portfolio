import { Outlet, NavLink } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="root-layout">
     
      <div className="sub-body">
       
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
