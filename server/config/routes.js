tasks = require('../controllers/tasks.js')

module.exports = function(app){
    app.get('/tasks', tasks.index);

    // RETRIEVE A TASK BY ID
    app.get('/tasks/:id', tasks.show_one);

    //CREATE A TASK
    app.post('/tasks', tasks.create);

    //UPDATE A TASK BY ID
    app.put('/tasks/:id/', tasks.update_one);

    //DELETE A TASK BY ID
    app.delete('/remove/:id/', tasks.destroy);
};

