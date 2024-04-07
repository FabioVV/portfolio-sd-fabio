import React from 'react'
import Default_page from '../../components/default_page'

function Experiences() {


  return (
    <Default_page>

      <section className='experiences'>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">May of 2023-Present</time>
              <div className="text-lg font-black">All Flags Náutica</div>
              <div className="text-sm font-black mb-3">Software Developer (Junior)</div>

              The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
            </div>
            <hr/>
          </li>

        </ul>
      </section>

    </Default_page>
  )
}

export default Experiences