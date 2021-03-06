import React from 'react';
import Diagram, { Group, Toolbox } from 'devextreme-react/diagram';
import 'whatwg-fetch';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.diagramRef = React.createRef();
  }

  componentDidMount() {
    var diagram = this.diagramRef.current.instance;
    fetch('../../../../data/diagram-structure.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        diagram.import(JSON.stringify(json));
      })
      .catch(function() {
        throw 'Data Loading Error';
      });
  }
  render() {
    return (
      <Diagram id="diagram" ref={this.diagramRef}>
        <Toolbox>
          <Group category="general" title="General" />
          <Group category="containers" title="Containers" expanded={true} />
        </Toolbox>
      </Diagram>
    );
  }
}

export default App;
