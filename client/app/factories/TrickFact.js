app.factory('TrickFact', function($http){
  console.log("here's the trick factory")

    return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`http://localhost:3000/api/v1/tricks`)
            .then((data) => {
              resolve(data.data)
            })
            .catch(err => console.log(err))
        })
      },
    add: function(newTrick) {
      return new Promise((resolve, reject) =>{
        $http.post(`http://localhost:3000/api/v1/tricks/new`, newTrick)
          .then((data) => {
            resolve(data.data.tricks)
          })
          .catch(err => console.log(err))
        })
    },
    delete: function(id) {
      return new Promise((resolve, reject) => {
        $http.delete(`http://localhost:3000/api/v1/tricks/${id}`)
          .then((data) => {
            resolve()
          })
          .catch(err => console.log(err))
      })
    }
  }
})
