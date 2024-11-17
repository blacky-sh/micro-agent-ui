import Setting from "../models/setting.model.js";

// @desc  Get All Settings
// @route GET /settings
export const getSettings = async (req, res, next) => {
  try {
    // Fetch settings from the database
    const settings = await Setting.find({});

    // Return a successful response
    res.status(200).json({
      success: true,
      data: settings,
    });
  } catch (error) {
    // Handle any errors
    console.error("Error fetching settings:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch settings.",
    });
  }
};


// @desc  Create new setting
// @route POST /settings
export const createSetting = async (req, res) => {
    try {
      const { apiProvider, apiKey, apiModel } = req.body;
  
      // Validate required fields
      if (!apiProvider || !apiKey || !apiModel) {
        return res.status(400).json({
          success: false,
          message: "Please provide apiProvider, apiKey, and apiModel.",
        });
      }
  
      // Create a new setting document
      const setting = await Setting.create({
        apiProvider,
        apiKey,
        apiModel,
      });
  
      // Return the created document
      res.status(201).json({
        success: true,
        data: setting,
        message: "Setting created successfully.",
      });
    } catch (error) {
      // Handle errors
      res.status(500).json({
        success: false,
        message: `Error: ${error.message}`,
      });
    }
  };
  