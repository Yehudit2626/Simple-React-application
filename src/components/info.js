import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";

export default withRouter(function Info(props) {
  const [id, setId] = useState(props.match.params.id);
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`https://gorest.co.in/public/v1/users/${id}`)
      .then(response => response.json())
      .then(data => {
        setInfo(data['data']);
      })
  }, []);

  const goBack = () => {
    props.history.goBack();
  }
  return (
    <>
      <header>
        <button onClick={goBack}>Back</button>
        <h4>info</h4>
      </header>
      <main>
        {Object.entries(info).map(([key, value]) => {
          return (<div>{key}: {value} </div>)
        })}
      </main>

    </>

  )
})
