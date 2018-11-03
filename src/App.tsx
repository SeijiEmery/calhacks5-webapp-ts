import * as React from 'react';
import './App.css';
import AppStoreState from "./types/AppStoreState";
import PageId from "./types/PageId";
import CameraPage from './components/CameraPage';

class App extends React.Component {
  state: AppStoreState;

  constructor (props: any) {
    super(props);
    this.state = {
      pageId: PageId.CAMERA_VIEW
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit () {
    window.alert("submit!");
  }
  private renderPage () {
    switch (this.state.pageId) {
      case PageId.CAMERA_VIEW: return <CameraPage onSubmit={this.onSubmit}/>;
    }
  }
  public render() {
    return (
      <div className="App">
        {this.renderPage()}
      </div>
    );
  }
}
export default App;
