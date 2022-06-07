import express from 'express';
import {
    pageHome, 
    pageAbout, 
    pageContact,
    pageTours,
    pageTour,
    pageTestimonials
} from '../controllers/pageController.js'

import saveTestimonials from '../controllers/testimonialsController.js';

const router = express.Router();

router.get('/',pageHome);
router.get('/home',pageHome);
router.get('/about',pageAbout);
router.get('/contact',pageContact);
router.get('/tours',pageTours);
router.get('/tours/:slug', pageTour);
router.get('/testimonials',pageTestimonials);
router.post('/testimonials',saveTestimonials);

export default router;