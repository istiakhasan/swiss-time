import React from "react";
import { Disclosure } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { LogoutIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import "./Menubar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";
import { signOut } from "firebase/auth";
import LineLoading from "../LineLoading/LineLoading";


const Menubar = () => {
  const [user,loading]=useAuthState(auth);
  const handleSignOut=()=>{
     signOut(auth)
  }

  if(loading){
    return <div className="flex mt-2 justify-center">
           <LineLoading />
         </div>
  }
 

  return (
    <Disclosure as="nav" className="gradiant-color sticky top-0 z-10 ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <div className="flex-shrink-0  flex items-center">
                  <h1 className="lg:text-2xl  text-xl font-bold text-white">Swiss Time</h1>
                </div>
                <div className="hidden  md:block sm:ml-6">
                  <div className="flex space-x-4">
                   
                    {/* custom link */}
                     <Link 
                        to="/home"
                        className="text-white font-bold  hover:bg-white hover:text-[#5572FF] lg:px-3 px-0  py-2 rounded-md text-sm ">
                       Home
                      </Link> 
                      {
                        user &&
                           <>
                            <Link 
                        to="/addinventory"
                        className="text-white font-bold  hover:bg-white hover:text-[#5572FF] lg:px-3 px-0  py-2 rounded-md text-sm ">
                       Add Items
                      </Link> 
                     <Link 
                        to="/manageinventory"
                        className="text-white font-bold hover:bg-white hover:text-[#5572FF] lg:px-3 px-0  py-2 rounded-md text-sm ">
                       Manage Items
                      </Link> 
                   
                     <Link 
                        to="/myitems"
                        className="text-white font-bold hover:bg-white hover:text-[#5572FF] lg:px-3 px-0  py-2 rounded-md text-sm ">
                       My Items
                      </Link> 
                     
                    
                   
                      
                           </>
                        
                      }
                      <div>

                   
                      </div>

                      <Link 
                        to="/blogs"
                        className="text-white font-bold hover:bg-white hover:text-[#5572FF] lg:px-3 px-0  py-2 rounded-md text-sm ">
                       Blogs
                      </Link> 
                      <Link 
                        to="/contactus"
                        className="text-white font-bold hover:bg-white hover:text-[#5572FF] lg:px-3 px-0  py-2 rounded-md text-sm ">
                       Contact us
                      </Link> 
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               
                 {
                 loading?(
                   <LineLoading />
                 ):(
                  user ?  <button
                  onClick={handleSignOut}
                  className=" bg-white md-px-4 px-2 text-[#F45762] lg:px-6 hover:bg-[#F45762] hover:text-white  font-bold lg:mx-6 flex items-center justify-center  py-2 rounded-lg">
                   <LogoutIcon  className=" w-6 h-6 " />
                    Log Out</button>:
                     
                     <Link
                     className=" bg-white px-6 lg:px-12 text-[#5572FF] font-bold lg:mx-6  py-2 rounded-lg"
                     to="/login"
                     >
                     Login
                   </Link>
                 )
                 } 
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
              
                <Disclosure.Button
                 
                  as={Link}
                  to="/"
                  className="hover:bg-white px-6 lg:px-12 text-white hover:text-[#5572FF] font-bold lg:mx-6  py-2 rounded-lg"
                >
                 Home
                </Disclosure.Button>
               {
                 user && (
                   <>
                      <Disclosure.Button
                 
                 as={Link}
                 to="/addinventory"
                 className="hover:bg-white px-6 lg:px-12 text-white hover:text-[#5572FF] font-bold lg:mx-6  py-2 rounded-lg"
               >
                Add Items
               </Disclosure.Button>
               <Disclosure.Button
                
                 as={Link}
                 to="/manageinventory"
                 className="hover:bg-white px-6 lg:px-12 text-white hover:text-[#5572FF] font-bold lg:mx-6  py-2 rounded-lg"
               >
                Manage Items
               </Disclosure.Button>
               <Disclosure.Button
                
                 as={Link}
                 to="/myitems"
                 className="hover:bg-white px-6 lg:px-12 text-white hover:text-[#5572FF] font-bold lg:mx-6  py-2 rounded-lg"
               >
                 My Items
               </Disclosure.Button>
                   </>
                 )
               }
                <Disclosure.Button
                 
                  as={Link}
                  to="/blogs"
                  className="hover:bg-white px-6 lg:px-12 text-white hover:text-[#5572FF] font-bold lg:mx-6  py-2 rounded-lg"
                >
                 Blogs
                </Disclosure.Button>
                <Disclosure.Button
                 
                  as={Link}
                  to="/contactus"
                  className="hover:bg-white px-6 lg:px-12 text-white hover:text-[#5572FF] font-bold lg:mx-6  py-2 rounded-lg"
                >
                 Contact Us
                </Disclosure.Button>
           
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Menubar;
