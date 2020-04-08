// This function stores our state.

const storeState = () => {
    let oldState = {};
    return (stateChangeFunction) => {
      const newState = stateChangeFunction(oldState);
      oldState = {...newState};
      return newState;
    }
  }


  
  const plantOne = storeState();
  const plantTwo = storeState();
  const  plantHealth = storeState();




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
  
  
  const feed = changeState("soil");
  const blueFood = changeState("soil")(5);
  const manure = changeState("soil")(7);

  //
  const water = changeState("liquid");
  const tapWater = changeState("liquid")(4);
  const richWater = changeState("liquid")(10);
  //
   const beam = changeState("light");
   const sunLight = changeState("light")(7);
   
//   add health value to state.
//const care = changeState("weed");
  
  $(document).ready(function() {
  
  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
    $('#feed').click(function() {
      const newState = plantOne(blueFood);
      $('#soil-value').text(newState.soil);
      $('#plant-value').text(newState.soil);
  })
    $('#feed2').click(function() {
      const newState = plantOne(manure);
      $('#soil-value').text(newState.soil);
      $('#plant-value').text(newState.soil);
    })

    $('#beam').click(function() {
      const newState = plantOne(sunLight);
      $('#light-value').text(newState.light);
      $('#plant-value').text(newState.light);

    })

      $('#water').click(function() {
        const newState = plantOne(tapWater);
        $('#water-value').text(newState.liquid);
        $('#plant-value').text(newState.liquid);
      })
        $('#water2').click(function() {
            const newState = plantOne(richWater);
            $('#water-value').text(newState.liquid);
            $('#plant-value').text(newState.liquid);
        })

        ////////second plant//////////////////////////

        $('#feed').click(function() {
          const newState = plantTwo(blueFood);
          $('#soil-value').text(newState.soil);
          $('#plant-value2').text(newState.soil);
      })
        $('#feed2').click(function() {
          const newState = plantTwo(manure);
          //const newState = plantTwo(manure);
          $('#soil-value').text(newState.soil);
          $('#plant-value2').text(newState.soil);
        })
    
        $('#beam').click(function() {
          const newState = plantTwo(sunLight);
          $('#light-value').text(newState.light);
          $('#plant-value2').text(newState.light);
    
        })
    
          $('#water').click(function() {
            const newState = plantTwo(tapWater);
            $('#water-value').text(newState.liquid);
            $('#plant-value2').text(newState.liquid);
          })
            $('#water2').click(function() {
                const newState = plantTwo(richWater);
                $('#water-value').text(newState.liquid);
                $('#plant-value2').text(newState.liquid);
            })
            //////////////////plant health /////////////////////////////////
            $('#care').text(function() {
              const newState = plantHealth(blueFood);
              $('#soil-value').text(newState.soil);
              $('#plant-value').text(newState.soil);
          })
            $('#care2').text(function() {
              const newState = plantHealth(manure);
              //const newState = plantTwo(manure);
              $('#soil-value').text(newState.soil);
              $('#plant-value').text(newState.soil);
            })
        
            $('#beam').text(function() {
              const newState = plantHealth(sunLight);
              $('#light-value').text(newState.light);
              $('#plant-value').text(newState.light);
        
            })
        
              $('#water').text(function() {
                const newState = plantHealth(tapWater);
                $('#water-value').text(newState.liquid);
                $('#plant-value').text(newState.liquid);
              })
                $('#water2').text(function() {
                    const newState = plantHealth(richWater);
                    $('#water-value').text(newState.liquid);
                    $('#plant-value').text(newState.liquid);
                })
   
    });
    
