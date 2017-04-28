app.factory('ZookeeperFact', function($http){
  console.log("here's the zookeeper factory")

    return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`http://localhost:3000/api/v1/zookeepers`)
            .then((data) => {
              resolve(data.data)
            })
            .catch(err => console.log(err))
        })
      },
    add: function(newZookeeper) {
      return new Promise((resolve, reject) =>{
        $http.post(`http://localhost:3000/api/v1/zookeepers/new`, newZookeeper)
          .then((data) => {
            resolve(data.data.zookeepers)
          })
          .catch(err => console.log(err))
        })
    },
    delete: function(id) {
      return new Promise((resolve, reject) => {
        $http.delete(`http://localhost:3000/api/v1/zookeepers/${id}`)
          .then((data) => {
            resolve()
          })
          .catch(err => console.log(err))
      })
    }
  }
})
