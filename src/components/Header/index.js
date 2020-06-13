import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { headerNavItems, headerSocialLinkItems } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = props => {
  const {onClickItem} = props
  const [active, setActive] = useState(0)

  const handleClick = (index, id) => {
    setActive(index)
    onClickItem(id)
  }
  return(
    <header className="d-flex justify-space row w-100 align-center">
      <img className="site-logo" src="/logo.png" width={150} height={185} />
      <ul className="hz-list ml-1em">
        {headerNavItems.map((item, index) => (
          <li onClick={() => handleClick(index, item.target)} className={active === index ? "text-white" : ""} key={index}>
            {item.title}
          </li>
        ))}
      </ul>

      <ul className="hz-list">
        {headerSocialLinkItems.map((item, index) => (
          <li key={index}>
            <div className="hexagon-sm">
              <div className="circle m-auto">
                <span className="hexagon-sm-icon text-dark"><FontAwesomeIcon icon={['fab', item.icon]} /></span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </header>
  )
}

Header.propTypes = {
  onClickItem: PropTypes.func.isRequired
};

export default Header;