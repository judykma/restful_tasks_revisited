var Task = require('../models/task.js')

module.exports = {
    index: (req, res) => {
        Task.find({})
            .then(tasks => res.json(tasks))
            .catch(err =>{ 
                console.log("Error showing all!", err), 
                res.json(err)
            })
    },
    show_one: (req, res) => {
        Task.findOne({_id: req.params.id})
            .then(task => {
                console.log("task", task);
                res.json(task);
            })
            .catch(err => {
                console.log("We have an error showing one!"),
                res.json(err)
            });
    },
    create: (req, res) => {
        task = new Task();
        task.title = req.body.title; //this req.body is the object that is being sent from the browser in the form of a request . The post is the object 
        task.description = req.body.description;
        task.completed = req.body.completed;
        task.save()
            .then(newTask => {
                console.log('New DB entry: ', newTask), 
                res.json(newTask)
            })
            .catch(err => {
                console.log("We have an error creating one!", err);
                res.json(err);
            });
    },
    update_one: (req, res) => {
        console.log("UPDATING")
        Task.findOne({_id: req.params.id})
            .then(updatedTask => {
                updatedTask.title = req.body.title,
                updatedTask.description = req.body.description,
                updatedTask.completed = req.body.completed
                updatedTask.save()
                    .then(data =>{
                        res.json(data)
                    })
                    .catch(err => {
                        console.log("Error updating one"),
                        res.json(err)
                    })
            })
            .catch(err => {
                console.log("Error updating one"),
                res.json(err)
            })
    },
    destroy: (req, res) => {
        console.log("DELETING")
        Task.findOneAndRemove({_id: req.params.id})
            .then(deletedTask => {
                console.log(deletedTask.title + " has been removed."),
                res.json(deletedTask);
            })
            .catch(err => {
                console.log("Error deleting one"),
                res.json(err)
            })
    },
};
