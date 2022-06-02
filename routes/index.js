import express from 'express';
import {pageHome, pageAbout, pageContact,pageTours,pageTestimonials} from '../controllers/pageController.js'
const router = express.Router();

router.get('/',pageHome);
router.get('/home',pageHome);
router.get('/about',pageAbout);
router.get('/contact',pageContact);
router.get('/tours',pageTours);
router.get('/testimonials',pageTestimonials);

export default router;