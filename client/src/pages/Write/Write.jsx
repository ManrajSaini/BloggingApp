import React, { useContext, useState } from 'react';
import image from './writeImage.jpg';
import './Write.css';
import axios from 'axios';
import { Context } from '../../context/Context';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post("https://blogappmanrajsingh.onrender.com/api/upload", data);
      } catch (err) {
        console.error(err);
      }
    }

    try {
      const res = await axios.post("https://blogappmanrajsingh.onrender.com/api/posts", newPost);
      window.location.replace("https://blogappmanrajsingh.onrender.com/post/" + res.data._id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='write'>
      {file && (
        <img
          className='writeImage'
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <ReactQuill
            value={desc}
            onChange={setDesc}
            className="writeInput writeText"
          />
        </div>
        <button className="writeSubmit" type='submit'>Publish</button>
      </form>
    </div>
  );
}
