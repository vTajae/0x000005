import { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { Autocomplete, TextField } from "@mui/material";

const libraries = ["places"];
const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export const useAutocomplete = (formik, expanded) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  useEffect(() => {
    if (isLoaded && expanded) {
      const autocompleteService = new window.google.maps.places.AutocompleteService();
      autocompleteService.getPlacePredictions(
        { input: search, types: ["address"] },
        (results) => {
          setOptions(results || []);
        }
      );
    }
  }, [isLoaded, search, expanded]);

  const handleAutocompleteChange = (newValue) => {
    if (newValue) {
      setSelectedPlace(newValue);
      formik.setFieldValue("CompanyAddress", newValue.description);
    }
  };
  

  return { selectedPlace, search, options, setSearch, handleAutocompleteChange };
};

export const MyAutocomplete = ({ field, formik, options, selectedPlace, handleAutocompleteChange, label, autocompleteProps, ...rest }) => {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.description}
      renderInput={(params) => (
        <TextField
          {...params}
          {...autocompleteProps}
          {...field}
          label={label}
        />
      )}
      onChange={(event, newValue) => {
        handleAutocompleteChange(newValue);
      }}
      value={selectedPlace}
      {...rest}
    />
  );
};


