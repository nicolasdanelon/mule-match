// Import Dependencies
import React    from 'react';
import ReactDOM from 'react-dom';

// Set up initial state
/* eslint-disable */
const initialState = {
  features: {
    allFeatures: [
      {
        id: 1,
        title: 'feature1',
        description: 'description of feature 1',
        pic: 'http://naw.netatwork.netdna-cdn.com/uploads/2015/06/icon-security-monitoring.png'
      },
      {
        id: 2,
        title: 'feature2',
        description: 'description of feature 2',
        pic: 'http://naw.netatwork.netdna-cdn.com/uploads/2015/06/icon-security-monitoring.png'
      },
      {
        id: 3,
        title: 'feature3',
        description: 'description of feature 3',
        pic: 'http://naw.netatwork.netdna-cdn.com/uploads/2015/06/icon-security-monitoring.png'
      },
      {
        id: 4,
        title: 'feature4',
        description: 'description of feature 4',
        pic: 'http://naw.netatwork.netdna-cdn.com/uploads/2015/06/icon-security-monitoring.png'
      },
      {
        id: 5,
        title: 'feature5',
        description: 'description of feature 4',
        pic: 'http://naw.netatwork.netdna-cdn.com/uploads/2015/06/icon-security-monitoring.png'
      }
    ],
  },
  products: {
    allProducts: [
      {
        title:        'API Manager',
        description:  'API Manager enables you to manage clients, apply policies, define SLAs, monitor and analyze traffic, and set API alerts.',
        pic:          'https://docs.google.com/uc?id=0B5cZ5hvW30XSYWF2cXNKVzJoWWc',
        url:          'https://www.mulesoft.com/platform/api/manager',
        features:     [1,2,3,4]
      },
      {
        title:        'Runtime Manager',
        description:  'Runtime Manager enables you to deploy, manage, and monitor applications deployed in the cloud or on-premises.',
        pic:          'https://docs.google.com/uc?id=0B5cZ5hvW30XSeDV0OU82bTV5YXM',
        url:          'https://www.mulesoft.com/platform/anypoint-management-center',
        features:     [1,2,3,5]
      },
      {
        title:        'Exchange',
        description:  'Anypoint Exchange is a discovery interface where you can find Anypoint Connectors, Templates, examples, and API descriptions that speed project delivery.',
        pic:          'https://docs.google.com/uc?id=0B5cZ5hvW30XSdEpZVTRKaUNsLTg',
        url:          'https://www.mulesoft.com/exchange#!/?sortBy=rating',
        features:     [1,2,4,5]
      },
      {
        title:        'Access Management',
        description:  'Access management enables you to control and scale usage of Anypoint Platform in your organization through user management, audit logging and enforcement of roles, business groups and environments.',
        pic:          'https://docs.google.com/uc?id=0B5cZ5hvW30XSQlEtRFBBREtwN28',
        url:          'https://docs.mulesoft.com/anypoint-mq/mq-access-management',
        features:     [3,4,5]
      },
      {
        title:        'Data Gateway',
        description:  'With Salesforce1 Lightning Connect and Anypoint Data Gateway, Salesforce users can easily and quickly connect to and access mission-critical back office data from systems like SAP, within Salesforce.',
        pic:          'https://docs.google.com/uc?id=0B5cZ5hvW30XSWnlsQ1dEOXNyLWc',
        url:          'https://www.mulesoft.com/platform/data-gateway',
        features:     [2,3,4]
      },
      {
        title:        'MQ',
        description:  'Anypoint MQ is an enterprise-class cloud messaging service that enables you to perform advanced asynchronous messaging scenarios with fully hosted and managed cloud message queues and exchanges.',
        pic:          'https://docs.google.com/uc?id=0B5cZ5hvW30XSZ1gtNEVUX2JhdjA',
        url:          'https://www.mulesoft.com/platform/anypoint-mq-message-queue',
        features:     [3,4,5]
      },
      {
        title:        'Partner Manager',
        description:  'Partner Manager provides an interface for managing partner settings and viewing B2B Message tracking data for all B2B transactions between you and your trading partners.',
        pic:          'https://docs.google.com/uc?id=0B5cZ5hvW30XSNDFOZEstQWlzWTQ',
        url:          'https://docs.mulesoft.com/anypoint-b2b/anypoint-partner-manager-users-guide',
        features:     [4,5]
      }
    ]
  }
};
/* eslint-enable */

// Set up development enhancers for redux store
const enhancers = window.devToolsExtension ? window.devToolsExtension() : (createStore) => createStore;

const rootEl = document.getElementById('root');

let render = () => {
  // eslint-disable-next-line global-require
  const App = require('./App').default;
  ReactDOM.render(
    <App
      initialState={initialState}
      enhancers={enhancers}
    />,
    rootEl);
};

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render;
  const renderError = (error) => {
    // eslint-disable-next-line global-require
    const RedBox = require('redbox-react');
    ReactDOM.render(<RedBox error={error} />, rootEl);
  };

  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  };

  // Enable Webpack hot module replacement for App
  module.hot.accept('./App', () => {
    setTimeout(render);
  });

  // Enable Webpack hot module replacement for reducers
  // module.hot.accept('./reducers', () => {
  //   const nextReducer = require('./reducers/index').default;
  //   store.replaceReducer(nextReducer);
  // });
}

render();
