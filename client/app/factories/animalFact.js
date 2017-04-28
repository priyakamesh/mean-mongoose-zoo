app.factory('AnimalFact', function($http) {

  return {
    getAll: function() {
      console.log('getting all animals')
        return new Promise((resolve, reject) =>{
          $http.get(`http://localhost:3000/api/v1/animals`)
            .then((data) => {
              console.log(data)
              resolve(data.data)
            })
            .catch(err => console.log(err))
        })
      },
    add: function(newAnimal) {
      console.log(newAnimal)
      return new Promise((resolve, reject) =>{
        $http.post(`http://localhost:3000/api/v1/animals`, newAnimal)
          .then((data) => {
            resolve(data)
          })
          .catch(err => console.log(err))
        })
    },

    remove: function(id) {
      return new Promise((resolve,reject) => {
        $http.delete(`http://localhost:3000/api/v1/animals/${id}`)
          .then((data) => {
            resolve()
          })
          .catch(err => console.log(err))
      })
    },

    update: (id, updateInfo) => {
      console.log(updateInfo)
      return new Promise((resolve, reject) => {
        $http.patch(`http://localhost:3000/api/v1/animals/${id}`, updateInfo)
        .then((data) => {
          console.log(data)
          resolve()
        })
        .catch((err) => {
          console.log('err: ', err)
        })
      })
    }
  }
});
