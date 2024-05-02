import React from 'react'
import { Link } from '@reach/router'

import me from '../../content/images/boyoti2024.jpg'
import bae from '../../content/images/elodie2024.jpg'

export const AboutSidebar = () => {
  return (
    <aside className="post-sidebar">
      <div className="post-sidebar-card">
        <h2>Me</h2>
        <img src={me} alt="Tania" />
      </div>
      <div className="post-sidebar-card">
        <h2>Elodie (Bae)</h2>
        <img src={bae} alt="Tania" />
      </div>
      <div className="post-sidebar-card">
        <Link to="/dad">Memories of Dad</Link>
      </div>
    </aside>
  )
}
