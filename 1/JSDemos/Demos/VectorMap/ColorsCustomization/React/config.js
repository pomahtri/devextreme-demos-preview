window.config = {
  transpiler: 'plugin-babel',
  meta: {
    'devextreme/localization.js': {
      "esModule": true
    },
    'devextreme/dist/js/vectormap-data/*': {
      'esModule': true
    },
},
  paths: {
    'npm:': '../../../../../node_modules/'
  },
  defaultExtension: 'js',
  map: {
    'react': 'npm:react/umd/react.development.js',
    'react-dom': 'npm:react-dom/umd/react-dom.development.js',
    'prop-types': 'npm:prop-types/prop-types.js',
    'devextreme/dist/js/vectormap-data': 'npm:devextreme/dist/js/vectormap-data',
    'rrule': 'npm:rrule/dist/es5/rrule.js',
    'luxon': 'npm:luxon/build/global/luxon.min.js',
    'es6-object-assign': 'npm:es6-object-assign',
    'devextreme': 'npm:devextreme/cjs',
    'devextreme-react': 'npm:devextreme-react',
    'jszip': 'npm:jszip/dist/jszip.min.js',
    'devextreme-quill': 'npm:devextreme-quill/dist/dx-quill.min.js',
    'devexpress-diagram': 'npm:devexpress-diagram/dist/dx-diagram.js',
    'devexpress-gantt': 'npm:devexpress-gantt/dist/dx-gantt.js',
    '@devextreme/vdom': 'npm:@devextreme/vdom',
    'inferno': 'npm:inferno/dist/inferno.min.js',
    'inferno-compat': 'npm:inferno-compat/dist/inferno-compat.min.js',
    'inferno-create-element': 'npm:inferno-create-element/dist/inferno-create-element.min.js',
    'inferno-dom': 'npm:inferno-dom/dist/inferno-dom.min.js',
    'inferno-hydrate': 'npm:inferno-hydrate/dist/inferno-hydrate.min.js',
    'inferno-clone-vnode': 'npm:inferno-clone-vnode/dist/inferno-clone-vnode.min.js',
    'inferno-create-class': 'npm:inferno-create-class/dist/inferno-create-class.min.js',
    'inferno-extras': 'npm:inferno-extras/dist/inferno-extras.min.js',
    // SystemJS plugins
    'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js'
  },
  packages: {
    'devextreme': {
      defaultExtension: 'js'
    },
    '@devextreme/vdom': {
      defaultExtension: 'js'
    },
    'devextreme-react': {
      main: 'index.js'
    },
    'devextreme/events/utils': {
      main: 'index'
    },
    'devextreme/events': {
      main: 'index'
    },
    'es6-object-assign': {
      main: './index.js',
      defaultExtension: 'js'
    }
  },
  packageConfigPaths: [
    "npm:@devextreme/*/package.json",
  ],
  babelOptions: {
    sourceMaps: false,
    stage0: true,
    react: true
  }
};
System.config(window.config);
