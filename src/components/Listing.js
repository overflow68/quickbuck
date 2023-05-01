
import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { ListingCont2, IconicButton } from "../style2";
import axios from "axios";
import '../style/listing.css'
import { useOperations } from "../contexts/OperationsProvider";
import {useAuth} from '../contexts/AuthProvider'
import { useNavigate} from "react-router-dom";
import {AiOutlineMail} from 'react-icons/ai'
import { Link } from "react-router-dom";


export function Listing() {
  const [data, setData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    phoneNumber: "",
    image: "",
    username: ""
  });

  const [editMode, setEditMode] = useState(false);

  const { id } = useParams();

  const { listingAge, setMsgUser } = useOperations();

  const { user, token } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const getSingleListing = async (id) => {
      try {
        const { data: { listing } } = await axios.get(`https://quickbuck.onrender.com/api/v1/listings/${id}`);
        setData(listing);
      } catch (error) {
        alert(error);
      }
    };

    getSingleListing(id);
  }, [id]);

  const handlePriceChange = (e) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');

    setData(prevState => ({ ...prevState, price: e.target.value }));
  };

  const handleDescriptionChange = (e) => {
    setData(prevData => ({ ...prevData, description: e.target.value }));
  };

  const handleContactChange = (e) => {
    setData(prevData => ({ ...prevData, phoneNumber: e.target.value }));
  };

  const handleSaveChanges = () => {
    const newData = {
      price: data.price,
      description: data.description,
      phoneNumber: data.phoneNumber
    };

    axios.patch(`https://quickbuck.onrender.com/api/v1/listings/${id}`, newData, { headers: { Authorization: `Bearer ${token}` } })
      .then(function (response) {
        alert("Item updated successfully!");
        setEditMode(false);
      })
      .catch(function (error) {
        alert(error);
      });
  };

  const handleDeleteListing = () => {
    const confirmation = prompt(`Type in ${data.title} below to delete listing`);

    if (confirmation === data.title) {
      axios.delete(`https://quickbuck.onrender.com/api/v1/listings/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(function (response) {
          alert("Listing removed successfully");
          setEditMode(false);
          navigate("/");
        })
        .catch(function (error) {
          alert(error);
        });
    } else {
      alert("Listing was not deleted!");
    }
  };

  const handleMsgUser = () => {
    const user = {
      username:data.username,
      id: data.createdBy
    };
    
    setMsgUser(user);
    navigate("/convos");
    };
    
    const { title, price, description, phoneNumber, username, image} = data;
    
    return (
    <ListingCont2>
    <div className="cont-list">
    <div>
    <img alt="" className="list-img" src={image} ></img><h1 className="title-list">{title}</h1>
    </div>

    <div className="stats">
      {!editMode ? <h2>{price}€</h2> :
        <input
          value={price}
          onChange={handlePriceChange}
          maxLength="6"
          placeholder="Type new price here"
        />
      }
      <h5>{listingAge(data)}</h5>

      <div className="stat">
        <h3>Description</h3>
        {!editMode ?
          <p>{description}</p> :
          <input
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Type new description here"
          />
        }
      </div>

      <div className="stat">
        <h4>Contact</h4>
        {!editMode ?
          <p>{phoneNumber}</p> :
          <input
            value={phoneNumber}
            onChange={handleContactChange}
            maxLength='9'
            placeholder="Type new contact here"
          />
        }
      </div>

      <div className="stat">
        <h4>Listed by:</h4>
        <p>{username}</p>
      </div>

      {(user === username) && !editMode &&
        <div>
          <IconicButton onClick={() => setEditMode(true)}>Edit</IconicButton>
          <IconicButton onClick={handleDeleteListing}>Delete</IconicButton>
        </div>
      }

      {user !== username &&
        <Link to="/convos">
          <AiOutlineMail onClick={handleMsgUser} className="mail" size={50} />
        </Link>
      }

      {editMode &&
        <IconicButton onClick={handleSaveChanges}>Save</IconicButton>
      }

    </div>

  </div>
</ListingCont2>
);
}