import React from "react";

function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

function Parent(props) {
  return (
    <div>
      My input: <CustomTextInput inputRef={props.inputRef} />
    </div>
  );
}

class Grandparent extends React.Component {
  render() {
    return (
      <div>
        <Parent
          inputRef={el => {
            this.inputElement = el;
          }}
        />
      </div>
    );
  }
}

export default Grandparent;
