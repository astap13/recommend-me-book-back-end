const express = require('express');
const router = express.Router();
const commons = require('./commons');

// Маршрут для сохранения книги
router.post('/save-book', (req, res) => {
    try {
        const { bookId } = req.body;

        // Проверка, чтобы избежать дублирования книг
        if (!commons.savedBooks.includes(bookId)) {
            commons.savedBooks.push(bookId);
        }

        return res.status(200).json({ message: 'Book saved successfully' });
    } catch (error) {
        console.error('Error saving book:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// Маршрут для получения списка сохраненных книг
router.get('/saved-books', (req, res) => {
    try {
        const savedBooks = commons.savedBooks;
        return res.status(200).json({ savedBooks });
    } catch (error) {
        console.error('Error fetching saved books:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
