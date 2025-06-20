const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 静的ファイル配信
app.use(express.static('dist'));

// APIキーを隠すためのプロキシエンドポイント
app.get('/api/places/autocomplete', async (req, res) => {
    try {
        const { input, types, componentRestrictions, language } = req.query;
        
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
            params: {
                input,
                types,
                componentRestrictions,
                language,
                key: process.env.GOOGLE_MAPS_API_KEY
            }
        });
        
        res.json(response.data);
    } catch (error) {
        console.error('Autocomplete API error:', error);
        res.status(500).json({ error: 'API request failed' });
    }
});

app.get('/api/places/details', async (req, res) => {
    try {
        const { placeId, fields, language } = req.query;
        
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
            params: {
                place_id: placeId,
                fields,
                language,
                key: process.env.GOOGLE_MAPS_API_KEY
            }
        });
        
        res.json(response.data);
    } catch (error) {
        console.error('Details API error:', error);
        res.status(500).json({ error: 'API request failed' });
    }
});

app.get('/api/places/nearby', async (req, res) => {
    try {
        const { location, radius, keyword, type, language } = req.query;
        
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
            params: {
                location,
                radius,
                keyword,
                type,
                language,
                key: process.env.GOOGLE_MAPS_API_KEY
            }
        });
        
        res.json(response.data);
    } catch (error) {
        console.error('Nearby API error:', error);
        res.status(500).json({ error: 'API request failed' });
    }
});

// メインページ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log('🔒 APIキーはサーバー側で安全に管理されています');
}); 