import express from 'express';
import { Article } from '../models/articleModel.js';

const router = express.Router(); 


// Route for saving a new article
router.post('/', async (request, response) => {
    try {   
        const { title, author, publishYear, peerReviewed } = request.body;

        // Ensure all required fields are present
        if (!title || !author || !publishYear || typeof peerReviewed !== 'boolean') {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear, peerReviewed'
            });
        }

        const newArticle = {
            title,
            author,
            publishYear,
            peerReviewed
        };

        const article = await Article.create(newArticle);
        return response.status(201).send(article);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Get ALL articles from the database
router.get('/', async (request, response) => {
    try {
        const articles = await Article.find({});
        return response.status(200).send({
            count: articles.length,
            data: articles
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})  
    }
})

// Get single article by ID
router.get('/:id', async (request, response) => {
    try { 
        const { id } = request.params;
        const article = await Article.findById(id);
        return response.status(200).send(article);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})  
    }
})

// Update a article by ID
router.put('/:id', async (request, response) => {
    try {   
        const { title, author, publishYear, peerReviewed } = request.body;

        // Ensure all required fields are present
        if (!title || !author || !publishYear || typeof peerReviewed !== 'boolean') {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear, peerReviewed'
            });
        }

        const { id } = request.params;
        const result = await Article.findByIdAndUpdate(id, { title, author, publishYear, peerReviewed }, { new: true });

        if (!result) {
            return response.status(404).json({ message: 'Article not found' });
        }

        return response.status(200).send({ message: 'Article updated successfully', article: result });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Delete a article by ID
router.delete('/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const result = await Article.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({message: 'Article not found'})
        }
        return response.status(200).send({message: 'Article deleted successfully'})

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})  
    }
})

export default router;