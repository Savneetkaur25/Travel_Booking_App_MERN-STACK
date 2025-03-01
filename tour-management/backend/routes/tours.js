 import express from "express";
import { createTour , deleteTour, getAllTour, getFeaturedTours, getSingleTour, getTourBySearch, getTourCount, updateTour } from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

 const router = express.Router()



 // create new tour
 router.post('/', verifyAdmin,  createTour);

  // update  tour
  router.put('/:id', verifyAdmin, updateTour);

   // delete  tour
 router.delete('/:id', verifyAdmin, deleteTour);

  // get Single tour
  router.get('/:id', getSingleTour);

   // get All tour
 router.get('/', getAllTour);

 router.get('/search/getTourBySearch', getTourBySearch);

router.get('/search/getFeaturedTours', getFeaturedTours);

router.get('/search/getTourCount', getTourCount);


 export default router;