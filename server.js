const express = require('express');
const app = express();

// Root endpoint
app.get('/', (req, res) => {
    
    res.send('hello world');

});//end of app.get


module.exports = app;

if (require.main === module) {
    
    const PORT = process.env.PORT || 3000;
    
    app.listen(PORT, () => {
        
        console.log(`Server is running on http://localhost:${PORT}`);
   
    });//end of app.listen


}//end of if statement

