app.factory('TrainerFact', function($http){
  console.log("here's the zookeeper factory")

    return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`http://localhost:3000/api/v1/trainers`)
            .then((data) => {
              resolve(data.data)
            })
            .catch(err => console.log(err))
        })
      },
    add: function(newTrainer) {
      return new Promise((resolve, reject) =>{
        $http.post(`http://localhost:3000/api/v1/trainers/new`, newTrainer)
          .then((data) => {
            resolve(data.data.trainers)
          })
          .catch(err => console.log(err))
        })
    },
    delete: function(id) {
      return new Promise((resolve, reject) => {
        $http.delete(`http://localhost:3000/api/v1/trainers/${id}`)
          .then((data) => {
            resolve()
          })
          .catch(err => console.log(err))
      })
    }
  }
})
