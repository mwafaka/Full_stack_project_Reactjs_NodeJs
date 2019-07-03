import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import AlgoliaPlaces from "algolia-places-react";

import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";

class CreateProfile extends Component {
  state = {
    company: "",
    website: "",
    location: "",
    latlng: "",
    status: "",
    skills: "",
    githubusername: "",
    imageUrl: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
    displaySocialInputs: false,
    toggleSocialInputs: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.props.loggedInUser);
    if (this.props.loggedInUser) {
      let newProfile = {
        userId: this.props.loggedInUser._id,
        profileData: { ...this.state }
      };
      this.props.createProfile(newProfile, this.props.history);
    } else {
    }
  };

  selectAddressHandler = (rawAnswer, suggestion) => {
    console.log(suggestion);
    let locationAddress = "";
    if (suggestion.name) {
      locationAddress = suggestion.name;
    }
    if (suggestion.administrative) {
      locationAddress += ", " + suggestion.administrative;
    }
    if (suggestion.city) {
      locationAddress += ", " + suggestion.city;
    }
    if (suggestion.country) {
      locationAddress += ", " + suggestion.country;
    }
    // console.log(locationAddress);
    this.setState({
      location: locationAddress,
      latlng: [suggestion.latlng.lat, suggestion.latlng.lng]
    });

    console.log(
      locationAddress,
      "\n",
      suggestion.latlng.lat,
      suggestion.latlng.lng
    );
  };

  render() {
    const {
      company,
      website,
      status,
      skills,
      imageUrl,
      githubusername,
      bio,
      twitter,
      facebook,
      linkedin,
      youtube,
      instagram,
      displaySocialInputs
    } = this.state;
    return (
      <Fragment>
        <h1 className="large text-dark">Create Your Profile</h1>
        <p className="lead">
          <i className="fas fa-user" /> Let's get some information to make your
          profile stand out
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={e => this.onSubmit(e)}>
          <div className="form-group">
            <select
              name="status"
              value={status}
              onChange={e => this.onChange(e)}
            >
              <option value="0">* Select Professional Status</option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor">Instructor or Teacher</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
            <small className="form-text">
              Give us an idea of where you are at in your career
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Company"
              name="company"
              value={company}
              onChange={e => this.onChange(e)}
            />
            <small className="form-text">
              Could be your own company or one you work for
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Website"
              name="website"
              value={website}
              onChange={e => this.onChange(e)}
            />
            <small className="form-text">
              Could be your own or a company website
            </small>
          </div>

          <div className="form-group">
            <AlgoliaPlaces
              placeholder="Write an address here"
              options={{
                appId: "plV7FOH0L4TX",
                apiKey: "5f07d771e38fc7ec02c89334c69d8fa1"
              }}
              onChange={({ query, rawAnswer, suggestion, suggestionIndex }) =>
                this.selectAddressHandler(rawAnswer, suggestion)
              }
              onSuggestions={({ rawAnswer, query, suggestions }) =>
                console.log(
                  "You will receive the array of suggestions that are displayed."
                )
              }
            />
            <small className="form-text">
              City & state suggested (eg. Boston, MA)
            </small>
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="* Skills"
              name="skills"
              value={skills}
              onChange={e => this.onChange(e)}
            />
            <small className="form-text">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Github Username"
              name="githubusername"
              value={githubusername}
              onChange={e => this.onChange(e)}
            />
            <small className="form-text">
              If you want your latest repos and a Github link, include your
              username
            </small>
          </div>

          <form
            method="post"
            enctype="multipart/form-data"
            action="/api/profile"
          >
            <input type="file" name="file" />
            <input type="submit" value="Submit" />
          </form>

          <div className="form-group">
            <textarea
              placeholder="A short bio of yourself"
              name="bio"
              value={bio}
              onChange={e => this.onChange(e)}
            />
            <small className="form-text">Tell us a little about yourself</small>
          </div>

          <div className="my-2">
            <button
              onClick={() =>
                this.setState({
                  toggleSocialInputs: !this.state.toggleSocialInputs
                })
              }
              type="button"
              className="btn btn-light"
            >
              Add Social Network Links
            </button>
            <span>Optional</span>
          </div>

          {this.state.toggleSocialInputs && (
            <Fragment>
              <div className="form-group social-input">
                <i className="fab fa-twitter fa-2x" />
                <input
                  type="text"
                  placeholder="Twitter URL"
                  name="twitter"
                  value={twitter}
                  onChange={e => this.onChange(e)}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-facebook fa-2x" />
                <input
                  type="text"
                  placeholder="Facebook URL"
                  name="facebook"
                  value={facebook}
                  onChange={e => this.onChange(e)}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-youtube fa-2x" />
                <input
                  type="text"
                  placeholder="YouTube URL"
                  name="youtube"
                  value={youtube}
                  onChange={e => this.onChange(e)}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-linkedin fa-2x" />
                <input
                  type="text"
                  placeholder="Linkedin URL"
                  name="linkedin"
                  value={linkedin}
                  onChange={e => this.onChange(e)}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-instagram fa-2x" />
                <input
                  type="text"
                  placeholder="Instagram URL"
                  name="instagram"
                  value={instagram}
                  onChange={e => this.onChange(e)}
                />
              </div>
            </Fragment>
          )}

          <input type="submit" className="btn btn-primary my-1" />
          <Link className="btn btn-light my-1" to="/dashboard">
            Go Back
          </Link>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.auth.user
});

export default connect(
  mapStateToProps,
  { createProfile }
)(CreateProfile);
