import { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import style from './Header.module.css';

import { PATH } from 'enum';

const Wrapper = styled.header`
  margin: 0 auto;
  padding: 20px;
`;

export const Header = (): ReactElement => {
  const classActive = (active: { isActive: boolean }): string =>
    active.isActive ? `${style.link} + ${style.act}` : style.link;
  return (
    <Wrapper>
      <NavLink className={classActive} to={PATH.LOGIN}>
        LOGIN
      </NavLink>
      <NavLink className={classActive} to={PATH.PROFILE}>
        PROFILE
      </NavLink>
      <NavLink className={classActive} to={PATH.REGISTRATION}>
        REGISTRATION
      </NavLink>
      <NavLink className={classActive} to={PATH.RECOVERY}>
        RECOVERY
      </NavLink>
      <NavLink className={classActive} to={PATH.PAGE404}>
        PAGE404
      </NavLink>
      <NavLink className={classActive} to={PATH.NEW_PASSWORD}>
        NEW_PASSWORD
      </NavLink>
      <NavLink className={classActive} to={PATH.TEST}>
        TEST
      </NavLink>
    </Wrapper>
  );
};

// type ButtonPropsType = {
//   isActive: boolean;
// };
//
// const Button = styled(NavLink)`
//   margin-right: 20px;
//   background-color: #3498db;
//   color: white;
//   padding: 16px;
//   font-size: 16px;
//   border: none;
//   border-radius: 5px;
//   min-width: 80px;
//   cursor: pointer;
//   text-decoration: none;
// `;
