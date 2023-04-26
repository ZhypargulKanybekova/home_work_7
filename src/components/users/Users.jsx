import { useEffect, useState } from "react";
// import styled from "styled-components";

function Users() {
  const [user, serUser] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await result.json();

      serUser(data);
      console.log(data);
    };
    fetchData();
  }, []);

  async function fetchDataId(id) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id} `
    );
    const responseData = await response.json();
    setData(responseData);
  }
  useEffect(() => {
    fetchDataId();
  }, []);

  return (
    <div className="App">
      {user?.map((item) => (
        <div
          style={{
            width: "100%",
            height: "50px",
            backgroundColor: "#e7bbf4df",
            marginTop: "5px",
          }}
          onClick={() => fetchDataId(item.id)}
          key={item.id}
        >
          {item.name}
        </div>
      ))}

      {data && (
        <div style={{width:'100%', height:'100%',backgroundColor:'lightcoral'}}>
          <p>{data.username}</p>
          <p>{data.email}</p>
          <p>{data.id} </p>
        </div>
      )}
    </div>
  );
}

export default Users;

// const UsersContainer = styled.div`
//  width:100% ;
//  height:80px;
//  background-color:#f8dfff;

// `
