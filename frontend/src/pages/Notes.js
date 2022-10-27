import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getNotes } from "../utils/apiService";
// import { getConfig } from "../config";

const Notes = ({ tokenGenerator, user }) => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes(tokenGenerator, user.email, setNotes, null);
  }, []);

  return (
    <div>
      {notes.map((note, index) => {
        return (
          <div key={index}>
            <div>
              Note: <p>{note.note}</p>
            </div>
            <div>
              Readers:{" "}
              <p>
                {note.readers.forEach((reader) => {
                  return reader;
                })}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
