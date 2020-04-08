// This function stores our state.

const storeState = () => {
    let oldState = {};
    return (stateChangeFunction) => {
      const newState = stateChangeFunction(oldState);
      oldState = {...newState};
      return newState;
    }
  }
  
  const stateChanger = storeState();
  
  // This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.
  
  const changeState = (prop) => {
    return (value) => {
      return (state) => ({
        ...state,
        [prop] : (state[prop] || 0) + value
      })
    }
  }
  
  // We create two functions using our function factory. We could easily create many more.
  
  //const  = changeStatus("plant");
  const feed = changeState("soil");
  const blueFood = changeState("soil")(5);

  //
  const water = changeState("liquid");
  const tapWater = changeState("liquid")(4);
  const richWater = changeState("liquid")(10);
  //
   const beam = changeState("light");
   const sunLight = changeState("light")(7);
   
//   
  
  $(document).ready(function() {
  
  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
    $('#feed').click(function() {
      const newState = stateChanger(blueFood);
      $('#soil-value').text(newState.soil);
      $('#plant-value').text(newState.soil);

    })

    $('#beam').click(function() {
      const newState = stateChanger(sunLight);
      $('#light-value').text(newState.light);
      $('#plant-value').text(newState.light);

    })

      $('#water').click(function() {
        const newState = stateChanger(tapWater);
        $('#water-value').text(newState.liquid);
        $('#plant-value').text(newState.liquid);
      })
        $('#water2').click(function() {
            const newState = stateChanger(richWater);
            $('#water-value').text(newState.liquid);
            $('#plant-value').text(newState.liquid);
        })
       $('#health').click(function() {
        const newState = stateChanger(plant);
        $('#plant-value').text(blueFood + tapWater + richWater);
        })
    });
    
