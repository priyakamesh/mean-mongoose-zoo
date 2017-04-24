app.factory('AnimalFact', function($http) {

  return {
    getAll: function() {
      console.log('getting all animals')
        return new Promise((resolve, reject) =>{
          $http.get(`https://zoo-api.herokuapp.com/api/v1/animals`)
            .then((data) => {
              console.log(data)
              resolve(data.data)
            })
            .catch(err => console.log(err))
        })
      },
    add: function(newAnimal) {
      return new Promise((resolve, reject) =>{
        $http.post(`https://zoo-api.herokuapp.com/api/v1/animals`, newAnimal)
          .then((data) => {
            resolve(data)
          })
          .catch(err => console.log(err))
        })
    },

    remove: function(id) {
      return new Promise((resolve,reject) => {
        $http.delete(`https://zoo-api.herokuapp.com/api/v1/animals`)
          .then((data) => {
            resolve()
          })
          .catch(err => console.log(err))
      })
    },

    update: (id, updateInfo) => {
      return new Promise((resolve, reject) => {
        $http.patch(`https://zoo-api.herokuapp.com/api/v1/animals`, updateInfo)
        .then((data) => {
          resolve()
        })
        .catch((err) => console.log(err))
      })
    }
  }
});
