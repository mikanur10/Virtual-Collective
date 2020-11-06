import React, { useState } from "react";
import "./AddEventPage.css";
import UniversalLayout from "../../components/shared/UniversalLayout/UniversalLayout";
import { Redirect } from "react-router-dom";
import { createEvent } from "../../services/events";

const AddEventPage = (props) => {
  const [events, setEvents] = useState({
    name: "",
    title: "",
    imgUrl: "",
    imgUrlTwo: "",
    description: "",
    date: "",
    time: "",
    category: "",
    subCategory: "",
    favorite: false,
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEvents({
      ...events,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createEvent(events);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/events/arts`} />;
  }
  return (
    <UniversalLayout>
      <div>
        <h1 className="create-title">CREATE EVENT</h1>
      </div>
      <div className="add-container">
        <form className="create-form-add" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="input-name"
            placeholder="Name"
            value={events.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-title"
            placeholder="Title"
            value={events.title}
            name="title"
            onChange={handleChange}
          />
          <input
            className="input-date"
            placeholder="Date"
            type="date"
            value={events.date}
            name="date"
            required
            onChange={handleChange}
          />
          <input
            className="input-time"
            placeholder="Time"
            value={events.time}
            name="time"
            required
            onChange={handleChange}
          />
          <textarea
            className="textarea-description"
            rows={10}
            placeholder="Description"
            value={events.description}
            name="description"
            required
            onChange={handleChange}
          />
          <input
            className="input-image-link"
            placeholder="Image Link"
            value={events.imgUrl}
            name="imgUrl"
            required
            onChange={handleChange}
          />
          <input
            className="input-image-link-two"
            placeholder="Image Link Two"
            value={events.imgUrlTwo}
            name="imgUrlTwo"
            onChange={handleChange}
          />
          <select
            className="form-category"
            name="category"
            formid="category"
            value={events.category}
            onChange={handleChange}
          >
            <option selected value="">
              Choose:
            </option>
            <option value="Arts">Arts</option>
            <option value="Music">Music</option>
            <option value="Theatre">Theatre</option>
            <option value="Movies">Movies</option>
            <option value="Comedy">Comedy</option>
          </select>
          <select
            className="form-subcategory"
            name="subCategory"
            formid="subCategory"
            value={events.subCategory}
            onChange={handleChange}
          >
            <option selected value="">
              Choose:
            </option>
            <option value="Exhibit">Exhibit</option>
            <option value="Lecture">Lecture</option>
            <option value="Class">Class</option>
          </select>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </UniversalLayout>
  );
};

export default AddEventPage;
