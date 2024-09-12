import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Settings = () => {
  const [formData, setFormData] = useState({
    apiProvider: "Anthropic Key", 
    apiKey: "",
    model: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {
    const savedApiProvider = localStorage.getItem("apiProvider");
    const savedApiKey = localStorage.getItem("apiKey");
    const savedModel = localStorage.getItem("model");

    if (savedApiProvider && savedApiKey && savedModel) {
      setFormData({
        apiProvider: savedApiProvider,
        apiKey: savedApiKey,
        model: savedModel,
      });
      setIsDisabled(true);
    } else {
      const modal = document.getElementById('my_modal_5');
      if (modal) {
        modal.showModal();
      }
    }
  }, []);

  useEffect(() => {
    const { apiProvider, apiKey, model } = formData;
    setIsFormValid(apiProvider && apiKey && model && isEdited);
  }, [formData, isEdited]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setIsEdited(true); 
  };

  const handleApiConfig = (e) => {
    e.preventDefault();
    localStorage.setItem("apiProvider", formData.apiProvider);
    localStorage.setItem("apiKey", formData.apiKey);
    localStorage.setItem("model", formData.model);
    console.log(formData);

    toast.success("Configuration saved successfully!", {
      position: "top-center",
    });
    setIsDisabled(true);
    setIsEdited(false); 
  };

  const handleEdit = () => {
    setIsDisabled(false); 
  };

  return (
    <div className="containerWrap">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Micro-Agent Configuration!</h1>
            <p className="py-6">
              Micro Agent works with Claude, OpenAI, Ollama, or any OpenAI
              compatible provider such as Groq. You need to add your API key
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Choose an API provider:</span>
                  </div>
                  <select
                    name="apiProvider"
                    className="select select-bordered"
                    value={formData.apiProvider}
                    onChange={handleChange}
                    required
                    disabled={isDisabled}
                  >
                    <option value="Anthropic Key">Anthropic</option>
                    <option value="OpenAI Key">OpenAI</option>
                  </select>
                </label>

                <label className="label">
                  <span className="label-text">API Key</span>
                </label>
                <input
                  type="text"
                  name="apiKey"
                  placeholder="API key"
                  className="input input-bordered"
                  value={formData.apiKey}
                  onChange={handleChange}
                  required
                  disabled={isDisabled}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Model</span>
                </label>
                <input
                  type="text"
                  name="model"
                  placeholder="model"
                  className="input input-bordered"
                  value={formData.model}
                  onChange={handleChange}
                  required
                  disabled={isDisabled}
                />
              </div>
              <div className="form-control mt-6">
                {isDisabled ? (
                  <button
                    type="button"
                    className="btn btn-primary w-36 place-self-end"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={handleApiConfig}
                    type="submit"
                    className="btn btn-success w-36 place-self-end"
                    disabled={!isFormValid}
                  >
                    Save
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal Code */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello there!</h3>
          <p className="py-4">To personalize your experience, please Configure Your Settings accordingly.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Settings;
