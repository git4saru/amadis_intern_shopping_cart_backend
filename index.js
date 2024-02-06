const express = require('express');
const app = express();
const cors = require('cors');
const port = 3008;
const Product = require('./product');

app.use(cors());

app.use(express.json());

// Create product
// expected body format:
// {
//     "title": "Product title",
//     "description": "Product description",
//     "price": 100,
//     "discountPercentage": 10,
//     "rating": 4.5,
//     "stock": 10,
//     "brand": "Product brand",
//     "category": "Product category",
//     "thumbnail": "https://example.com/thumbnail.jpg",
//     "images": [
//         "https://example.com/image1.jpg",
//         "https://example.com/image2.jpg"
//     ]
// }
app.post('/product', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Read product
app.get('/product/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete product
app.delete('/product/:id', async (req, res) => {
    try {
        const result = await Product.destroy({ where: { id: req.params.id } });
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// for retrieving all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        });
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update product
app.put('/product/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            await product.update(req.body);
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});