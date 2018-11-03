import * as React from 'react';
import './App.css';
import CameraPage from './components/CameraPage';
import IAppStoreState from "./types/AppStoreState";
import PageId from "./types/PageId";

class App extends React.Component {
  public state: IAppStoreState;

  constructor (props: any) {
    super(props);
    this.state = {
      pageId: PageId.CAMERA_VIEW
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  public render() {
    return (
      <div className="App">
        {this.renderPage()}
      </div>
    );
  }
  private onSubmit () {
    window.alert("submit!");
  }
  private renderPage () {
    switch (this.state.pageId) {
      case PageId.CAMERA_VIEW: return <CameraPage onSubmit={this.onSubmit}/>;
    }
  }
  
}
export default App;
