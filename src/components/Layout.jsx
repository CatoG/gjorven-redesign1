import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { topNav, sidebarGroupOne, sidebarGroupTwo, footerLinks } from '../data/nav';

function SidebarList({ items, pathname }) {
  return (
    <ul className="nav menu mod-list">
      {items.map((item) => {
        const isActive = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
        return (
          <li key={item.to} className={isActive ? 'parent current active' : 'parent'}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Layout({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="body" id="top">
      <div className="container">
        <header className="header" role="banner">
          <div className="header-inner clearfix">
            <Link className="brand pull-left" to="/">
              <img src="/images/rg-logo2.gif" alt="Gjorven.no" />
            </Link>
            <div className="header-search pull-right" />
          </div>
        </header>

        <nav className="navigation" role="navigation">
          <div className="navbar pull-left">
            <a
              className={`btn btn-navbar${navOpen ? '' : ' collapsed'}`}
              onClick={() => setNavOpen((v) => !v)}
            >
              <span className="element-invisible">Toggle Navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </a>
          </div>
          <div className={`nav-collapse collapse${navOpen ? ' in' : ''}`}>
            <ul className="nav menu nav-pills mod-list">
              {topNav.map((item) => (
                <li key={item.to} className={pathname === item.to ? 'current active' : undefined}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="row-fluid">
          <div id="sidebar" className="span3">
            <div className="sidebar-nav">
              <div className="moduletablem10">
                <SidebarList items={sidebarGroupOne} pathname={pathname} />
              </div>
              <div className="moduletablem10w">
                <SidebarList items={sidebarGroupTwo} pathname={pathname} />
              </div>
            </div>
          </div>

          <main id="content" role="main" className="span9">
            {children}
            <div className="clearfix" />
          </main>
        </div>
      </div>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <hr />
          <div className="custom">
            <div style={{ fontFamily: 'verdana', fontSize: '9px', lineHeight: 'normal', textAlign: 'center' }}>
              {footerLinks.map((item, i) => (
                <span key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                  {i < footerLinks.length - 1 ? ' | ' : null}
                </span>
              ))}
              <br /> Copyright © 2013 gjorven.no. Alle rettigheter reservert.
            </div>
          </div>
          <p className="pull-right">
            <a href="#top" id="back-top">
              Back to Top
            </a>
          </p>
          <p>&copy; 2026 Gjorven.no</p>
        </div>
      </footer>
    </div>
  );
}
