const express = require('express');

/**
 * Creates an Express server instance.
 * 
 * The server has the following endpoint:
 * - GET /: Responds with "hello world".
 * 
 * @returns {Express.Application} An instance of an Express application.
 */
function createServer() {
    const app = express();

    /**
     * GET /
     * 
     * Responds with "hello world".
     * 
     * Response:
     * - Status: 200 OK
     * - Body: A plain-text string "hello world".
     */
    
    app.get('/', (req, res) => {
        
        res.send('hello world');
    
    });//end of app.get

    return app;
}

// Export the function for use in other files
module.exports = { createServer };

/**
 * Starts the server if this file is executed directly.
 * 
 * Uses the environment variable `PORT` if available, otherwise defaults to 3000.
 
*/

if (require.main === module) {
    
    const app = createServer();
    
    const PORT = process.env.PORT || 3000;
    
    app.listen(PORT, () => {
       
        console.log(`Server is running on http://localhost:${PORT}`);
    
    });//end of app.listen

}//end of if statment
