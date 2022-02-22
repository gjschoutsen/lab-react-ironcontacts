import Contacts from "./contacts.json";
import { useState } from "react";
import "./App.css";

function App() {
  const fiveContacts = Contacts.slice(0, 5);
  const [contact, setContact] = useState(fiveContacts);

  const restContacts = Contacts.slice(5, Contacts.length);
  let randomContact =
    restContacts[Math.floor(Math.random() * restContacts.length)];

  const addRandomContact = () => {
    const randomArr = [];
    randomArr.push(randomContact);
    setContact((prevState) => [...prevState, ...randomArr]);
  };

  const sortByName = () => {
    const sortedByNameArr = []
      .concat(contact)
      .sort((a, b) => (a.name > b.name ? 1 : -1));
    setContact(sortedByNameArr);
  };

  const sortByPopularity = () => {
    const sortedByPopularityArr = []
      .concat(contact)
      .sort((a, b) => (a.popularity > b.popularity ? -1 : 1));
    setContact(sortedByPopularityArr);
  };

  const deleteContact = (id) => {
    const filteredContacts = contact.filter((e) => {
      return e.id !== id;
    });
    setContact(filteredContacts);
  };

  return (
    <div className="App">
      <h1>Iron contacts page</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>

        {contact.map((e) => {
          return (
            <tr className="rows" key={e.id}>
              <td>
                {" "}
                <img src={e.pictureUrl} alt={e.name} />{" "}
              </td>
              <td>{e.name}</td>
              <td>{e.popularity}</td>
              {e.wonOscar && <td>🏆</td>}
              {!e.wonOscar && <td></td>}
              {e.wonEmmy && <td>🏆</td>}
              {!e.wonEmmy && <td></td>}
              <td>
                <button onClick={() => deleteContact(e.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
