import { ReactElement } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Login, NewPassword, Page404, Profile, Recovery, Registration, Test } from '.';

import { PATH } from 'enum';
import { CardList } from 'pages/CardList';
import { PacksList } from 'pages/PacksList';

export const Routers = (): ReactElement => (
  <Routes>
    <Route path={'/*'} element={<Page404 />} />
    <Route path="/" element={<Navigate to={PATH.PROFILE} />} />
    <Route path={PATH.LOGIN} element={<Login />} />
    <Route path={PATH.PROFILE} element={<Profile />} />
    <Route path={PATH.REGISTRATION} element={<Registration />} />
    <Route path={PATH.NEW_PASSWORD} element={<NewPassword />} />
    <Route path={PATH.PAGE404} element={<Page404 />} />
    <Route path={PATH.RECOVERY} element={<Recovery />} />
    <Route path={PATH.TEST} element={<Test />} />
    <Route path={PATH.CARDS} element={<PacksList />} />
    <Route path={PATH.CARD} element={<CardList />} />
  </Routes>
);
