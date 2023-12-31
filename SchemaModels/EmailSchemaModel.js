const mongoose = require("mongoose");

const sent_email_schema = new mongoose.Schema({
  email_title: {
    type: "string",
    required: true,
  },
  email_subject: {
    type: "string",
    required: true,
  },
  email_content: {
    type: "string",
    required: true,
  },
  created_At: {
    type: "string",
    required: false,
  },
  email_list: {
    type: "string",
    required: true,
  },
});
module.exports = mongoose.model("sent_email_schema", sent_email_schema);
