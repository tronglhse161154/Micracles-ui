

import { setCategoriesList } from "../redux/reducers/categorySlice";
import { axiosClient } from "./config/axios-client";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const GetAllCategory = () => {
  const dispatch = useDispatch();

  const fetchAllCategories = async () => {
    try {
      console.log("Fetching categories ...");
      const response = await axiosClient.get("/api/SubCategory");
      dispatch(setCategoriesList(response.data));
      console.log(response);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, [dispatch]);

  return null;
};
