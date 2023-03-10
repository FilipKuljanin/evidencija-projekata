import i18next from 'i18next';
import en from './i18n/en';
import Dashboard from './Dashboard';
import React from 'react';

i18next.addResourceBundle('en', 'dashboardPage', en);

const DashboardConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboard',
      element: <Dashboard />,
    },
  ],
};

export default DashboardConfig;
