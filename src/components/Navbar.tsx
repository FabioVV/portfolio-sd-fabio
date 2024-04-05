import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  const HandleResumeDownload = (type:string):boolean =>{
    
    try{
      let filepath = ""
      const link = document.createElement('a')

      if(type == 'portuguese'){
        filepath = "src/common/resume/varela_curriculo.pdf"
        link.href = filepath 
        link.setAttribute('download', "varela-curriculo")

      } else {
        return false
        filepath = "src/common/resume/?.pdf"
        link.href = filepath 
        link.setAttribute('download', "varela-resume")
        
      }
  
      document.body.append(link)
      link.click()
      document.body.removeChild(link)

    } catch(e:unknown){
      console.log(e)
    }
    return true

  }

  return (
    <>
      {/* Donwload Modal */}
      <dialog id="download_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">

          <h3 className="font-bold text-lg">Resume language</h3>
          <div style={{marginTop:'24px'}} className="flex w-full">

            <div onClick={()=>{HandleResumeDownload('portuguese')}} className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center resume">
              Portuguese
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div onClick={()=>{HandleResumeDownload('english')}} className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center resume">
              English <br />
              (Coming soon!)
            </div>

          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      {/* Donwload Modal */}


      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink className='logo' to="/"> Home /&gt; </NavLink></li>
              <li><NavLink to="/projects"> Projects /&gt; </NavLink></li>
              <li><NavLink to="/experiences"> Experience /&gt; </NavLink></li>
              <li><button onClick={()=>{document.getElementById('download_modal')?.showModal()}}> Resume /&gt; </button></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">Fábio</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              <li><NavLink className='logo' to="/"> Home /&gt; </NavLink></li>
              <li><NavLink to="/projects"> Projects /&gt; </NavLink></li>
              <li><NavLink to="/experiences"> Experience /&gt; </NavLink></li>
              <li><button onClick={()=>{document.getElementById('download_modal')?.showModal()}}> Resume /&gt; </button></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar