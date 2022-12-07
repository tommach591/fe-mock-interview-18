import "./Button.css";

function Button({ children, doSomething }) {
  return (
    <div
      className="Button"
      onClick={() => {
        doSomething();
      }}
    >
      <h2>{children}</h2>
    </div>
  );
}

export default Button;
