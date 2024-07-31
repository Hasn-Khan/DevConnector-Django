import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profile";

const Profiles = () => {
  const [search, setSearch] = useState("");
  const { profiles, loading, error } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    if(search){
      const timer = setTimeout(() => {
        const searchParams = { name: search, email: search, company: search, location: search };
        dispatch(getProfiles(searchParams));
      }, 500)

      return () => clearTimeout(timer)
    }
    else{
      dispatch(getProfiles(''))
    }
  }, [search, dispatch])

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop"></i> Browse and connect with
            developers
          </p>
          <form>
            <input
              type="text"
              placeholder="Search profiles by name, email, or company..."
              value={search}
              onChange={handleInputChange}
            />
          </form>
          {error?.msg ? (
            <h4>No profiles found...</h4>
          ) : (
            <div className="profiles">
              { profiles.map(profile => (
                  <ProfileItem key={profile.id} profile={profile} />
                ))}
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profiles;
