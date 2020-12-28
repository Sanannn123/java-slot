function getnum() {

  return Math.floor(Math.random() * 10) + 1;
}

class Index extends React.Component {
  render() {

    const num = getnum();

    return (
      <div>
        <h1>My number is : {num}</h1>
        <span> {num === 5 ? "Congrats Bro" : "Bextinizi bir daha sinayin !" } </span>
       </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
