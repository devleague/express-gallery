/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();

const addPhoto = (item) => {
  console.log('add photo');
};

const editPhoto = (editInfo, editId) => {

};

const removeProduct = (removeInfo) => {

};

const getAllPhotos = () => {

};

const getPhotoById = (photoId) => {

};

module.exports = {
  addPhoto,
  editPhoto,
  removePhoto,
  getAllPhotos,
  getPhotoById
};