const base_url = "https://jsonplaceholder.typicode.com";

const getUsers = () => {
  fetch(`${base_url}/users`)
    .then((res) => {
      return res.json()
    })
    .then((data) => console.log(data))
    .catch((e) => console.log(`error sever`))
}

//getUsers();

const getComments = async() => {
  const response = await fetch(`${base_url}/comments`)
  const data = await response.json()
  console.log(data);
} 

getComments()