import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className=' bg-slate-800 border-t text-white font-serif'>
      <div className=' px-5 h-25 flex flex-col items-center justify-center'>
        <div>
          <a href="https://www.instagram.com/">
            <lord-icon
              src="https://cdn.lordicon.com/ctlpkznr.json"
              trigger="hover">
            </lord-icon>
          </a>
          <a href="https://www.facebook.com/">
            <lord-icon
              src="https://cdn.lordicon.com/ynvwvpsx.json"
              trigger="hover">
            </lord-icon>
          </a>
          <a href="https://www.youtube.com/">
            <lord-icon
              src="https://cdn.lordicon.com/ojifxrin.json"
              trigger="hover">
            </lord-icon>
          </a>
          <a href="https://www.twitter.com/">
            <lord-icon
              src="https://cdn.lordicon.com/fijfswsp.json"
              trigger="hover">
            </lord-icon>
          </a>
        </div>
        <p className='text-xs'>@2025 | <Link to="">LEGAL & PRIVACY</Link></p>
      </div>
    </div>
  )
}

export default Footer
