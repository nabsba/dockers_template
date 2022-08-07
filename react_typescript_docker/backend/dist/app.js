"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.json([
        {
            "id": "123",
            "title": "Book Review: The Name of the Wind"
        },
        {
            "id": "2",
            "title": "Game Review: Pokemon Brillian Diamond"
        },
        {
            "id": "3",
            "title": "Show Review: Alice in Borderland"
        }
    ]);
});
app.listen(4000, () => {
    console.log('listening for requests on port 4000');
});
