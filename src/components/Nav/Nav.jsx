import { useState } from "react";
import List from "../List/List";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Nav = () => {
    const [open,setOpen]=useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/', exact: true },
        { id: 2, name: 'About', path: '/about', exact: true },
        { id: 3, name: 'Services', path: '/services', exact: true },
        { id: 4, name: 'Contact', path: '/contact', exact: true },
        { id: 5, name: 'NotFound', path: '*' }
      ];
    return (
        
        <nav className="bg-yellow-100">
           <div onClick={()=>setOpen(!open)} className=" md:hidden">
            {
                open ==true ?<IoCloseSharp className="text-3xl"></IoCloseSharp> : <IoMenu className="text-3xl"></IoMenu>
            }
          
            
           </div>
           <ul className={`md:flex gap-5 md:justify-around bg-cyan-500 p-5 text-black rounded-lg absolute md:static duration-1000 ml-5 shadow-lg 
           ${open?'top-12' :"-top-60"}
           `}>
           {
                routes.map((route,idx)=><List key={idx} route={route}></List>)
            }
           </ul>
        </nav>
    );
};

export default Nav;