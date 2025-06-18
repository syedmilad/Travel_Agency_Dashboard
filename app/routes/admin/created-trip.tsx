import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import {
  LayerDirective,
  LayersDirective,
  MapsComponent,
} from "@syncfusion/ej2-react-maps";
import { ID } from "appwrite";
import Header from "components/Header";
import { cn, formatKey } from "lib/utils";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { account } from "~/appwrite/client";
import { comboBoxItems, selectItems } from "~/constants";
import { world_map } from "~/constants/world_map";

const CreatedTrip = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    country: countriesData[0]?.text || "",
    travelStyle: "",
    budget: "",
    duration: 0,
    groupType: "",
    interest: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries/"
        );
        const { data } = await response.json();
        const result = data?.map((item: any) => {
          return {
            text: item?.country,
            // openStreetMap: item?.cities.map((item: any) => item),
            value: item?.country,
          };
        });
        setCountriesData(result);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    console.log("formData", formData);

    if (
      !formData.country ||
      !formData.travelStyle ||
      !formData.budget ||
      !formData.duration ||
      !formData.groupType ||
      !formData.interest
    ) {
      setError("All fields are required");
      setLoading(false);
      return; /** immidiately return the function */
    }
    if (formData.duration < 1 || formData.duration > 10) {
      setError("Duration must be between 1 to 10 days");
      setLoading(false);
      return; /** immidiately return the function */
    }
    const user = await account.get();
       if(!user.$id) {
           console.error('User not authenticated');
           setLoading(false)
           return;
       }
    try {
      const response = await fetch("/api/create-trip", {
        method: "POST",
        headers: {
          "Content-Type": "appliction/json",
        },
        body: JSON.stringify({
          country: formData.country,
          travelStyle: formData.travelStyle,
          budge: formData.budge,
          duration: formData.duration,
          groupType: formData.groupType,
          interest: formData.interest,
          userId: user?.$id || "", // Assuming you have a user object available
        }),
      });
      const result: CreateTripResponse = await response.json();
      if(result?.id) {
        navigate(`/trips/${result.id}`);
      }else{
        console.log("Error creating trip");
      }
    } catch (error) {
      console.log("Error Generating travel plan", error);
    }
  };
  const handleChange = (key: keyof TripFormData, value: string | number) => {
    console.log(`Key: ${key}, value: ${value}`);
    setFormData({ ...formData, [key]: value });
  };
  const mapData = [
    {
      country: formData.country,
      color: "#0000FF",
      coordinate:
        countriesData.find((c: any) => c.text === formData.country)
          ?.coodinates || [],
    },
  ];
  return (
    <main className="flex flex-col gap-10 pb-20 wrapper">
      <Header
        title="Add a New Trip"
        description="view and edit AI-generated travel plans"
      />
      <section className="mt-2.5 wrapper-md">
        <form className="trip-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="country">Country</label>
            <ComboBoxComponent
              id="country"
              dataSource={countriesData}
              fields={{ text: "text", value: "value" }}
              placeholder="Select a country"
              className="combo-box"
              change={(e: { value: string | undefined }) => {
                if (e.value) {
                  handleChange("country", e.value);
                }
              }}
              allowFiltering
              filtering={(e) => {
                const query = e.text.toLowerCase();
                e.updateData(
                  countriesData
                    .filter((country: any) =>
                      country.text.toLowerCase().includes(query)
                    )
                    .map((country: any) => ({
                      text: country?.text,
                      value: country?.text,
                    }))
                );
              }}
            />
          </div>
          <div>
            <label htmlFor="duration">Duration</label>
            <input
              type="number"
              id="duration"
              placeholder="Enter a number of days"
              className="form-input"
              onChange={(e) => handleChange("duration", Number(e.target.value))}
            />
          </div>
          {selectItems?.map((key) => (
            <div key={key}>
              <label htmlFor={key}>{formatKey(key)}</label>
              <ComboBoxComponent
                id={key}
                dataSource={comboBoxItems?.[key]?.map((item: any) => ({
                  text: item,
                  value: item,
                }))}
                change={(e: { value: string | undefined }) => {
                  if (e.value) {
                    handleChange(key, e.value);
                  }
                }}
                fields={{ text: "text", value: "value" }}
                className="combo-box"
                allowFiltering
                filtering={(e) => {
                  const query = e.text.toLowerCase();
                  const updatedData = comboBoxItems?.[key]
                    .filter((item) => item.toLowerCase().includes(query))
                    .map((item) => ({ text: item, value: item }));
                  e.updateData(updatedData);
                }}
              />
            </div>
          ))}
          <div>
            <label htmlFor="location">Location on the world map</label>
            <MapsComponent>
              <LayersDirective>
                <LayerDirective
                  shapeData={world_map}
                  dataSource={mapData}
                  shapePropertyPath="name"
                  shapeDataPath="country"
                  shapeSettings={{ colorValuePath: "color", fill: "#E5E5E5" }}
                />
              </LayersDirective>
            </MapsComponent>
          </div>
          <div className="bg-gray-200 h-px w-full" />
          {error && (
            <div className="error">
              <p>{error}</p>
            </div>
          )}
          <footer>
            <ButtonComponent
              type="submit"
              className="button-class !h-12 w-full"
              disabled={loading}
            >
              <img
                src={`/assets/icons/${
                  loading ? "loader.svg" : "magic-star.svg"
                }`}
                className={cn("size-5", { "animate-spin": loading })}
                alt="button-svg"
              />
              <span className="p-16-semibold text-white">
                {loading ? "Generating..." : "Generate a Trip"}
              </span>
            </ButtonComponent>
          </footer>
        </form>
      </section>
    </main>
  );
};

export default CreatedTrip;
