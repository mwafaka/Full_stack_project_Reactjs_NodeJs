import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import AlgoliaPlaces from "algolia-places-react";
import Config from "../../config.json";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";

class CreateProfile extends Component {
  state = {
    company: "",
    website: "",
    location: "",
    latlng: "",
    status: "",
    offers: "",
    permanents: "",
    events: "",
    imageUrl: "",
    bio: "",
    twitter: "",
    facebook: "",
    youtube: "",
    instagram: "",
    displaySocialInputs: false,
    toggleSocialInputs: false,
    fileImage: [],
    fileImageName: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.props.loggedInUser);
    if (this.props.loggedInUser) {
      if (this.state.fileImage.length > 0) {
        let newProfile = {
          userId: this.props.loggedInUser._id,
          profileData: { ...this.state }
        };
        const data = new FormData();
        data.append("fileImage", this.state.fileImage[0]);
        data.append("userId", JSON.stringify(newProfile.userId));
        data.append("profileData", JSON.stringify(newProfile.profileData));
        // this.props.createProfile(newProfile, this.props.history);
        this.props.createProfile(data, this.props.history);
      }
    }
  };

  selectAddressHandler = (rawAnswer, suggestion) => {
    // console.log(suggestion);
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

  selectImage = event => {
    console.log("event=>", event.target.files);
    this.setState({
      fileImage: [event.target.files[0]],
      fileImageName: event.target.files[0].name
    });
  };

  render() {
    const {
      company,
      website,
      status,
      offers,
      permanents,
      events,
      fileImage,
      fileImageName,
      bio,
      twitter,
      facebook,
      youtube,
      instagram
    } = this.state;

    return (
      <div style={{ marginTop: "100px" }}>
        <Fragment>
          <h1 className="large " style={{ fontSize: "4vw" }}>
            <i class="fas fa-cart-plus" /> Create Your Advertisment
          </h1>
          <p className="lead">
            <i className="fas fa-user" /> Let's get some information to make
            your advertisment
          </p>

          <form className="form" onSubmit={e => this.onSubmit(e)}>
            <div className="form-group">
              <select
                name="status"
                value={status}
                onChange={e => this.onChange(e)}
              >
                <option value="0">* Select </option>
                <option value="Arabic">Arabic</option>
                <option value="Turkish">Turkish</option>
                <option value="Indian">Indian</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Pauloni">Pauloni</option>
                <option value="Chinese">Chinese</option>
                <option value="Russian">Russian</option>
                <option value="Italian">Italian</option>
                <option value="German">German</option>
              </select>
              <small className="form-text">
                Give us an idea About your Restaurant
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
                  appId: Config.algoliaAppId,
                  apiKey: Config.algoliaApiKey
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
                City & state suggested (eg. Berlin, MA)
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Add your Offers "
                name="offers"
                value={offers}
                onChange={e => this.onChange(e)}
              />
              <small className="form-text">
                Please use comma separated values
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Add Events "
                name="events"
                value={events}
                onChange={e => this.onChange(e)}
              />
              <small className="form-text">
                Please use comma separated values
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Offers-Permanents "
                name="permanents"
                value={permanents}
                onChange={e => this.onChange(e)}
              />
              <small className="form-text">
                Please use comma separated values
              </small>
            </div>
            <form
              enctype="multipart/form-data"
              onChange={event => {
                this.selectImage(event);
              }}
            >
              <input type="file" name="imageUrl" />
            </form>
            <div className="form-group">
              <textarea
                placeholder="Description"
                name="bio"
                value={bio}
                onChange={e => this.onChange(e)}
              />
              <small className="form-text">
                Tell us a little about Your Restaurant
              </small>
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
              {/* <span>Optional</span> */}
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
      </div>
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
