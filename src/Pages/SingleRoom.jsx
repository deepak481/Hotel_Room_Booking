import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import defaultBcg from "../assets/img/jpeg/room-1.jpeg";
import { RoomContext } from "../Context/Context";
import Banner from "../Components/Banner/Banner";
import StyledHero from "../Components/StyledHero/StyledHero";

const SingleRoom = (props) => {
  const { getRoom } = useContext(RoomContext);
  const [state, setState] = useState({
    slug: props.match.params.slug,
    defaultBcg,
  });

  const room = getRoom(state.slug);

  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found!</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  const [mainImg, ...defaultImg] = images;

  return (
    <>
      <StyledHero img={mainImg || state.defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>

      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item, index) => {
            return <img key={index} src={item} alt={name} />;
          })}
        </div>

        <div className="single-room-info">
          <article className="desc">
            <h3>details:</h3>
            <p>{description}</p>
          </article>

          <article className="info">
            <h3>information:</h3>
            <h6>price : ₹{price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>
              max capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>

      <section className="room-extras">
        <h6>extras:</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}> - {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
