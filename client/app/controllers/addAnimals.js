app.controller('AddAnimalCtrl', function($scope, AnimalFact, ZookeeperFact,TrainerFact, TrickFact){


  const popPage = () => {
    AnimalFact.getAll()
    .then((animals) => {
      $scope.animals = animals.animals
      $scope.$apply()
    })

    ZookeeperFact.getAll()
    .then((zookeepers) => {
      $scope.zookeepers = zookeepers.zookeepers;
      $scope.$apply()
    })

    TrainerFact.getAll()
    .then((trainers) => {
      $scope.trainers = trainers.trainers;
      $scope.$apply()
    })

    TrickFact.getAll()
    .then((tricks) =>{
      $scope.tricks = tricks.tricks;
      $scope.$apply()
    })
    AnimalFact.getAllTypes()
    .then((types) =>{
      console.log("types",types.types);
      $scope.types = types.types
      $scope.$apply()
    })
  }

  popPage()

  resetCheckboxes = (arrayOfCheckboxes) => {
    for (var i = 0; i < arrayOfCheckboxes.length; i++) {
      arrayOfCheckboxes[i].checked = false
    }
  }

  $scope.addAnimal = () => {
    let selectedzookeepers = [];
    for (var i = 0; i < $scope.zookeepers.length; i++) {
      if($scope.zookeepers[i].checked){
        selectedzookeepers.push($scope.zookeepers[i])
      }
    }
    console.log("checked zookeepers", selectedzookeepers)
    $scope.newAnimal.zookeepers = selectedzookeepers;
    AnimalFact.add($scope.newAnimal)
    .then((data) => {})
    $scope.newAnimal = {}
    resetCheckboxes($scope.zookeepers)
    let selectedtrainers = [];
    for (var i = 0; i < $scope.trainers.length; i++) {
      if($scope.trainers[i].checked){
        selectedtrainers.push($scope.trainers[i])
      }
    }
    console.log("checked trainers", selectedtrainers)
    $scope.newAnimal.trainers = selectedtrainers;
    AnimalFact.add($scope.newAnimal)
    .then((data) => {})
    $scope.newAnimal = {}
    resetCheckboxes($scope.trainers)
    let selectedtricks = [];
    for (var i = 0; i < $scope.tricks.length; i++) {
      if($scope.tricks[i].checked){
        selectedtricks.push($scope.tricks[i])
      }
    }
    console.log("checked tricks", selectedtricks)
    $scope.newAnimal.tricks = selectedtricks;
    AnimalFact.add($scope.newAnimal)
    .then((data) => {})
    $scope.newAnimal = {}
    resetCheckboxes($scope.tricks)
  }

  $scope.addZookeeper = () => {
    ZookeeperFact.add($scope.newZookeeper)
    .then(() => {
      $scope.zookeepers.push($scope.newZookeeper)
      $scope.newZookeeper = {}
      $scope.$apply()
    })
  }
   $scope.addTrainer = () => {
    TrainerFact.add($scope.newTrainer)
    .then(() => {
      $scope.trainers.push($scope.newTrainer)
      $scope.newTrainer = {}
      $scope.$apply()
    })
  }
  $scope.addTrick = () => {
    TrickFact.add($scope.newTrick)
    .then(() => {
      $scope.tricks.push($scope.newTrick)
      $scope.newTrick = {}
      $scope.$apply()
    })
  }

  $scope.deleteZookeeper = (id) => {
    ZookeeperFact.delete(id)
    .then(() => {
      popPage()
    })
  }
 $scope.deleteTrainer = (id) => {
    TrainerFact.delete(id)
    .then(() => {
      popPage()
    })
  }
   $scope.deleteTrick = (id) => {
    TrickFact.delete(id)
    .then(() => {
      popPage()
    })
  }
})
