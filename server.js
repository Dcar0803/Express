const express = require('express');
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

// Root endpoint
app.get('/', (req, res) => {
    
    res.send('hello world');

});//end of app.get


module.exports = app;


/**
 * Start the server if this file is executed directly.
 * 
 * Uses the environment variable `PORT` if available, otherwise defaults to 3000.
 * Logs the URL of the running server to the console.
 */

if (require.main === module) {
    
    const PORT = process.env.PORT || 3000;
    
    app.listen(PORT, () => {
        
        console.log(`Server is running on http://localhost:${PORT}`);
   
    });//end of app.listen


}//end of if statement

