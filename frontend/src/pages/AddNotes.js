import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

import { addNote } from "../utils/apiService";
import moment from "moment";
import Container from "react-bootstrap/esm/Container";

const AddNotes = ({ tokenGenerator, user, editMode, setEditMode }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    !editMode && (data.email = user.email);
    data.owner = user.email;
    data.readers = [];

    // editMode
    //   ?    editEntry(
    //           tokenGenerator,
    //           setEntries,
    //           data,
    //           editMode.id,
    //           editMode.emailHashed,
    //           setEditMode
    //         )

    //   : addNote(tokenGenerator, null, data);
    addNote(tokenGenerator, null, data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>{editMode ? "Change Note" : "Create Note"}</Form.Label>

          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Write your note"
            defaultValue={editMode ? editMode.entry : ""}
            {...register("note", { required: true })}
          />
          {errors.note && <span>This field is required</span>}
        </Form.Group>

        <Button variant="secondary" type="submit" className="mb-2">
          Submit
        </Button>
        {editMode && (
          <Button
            variant="secondary"
            onClick={() => {
              setEditMode(false);
            }}
            className="mb-2"
          >
            Cancel Edit
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default AddNotes;
