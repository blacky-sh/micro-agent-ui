import mongoose from "mongoose";

const SettingSchema = mongoose.Schema(
  {
    apiProvider: {
      type: String,
      required: [true, "Please enter apiProvider"],
    },
    apiKey: {
      type: String,
      required: [true, "Please enter apiKey"],
    },
    apiModel: {
      type: String,
      required: [true, "Please enter apiModel"],
    },
  },
  {
    timestamps: true,
  }
);

const Setting = mongoose.model("Setting", SettingSchema)

export default Setting
