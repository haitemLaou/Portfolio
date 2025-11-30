import React from 'react'

export default function SideBar({show,list}) {
    if (!show) return null;

  return (
    <div className="sidebar-overlay">
      <div className="sidebar">
        <ul>{list}</ul>
      </div>
    </div>
    
  );
  
}
