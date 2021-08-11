bikePointList = [{id:01,name:"blah"}, {id:02, name: "black pink"}, {id:03, name: "yellow pink"}]

const array = bikePointList.filter((point) =>
      point.name.includes("pink")
    )

console.log(array)