import './App.css';
import {useReducer} from "react";
import {useForm} from "react-hook-form";
import Dog from "./Dog/Dog";
import Cat from "./Cat/Cat";


function App() {

    const {register,handleSubmit, reset} = useForm();


  const reducer = (state, action) =>{
      switch (action.type){
          case 'dog':
              let dog = state.dogs;
              dog.push(action.payload);
              return {...state};

          case 'cat':
              let cat = state.cats;
              cat.push(action.payload);
              return {...state};

          case 'deleteCat':
              let getCat = state.cats;
              let indexDel = getCat.findIndex(value => value === action.payload);
              getCat.splice(indexDel,1);
              return {...state};

          default: return state;
      }

  };

  const [state, dispatch] = useReducer(reducer, {cats:[],dogs:[]});



    function onSubmit(data) {
        if(data.cat.length > 0){
            dispatch({type:Object.keys(data)[0], payload:Object.values(data)[0]})
            reset();
        } if (data.dog.length > 0){
            dispatch({type:Object.keys(data)[1], payload:Object.values(data)[1]})
            reset();
        }

    }

    function del (data){
         if (data.deleteCat.length > 0){
             dispatch({type:Object.keys(data)[0], payload:Object.values(data)[0]})
        }
    }

    return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder={'cat'} {...register('cat')}/>
          <button>add cat</button>
          <input placeholder={'dog'}  {...register('dog')}/>
          <button>add dog</button>

      </form>

        <hr/>

        {state.cats.map((value, index) => <Cat key={index} cat={value} del={del} />)}
        {state.dogs.map((value, index) => <Dog key={index} dog={value} />)}


    </div>
  );
}

export default App;
