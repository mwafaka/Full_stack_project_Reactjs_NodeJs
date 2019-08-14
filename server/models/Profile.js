const mongoose = require("mongoose");
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  company: {
    type: String
  },
  location: {
    type: String
  },
  latlng: {
    type: String
  },
  imageUrl: {
    type: String
  },
  website: {
    type: String
  },
  status: {
    type: String
  },
  offers: {
    type: [String]
  },
  events: {
    type: [String]
  },
  permanents: {
    type: [String]
  },
  bio: {
    type: String
  },

  offer: [
    {
      title: {
        type: String
      },
      date: {
        type: Date
      },
      imageUrl: {
        type: String
      },
      description: {
        type: String
      }
    }
  ],
  event: [
    {
      title: {
        type: String
      },
      imageUrl: {
        type: String
      },
      date: {
        type: Date
      },
      description: {
        type: String
      }
    }
  ],
  reservation: [
    {
      name: {
        type: String
      },
      number: {
        type: Number
      },
      date: {
        type: Date,
        default: Date.now
      },
      note: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
