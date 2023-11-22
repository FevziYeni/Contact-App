import { useState, useEffect } from "react";
import "./style.css";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Fevzi",
      phone_number: "+905530583061",
    },
    {
      fullname: "Hakan",
      phone_number: "+905433727716",
    },
    {
      fullname: "Beytullah",
      phone_number: "+905369643230",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
