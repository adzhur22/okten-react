import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars:[],
    loading:false,
    errors:null,
    updateCar:null
}

const getAllCars = createAsyncThunk(
    'carSlice/getAll',
    async (_,{rejectWithValue}) => {
         try {
            const {data} = await carService.getAll()
             return data
         }catch (e){
            rejectWithValue(e.response.data)
         }
    }
);


const createCar = createAsyncThunk(
    'carSlice/createCar',
    async (car,{rejectWithValue})=>{
        try {
          const {data} = await carService.create(car);
          return data
        }catch (e){

        }
    }
)

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async (id,{rejectWithValue,dispatch})=>{
        try{
            await carService.deleteByID(id);
            dispatch(deleteCarWithDispatch(id))
        }catch (e){

        }
    }
)


const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        deleteCarWithDispatch: (state, action)=>{
            const index = state.cars.findIndex(value => value.id === action.payload);
            state.cars.splice(index,1)
        },
        updateCar:(state, action)=>{
            state.updateCar = action.payload;
        }
    },
    extraReducers:builder => builder
        .addCase(getAllCars.fulfilled,(state, action) => {
            state.cars = action.payload;
        })
        .addCase(createCar.fulfilled,(state, action) => {
            state.cars.push(action.payload);
        })
})

const {reducer: carReducer, actions:{deleteCarWithDispatch, updateCar}} = carSlice;

const carActions = {
    getAllCars,
    createCar,
    deleteCar,
    updateCar
}

export {carActions, carReducer, deleteCar}