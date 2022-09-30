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
            let indexDelCat = getCat.findIndex(value => value === action.payload);
            getCat.splice(indexDelCat,1);
            return {...state};

        case 'deleteDog':
            let getDog = state.dogs;
            let indexDelDog = getDog.findIndex(value => value === action.payload);
            getDog.splice(indexDelDog,1);
            return {...state};

        default: return state;
    }

};

export {reducer}