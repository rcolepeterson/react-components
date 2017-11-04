/**
 * Simple HOC example - Wraps component in div with debug class
 * example - 
 * const MySimpleHOC = SimpleHOC(Hero);
 * <MySimpleHOC />
 * 
 */
import React from "react";
export default function(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <div className="debug">
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}
