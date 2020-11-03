import React from "react";
import "./sample-component.css";
class SampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "বর্গমূল",
      flag: false,
    };
  }

  handleClick = () => {
    this.setState({
      flag: !this.state.flag,
    });
    if (this.state.flag) {
      this.setState({
        text: "আসিতেছে",
      });
    } else {
      this.setState({
        text: "শিঘ্রই!",
      });
    }
  };

  render() {
    return (
      <div className="sample-component-wrapper">
        <div
          onClick={this.handleClick}
          className="sample-component"
          style={{ backgroundColor: this.props.backgroundColor }}
        >
          <h3>{this.props.text}</h3>
          <div>{this.state.text}</div>
        </div>
      </div>
    );
  }
}

export { SampleComponent };
